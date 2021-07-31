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
        colors: ["#ff0000", "#008ffb"],
        labels: ["Wish Not Fulfilled", "Wishes Fulfilled"],
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
