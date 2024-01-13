<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, toRefs, watch, computed, onMounted, onUnmounted, shallowRef } from 'vue'
import { usePreferredDark } from '@vueuse/core'

const props = defineProps({
  options: {
    required: true,
    type: Object,
    default: () => ({})
  }
})

const { options } = toRefs(props)
const emit = defineEmits(['updateAxisPointer', 'update:theme'])

const container = ref(null)
const chartRef = shallowRef(null)

const isDark = usePreferredDark() // 获取用户的浏览器偏好主题
const theme = computed(() => (isDark.value ? 'dark' : 'light'))
watch(
  isDark,
  newVal => {
    emit('update:theme', newVal)
  },
  { immediate: true }
)

watch(
  options,
  newOption => {
    if (chartRef.value) {
      chartRef.value.setOption(newOption)
    }
  },
  { immediate: false, deep: true }
)

onMounted(() => {
  chartRef.value = echarts.init(container.value, theme.value)
  chartRef.value.setOption(options.value)

  // 监听图表的轴指针事件
  chartRef.value.on('updateAxisPointer', event => {
    emit('updateAxisPointer', {
      chart: chartRef.value,
      event
    })
  })
  // 监听浏览器窗口大小变化
  window.addEventListener('resize', () => {
    chartRef.value.resize()
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {})
  chartRef.value.dispose()
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
