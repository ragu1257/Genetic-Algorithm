<template>
      <div id="chart">
        <apexchart type="bar" height="430" :options="chartOptions" :series="series"></apexchart>
        <!-- {{barArrayObject}} -->
      </div>
</template>

<script>
import { stubTrue } from 'lodash';
import VueApexCharts from "vue3-apexcharts";
export default {
  props: {
    barArrayObject: Array,
  },
  components: {
    apexchart: VueApexCharts,
  },
  data: function(){
            return {
          series: this.barArrayObject,
          chartOptions: {
            chart: {
              type: 'bar',
              height: 430
            },
            plotOptions: {
              bar: {
                horizontal: false,
                dataLabels: {
                  position: 'top',
                },
              }
            },
            dataLabels: {
              enabled: true,
              offsetX: -6,
              style: {
                fontSize: '12px',
                colors: ['#fff']
              }
            },
            stroke: {
              show: true,
              width: 1,
              colors: ['#fff']
            },
            tooltip: {
              shared: true,
              intersect: false
            },
            legend: {
      show: true,
       formatter: function(seriesName, opts) {
        return [ "day - ", [opts.seriesIndex+1]]
    }
      },
            // xaxis: {
            //   categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
            // },
          },
          
            }
        },
  methods: {
    dataPointSelectionHandler(config) {
      this.$emit("update-table", { config });
    },
  },
  created: function() {
    // `this` points to the vm instance
    // console.log("a is: " + this.staffingArray);
  },
};
</script>

<style></style>