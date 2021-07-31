<template>
  <div id="chart">
    <apexchart
      type="pie"
      width="380"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    {{totalWishNotFulfilled}}
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  props: {
    totalWishNotFulfilled: Array,
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
  mounted: function() {
    this.series = this.totalWishNotFulfilled;
    this.chartOptions = {
      chart: {
        width: 380,
        type: "pie",
      },
      colors: ["#ff0000", "#008ffb"],
      labels: ["Not Fulfilled", "Wishes Fulfilled"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
  },
};
</script>

<style></style>
