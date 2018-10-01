<template>
  <div style="margin: auto 0; text-align: center">
    <el-row class="charts-row">
      <el-col class="charts-col" :span="20" :offset="2">
        <div class="chart" id="chart"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  //引入echarts相关组件，按需引入
  require('echarts/lib/chart/line');
  require('echarts/lib/chart/bar');
  require('echarts/lib/chart/pie');
  // 引入提示框和title组件，图例
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  require('echarts/lib/component/legend');

  let echarts = require('echarts/lib/echarts');
  let chart;
    export default {
        name: "echart",
      data() {
          return {

          }
      },
      methods: {
        loadChart() {
          chart = echarts.init(document.getElementById("chart"));
          let option = {};
          setTimeout(function () {
            option = {
              title : {
                text: 'xxx省OPPO高端机销量',
                x:'center',
              },
              legend: {
                right: 10,
                orient: 'vertical'
              },
              tooltip: {
                trigger: 'axis',
                showContent: false
              },
              dataset: {
                source: [
                  ['product', '1号', '2号', '3号', '4号', '5号', '6号'],
                  ['R15', 100, 89, 84, 90, 83, 98],
                  ['R17', 86, 92, 85, 83, 73, 55],
                  ['A77', 24, 67, 79, 86, 65, 82],
                  ['Find X', 55, 67, 69, 72, 53, 39]
                ]
              },
              xAxis: {type: 'category'},
              yAxis: {gridIndex: 0},
              grid: {top: '55%'},
              series: [
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {
                  type: 'pie',
                  id: 'pie',
                  radius: '30%',
                  center: ['50%', '25%'],
                  label: {
                    formatter: '{b}: {@2012} ({d}%)'
                  },
                  encode: {
                    itemName: 'product',
                    value: '1号',
                    tooltip: '2012'
                  }
                }
              ]
            };

            chart.on('updateAxisPointer', function (event) {
              var xAxisInfo = event.axesInfo[0];
              if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                chart.setOption({
                  series: {
                    id: 'pie',
                    label: {
                      formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                      value: dimension,
                      tooltip: dimension
                    }
                  }
                });
              }
            });
            chart.setOption(option);
          });
        }
      },
      mounted() {
        this.loadChart();
      }
    }
</script>

<style scoped>
  .charts-col {
    height: 500px;
  }
  .chart {
    height: 500px;
  }
</style>
