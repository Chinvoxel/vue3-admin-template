<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, onUnmounted, ref, toRefs, watch } from 'vue'

const props = defineProps({
  options: {
    required: true,
    type: Object,
    default: () => ({})
  }
})

const { options } = toRefs(props)

const container = ref(null)
const chartRef = ref(null)

watch(
  options,
  newOption => {
    if (chartRef.value) {
      chartRef.value.setOption(newOption)
    }
  },
  { deep: true }
)

onMounted(() => {
  chartRef.value = echarts.init(container.value, 'dark')
  chartRef.value.setOption(options.value)

  window.addEventListener('resize', () => {
    chartRef.value.resize()
  })
})

onUnmounted(() => {
  chartRef.value.dispose()
  window.removeEventListener('resize', () => {})
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
