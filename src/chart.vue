<template>
  <div v-if="series && chartOptions" id="chart">
    <apexchart
      type="scatter"
      height="350"
      :options="chartOptions"
      :series="series"
      @dataPointSelection="dataPointSelectionHandler"
    ></apexchart>
    {{ category }}
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  props: {
    staffingFairnessArray: Array,
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
  methods: {
    dataPointSelectionHandler(config) {
      this.$emit("update-table", { config });
    },

    createChartData(fairnessArray) {
      console.log("in chart data"),
        (this.series = [
          {
            name: "Fairness and Staffing",
            data: fairnessArray,
          },
        ]),
        (this.chartOptions = {
          chart: {
            height: 350,
            type: "scatter",
            zoom: {
              enabled: false,
            },
            events: {
              click: (event, chartContext, config) => {
                this.dataPointSelectionHandler(config.dataPointIndex);
                // this.$emit('update-cart')
                console.log("1", config.config.series[config.seriesIndex]);
                console.log("2", config.config.series[config.seriesIndex].name);
                console.log(
                  "3",
                  config.config.series[config.seriesIndex].data[
                    config.dataPointIndex
                  ]
                );
              },
            },
          },
          // dataLabels: {
          //   enabled: true,
          // },
          stroke: {
            show: true,
            curve: "smooth",
          },
          title: {
            text: "Fairness and Staffing trade-off",
            align: "left",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            tickAmount: 10,
            labels: {
              formatter: function(val) {
                return parseFloat(val).toFixed(1);
              },
            },
          },
          yaxis: {
            tickAmount: 7,
          },
        });
    },
  },
  created: function() {
    // `this` points to the vm instance
    // console.log("a is: " + this.staffingArray);
  },
  mounted: function() {
    this.createChartData(this.staffingFairnessArray);
  },
  computed: {
    category: function() {
       this.createChartData(this.staffingFairnessArray);
      return this.staffingFairnessArray;
    },
  },
};
</script>

<style></style>
