<template>
  <div v-if="createChart && createChartOptions" id="chart">
    <apexchart
      type="bar"
      height="350"
      :options="createChartOptions"
      :series="createChart"
    ></apexchart>
    {{this.standardMeanValue}}
  </div>
</template>
 
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  props: {
    standardMeanArray: Array,
    standardMeanValue: Number
  },
  components: {
    apexchart: VueApexCharts,
  },
  data: function() {
    return {
      series: null,
      chartOptions: null,
    };
  },
  computed: {
    createChart: function() {
      return [
        {
          name: "wish fulfilled",
          data: this.standardMeanArray,
        },
      ];
    },
    createChartOptions: function() {
      return {
        chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                colors: {
                  ranges: [{
                    from: -100,
                    to: -46,
                    color: '#F15B46'
                  }, {
                    from: -45,
                    to: 0,
                    color: '#FEB019'
                  }]
                },
                columnWidth: '80%',
              }
            },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return (val);
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
            yaxis: {
              title: {
                text: 'mean deviation',
              },
              labels: {
                formatter: function (y) {
                  return (parseInt(y));
                }
              }
            },
            xaxis: {
              type: 'numberOfEmployees',
            //   categories: [
            //     '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            //     '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            //     '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            //     '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            //     '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            //     '2013-07-01', '2013-08-01', '2013-09-01'
            //   ],
              labels: {
                rotate: -90
              }
            }          
      };
    },
  },
};
</script>
 
