<template>
  <div class="container">
    <Chart v-model:theme="theme" class="chart" :options="chartOptions" @update-axis-pointer="onUpdateAxisPointer" />
  </div>
</template>

<script setup>
import Chart from '@comps/Chart/index.vue'
import { useChart } from './hooks/useChart'

const { theme, chartOptions } = useChart()

const onUpdateAxisPointer = ({ event, chart }) => {
  const xAxisInfo = event.axesInfo[0]
  if (xAxisInfo) {
    const dimension = xAxisInfo.value + 1
    chart.setOption({
      series: {
        id: 'pie',
        label: {
          formatter: `{b}: {@[${dimension}]} ({d}%)`
        },
        encode: {
          value: dimension,
          tooltip: dimension
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  @include flex(center);

  width: 100%;
  height: 100%;

  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>
