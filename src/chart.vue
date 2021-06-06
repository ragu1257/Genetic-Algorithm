<template>
  <div id="chart">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
      @dataPointSelection="dataPointSelectionHandler"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  props: {
    staffingArray: Array,
    fairnessArray: Array,
  },
  components: {
    apexchart: VueApexCharts,
  },
  data: function() {
    return {
      series: [
        {
          name: "Fairness Score",
          data: this.fairnessArray,
        },
         {
          name: "Staffing Score",
          data: this.staffingArray,
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
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
        dataLabels: {
          enabled: true,
        },
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
          show: false,
          type: "category",
          categories: this.staffingArray,
          labels: {
            show: false,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
              colors: [],
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
            offsetX: 0,
            offsetY: 0,
            format: undefined,
            formatter: undefined,
            datetimeUTC: true,
            datetimeFormatter: {
              year: "yyyy",
              month: "MMM 'yy",
              day: "dd MMM",
              hour: "HH:mm",
            },
          },
           axisTicks: {
          show: false,
          borderType: 'solid',
          color: '#78909C',
          height: 6,
          offsetX: 0,
          offsetY: 0
      },
        },
      },
    };
  },
  methods: {
    dataPointSelectionHandler(config) {
      this.$emit("update-table", { config });
    },
  },
  created: function() {
    // `this` points to the vm instance
    console.log("a is: " + this.staffingArray);
  },
};
</script>

<style></style>
