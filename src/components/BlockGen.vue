<template>
  <div class="com-container">
    <div class="com-chart com-chartbg" ref="blockgen_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      allData: null,
      startValue: 0,
      endValue: 6,
      timerId: null,
    };
  },
  mounted() {
    this.initChart();
    this.getData();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  destroyed() {
    window.removeEventListener("resize", this.screenAdapter);
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.blockgen_ref);
      const initOption = {
        title: {
          text: "业务并发量",
          textStyle: {
            color: "#ffffff",
          },
        },
        grid: {
          top: "25%",
          left: "8%",
          right: "10%",
          bottom: "6%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          formatter: "时 间: {b0}<br />业务并发量：{c0}",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          // 不需要坐标轴轴线
          axisLine: {
            show: false,
          },
          // 底部刻度线的设置
          axisTick: {
            lineStyle: {
              color: "#07536a",
            },
          },
          axisLabel: {
            color: "#aaa",
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              color: "#07536a",
            },
          },
          // 设置左标签文字
          axisLabel: {
            color: "#ddd",
          },
        },
        series: [
          {
            type: "line",
            color: "#05b6d8",
            lineStyle: {
              width: 3,
            },
            symbolSize: 8,
            areaStyle: {
              color: "#1e709b",
            },
          },
        ],
      };
      this.chartInstance.setOption(initOption);
      this.chartInstance.on("mouseover", () => {
        clearInterval(this.timerId);
      });
      this.chartInstance.on("mouseout", () => {
        this.startInterval(this.timerId);
      });
    },
    async getData() {
      const { data: ret } = await this.$http.get(
        "/blockGenerationRate/latest-6hrs"
      );
      this.allData = ret.playload;
      // console.log(this.allData);
      this.updateChart();
      this.startInterval();
    },
    updateChart() {
      const rateValue = this.allData.map((item) => {
        return item.rate;
      });
      const time = this.allData.map((item) => {
        return item.time;
      });
      const dataOption = {
        xAxis: {
          data: time,
        },
        series: [
          {
            data: rateValue,
            animation: true,
          },
        ],
        dataZoom: {
          show: false,
          startValue: this.startValue,
          endValue: this.endValue,
        },
      };
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      const refHeight = this.$refs.blockgen_ref.offsetHeight;
      const refWidth = this.$refs.blockgen_ref.offsetWidth;
      let HW = [0, 0];
      if (refHeight / refWidth > 264 / 474) {
        // 当高占比为100%时
        HW = [0.95, 1.7, (refHeight / 100) * 7.2];
      } else {
        HW = [0.9, 1.7, (refWidth / 100) * 4];
      }
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: HW[2],
          },
          top: HW[2] * HW[0],
          left: HW[2] * HW[1],
        },
        series: [
          {
            barWidth: HW[2],
          },
        ],
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
    startInterval() {
      if (this.timerId) {
        clearInterval(this.timerId);
      }
      this.timerId = setInterval(() => {
        this.startValue++;
        this.endValue++;
        if (this.endValue > this.allData.length - 1) {
          this.startValue = 0;
          this.endValue = 6;
        }
        this.updateChart();
      }, 2000);
    },
  },
};
</script>

<style>
</style>