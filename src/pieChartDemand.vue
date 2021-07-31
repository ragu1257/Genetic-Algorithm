<template>
  <div id="chart">
    <apexchart
      type="pie"
      width="380"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  props: {
    totalDemandOutcome: Array,
  },
  components: {
    apexchart: VueApexCharts,
  },
  data: function() {
    return {
      series: this.totalDemandOutcome,
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        colors: ["#ff0000", "#008ffb"],
        labels: ["Demand Fulfilled", "Demand Not Fulfilled"],
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
      },
    };
  },
};
</script>

<style></style>
