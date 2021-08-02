<template>
  <div v-if="createChart" id="chart">
    <apexchart
      type="pie"
      width="380"
      :options="chartOptions"
      :series="createChart"
    ></apexchart>
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
      // series: null,
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        colors: [ "#008ffb", "#ff0000"],
        labels: [ "Wishes Fulfilled", "Wish Not Fulfilled",],
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
      }
    };
  },
  computed: {
    createChart: function() {
    return this.totalWishNotFulfilled;
    },
  },
};
</script>

<style></style>
