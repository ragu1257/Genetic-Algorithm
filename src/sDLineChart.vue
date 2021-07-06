<template>
  <div id="chart">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
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
      series: [
        {
          name: "Desktops",
          data: this.standardDeviationArray,
        },
      ],
      chartOptions: {
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
          xaxis: [{
            x: parseInt(this.standardDeviation),
            strokeDashArray: 0,
            borderColor: '#775DD0',
            label: {
              borderColor: '#775DD0',
              style: {
                color: '#fff',
                background: '#775DD0',
              },
              text: 'Anno Test',
            }
          }]
        },
        
        // xaxis: {
        //   categories: [
        //     "Jan",
        //     "Feb",
        //     "Mar",
        //     "Apr",
        //     "May",
        //     "Jun",
        //     "Jul",
        //     "Aug",
        //     "Sep",
        //   ],
        // },
      },
    };
  },
};
</script>
