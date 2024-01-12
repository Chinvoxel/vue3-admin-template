<template>
  <Chart class="chart" :options="chartOptions" />
</template>

<script setup>
import Chart from '@comps/Chart/index.vue'

const chartOptions = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}
</script>

<style lang="scss" scoped>
.chart {
  width: 50vw;
  height: 30vh;
}
</style>
