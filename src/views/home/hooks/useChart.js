import { computed, ref, watch } from 'vue'

export const useChart = () => {
  const theme = ref(false)
  const baseTheme = ref({
    bgColor: '#FFFFFF',
    textColor: '#333333'
  })

  const chartOptions = computed(() => ({
    legend: {
      padding: 20
    },
    tooltip: {
      trigger: 'axis',
      showContent: false
    },

    backgroundColor: baseTheme.value.bgColor,

    title: {
      show: true,
      text: '前端异常监控',
      subtext: false,
      textStyle: {
        fontSize: 18,
        color: baseTheme.value.textColor
      },
      padding: 20
    },

    dataset: {
      source: [
        ['日期', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['语法错误（Syntax Errors）', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
        ['类型错误（Type Errors', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['引用错误', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['逻辑错误（Logic Errors）', 25.2, 37.1, 41.2, 18, 33.9, 49.1],
        ['运行时错误（Runtime Errors）', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2012} ({d}%)'
        },
        encode: {
          itemName: '日期',
          value: '2012',
          tooltip: '2012'
        }
      }
    ]
  }))

  watch(
    theme,
    newVal => {
      baseTheme.value = {
        bgColor: newVal ? '#39485C' : '#FFFFFF',
        textColor: newVal ? '#FFFFFF' : '#39485C'
      }
    },
    { immediate: true }
  )

  return { theme, chartOptions }
}
