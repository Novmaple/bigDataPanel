<template>
  <div class="com-container">
    <div class="com-chart com-chartbg" ref="storage_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      allData: null,
      startValue: 0,
      endValue: 7,
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
      this.chartInstance = this.$echarts.init(this.$refs.storage_ref, "chalk");
      const initOption = {
        title: {
          text: "每日存证数量",
          textStyle: {
            color: "#ffffff",
          },
        },
        grid: {
          top: "25%",
          left: "10%",
          right: "10%",
          bottom: "6%",
          containLabel: true,
        },
        tooltip: {
          show: true,
          formatter: "时 间: {b0}<br />存证数量：{c0}",
        },
        xAxis: {
          type: "category",
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
            type: "bar",
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0.7,
                  color: "#04c6e9",
                },
                {
                  offset: 0,
                  color: "#03314c",
                },
              ]),
              // 设置透明度
              opacity: 0.75
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
        "https://result.eolinker.com/iwvT4g78dfde82d24f1a538e8e5ff9d7b8c9fef930893b2?uri=http://127.0.0.1/certificate-stats/latest-7-inday/"
      );
      this.allData = eval("(" + ret + ")").playload;
      // console.log(this.allData);
      this.updateChart();
      this.startInterval();
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
    },
    screenAdapter() {
      //
      let HW = [0, 0];
      if (
        this.$refs.storage_ref.offsetHeight /
          this.$refs.storage_ref.offsetWidth >
        264 / 474
      ) {
        // 当高占比为100%时
        HW = [0.95, 1.7, (this.$refs.storage_ref.offsetHeight / 100) * 7.2];
      } else {
        HW = [0.95, 1.7, (this.$refs.storage_ref.offsetWidth / 100) * 4];
      }
      // console.log(HW)
      // this.BaseSize = (this.$refs.storage_ref.offsetHeight / 100) * 7.2;
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
          this.endValue = 7;
        }
        this.updateChart();
      }, 2000);
    },
  },
};
</script>

<style>
</style>