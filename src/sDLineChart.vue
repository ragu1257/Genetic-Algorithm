<template>
  <div v-if="createChart && createChartOptions" id="chart">
    <apexchart
      type="line"
      height="350"
      :options="createChartOptions"
      :series="createChart"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  props: {
    standardDeviationArray: Array,
    standardDeviation: Number,
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
      return([
        {
          name: "wish fulfilled",
          data: this.standardDeviationArray,
        },
      ])
     
    },
    createChartOptions: function(){
      return {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Product Trends by Month",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        annotations: {
          xaxis: [
            {
              x: parseInt(this.standardDeviation)*4,
              strokeDashArray: 0,
              borderColor: "#775DD0",
              label: {
                borderColor: "#775DD0",
                style: {
                  color: "#fff",
                  background: "#775DD0",
                },
                text: "mean wish fulfilled",
              },
            },
          ],
        },
      }
    }
  },
};
</script>
