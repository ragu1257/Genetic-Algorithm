<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="createChart"
    ></apexchart>
    <!-- {{ dataLabels }} -->
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  props: {
    dataLabels: Array,
  },
  components: {
    apexchart: VueApexCharts,
  },
  data: function() {
    return {
      // series: null,
      chartOptions: {
        grid: {
          show: false,
        },
        chart: {
          height: 450,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 50,
             columnWidth: '30%',
               barHeight: '70%',
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },

        xaxis: {
          categories: [
            "Emp 1",
            "Emp 2",
            "Emp 3",
            "Emp 4",
            "Emp 5",
            "Emp 6",
            "Emp 7",
            "Emp 8",
            "Emp 9",
            "Emp 10",
          ],
          position: "bottom",
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          //   crosshairs: {
          //     fill: {
          //       type: 'gradient',
          //       gradient: {
          //         colorFrom: '#D8E3F0',
          //         colorTo: '#BED1E6',
          //         stops: [0, 100],
          //         opacityFrom: 0.4,
          //         opacityTo: 0.5,
          //       }
          //     }
          //   },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function(val) {
              return val + "%";
            },
          },
        },
        // title: {
        //   text:
        //     "Percentage of wish fulfilled of each employee in complete planning period",
        //   floating: true,
        //   offsetY: 330,
        //   align: "center",
        //   style: {
        //     color: "#444",
        //   },
        // },
      },
    };
  },
  computed: {
    createChart: function() {
      console.log("dataLabels", this.dataLabels);
      return this.dataLabels;
    },
  },
};
</script>

<style></style>
