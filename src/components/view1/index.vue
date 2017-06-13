<template>
  <view-container class="view1" :attr="attr">
    <div id="view1-div1"></div>
  </view-container>
</template>

<script>
  import echarts from 'echarts/lib/echarts.js'
  import 'echarts/lib/chart/bar'
  export default {
    name: 'View1',
    data () {
      return {
        attr: {
          x: 100,
          y: 100,
          w: 400,
          h: 300
        },
        chart: null
      }
    },
    mounted () {
      this.chart = echarts.init(document.getElementById('view1-div1'))
      this.chart.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          axisTick: {
            alignWithLabel: true
          }
        }],
        series: [{
          name: '直接访问',
          type: 'bar',
          barWidth: '40%',
          data: [1, 3, 2, 3, 4, 2, 1, 3, 3, 2, 3, 2]
        }],
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: '{c}'
          }
        }
      })
    }
  }
</script>

<style scoped>
  .view1 {
    border: 3px solid cyan;
  }
  
  #view1-div1 {
    width: 100%;
    height: 100%;
  }
</style>
