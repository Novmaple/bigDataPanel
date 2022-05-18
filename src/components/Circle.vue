<template>
  <div ref="circle_ref"></div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      allData: null,
    };
  },
  mounted() {
    this.initChart();
    this.getData();
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.circle_ref);
      const initOption = {};
      this.chartInstance.setOption(initOption);
    },
    async getData() {
      const { data: ret } = await this.$http.get(
        "https://result.eolinker.com/iwvT4g78dfde82d24f1a538e8e5ff9d7b8c9fef930893b2?uri=http://127.0.0.1/certificate-stats/latest-7-inday/"
      );
      this.allData = eval("(" + ret + ")").playload;
      console.log(this.allData);
      this.updateChart();
    },
    updateChart() {
      const day = this.allData.map((item) => {
        return item.day;
      });
      const count = this.allData.map((item) => {
        return item.count;
      });
      const dataOption = {
        xAxis: {
          data: day,
        },
        dataZoom: {
          show: false,
          startValue: this.startValue,
          endValue: this.endValue,
        },
        series: [
          {
            data: count,
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      const adaterOption = {};
      this.chartInstance.setOption(adaterOption);
    },
  },
};
</script>

<style>
</style>