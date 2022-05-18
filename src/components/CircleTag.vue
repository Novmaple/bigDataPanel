<template>
  <div class="com-container">
    <div class="circleTag_container">
      <table>
        <tr>
          <th>
            <div class="com-circleTag-value">{{ allData.value[0] }}</div>
            <div class="com-circleTag-text">{{ allData.name[0] }}</div>
          </th>
          <th>
            <div class="com-circleTag-value">{{ allData.value[1] }}</div>
            <div class="com-circleTag-text">{{ allData.name[1] }}</div>
          </th>
          <th>
            <div class="com-circleTag-value">{{ allData.value[2] }}</div>
            <div class="com-circleTag-text">{{ allData.name[2] }}</div>
          </th>
        </tr>
        <tr>
          <th>
            <div class="com-circleTag-value">{{ allData.value[3] }}</div>
            <div class="com-circleTag-text">{{ allData.name[3] }}</div>
          </th>
          <th>
            <div class="com-circleTag-value">{{ allData.value[4] }}</div>
            <div class="com-circleTag-text">{{ allData.name[4] }}</div>
          </th>
          <th>
            <div class="com-circleTag-value">{{ allData.value[5] }}</div>
            <div class="com-circleTag-text">{{ allData.name[5] }}</div>
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allData: {
        name: [],
        value: [],
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data: ret } = await this.$http.get("/blockchain-index/");
      this.allData = ret.playload;
      console.log(this.allData);
    },
  },
};
</script>

<style lang='less' scoped>
.circleTag_container {
  height: 100%;
  overflow: hidden;
}

table,
tr {
  width: 100%;
}

tr {
  display: flex;
  justify-content: space-evenly;
}

th {
  color: #fff;
  height: 141px;
  width: 149px;
  background: url(../../public/static/img/container.png) no-repeat;
  z-index: 2;
}

.com-circleTag-value {
  height: 50%;
  display: flex;
  justify-content: center;
  transform: translate(-5%, 50%);
  font-family: 'FZYDCHJW';
  font-weight: lighter;
  font-size: 22px;
  text-shadow: 0 0 5px #1ac4cb, 0 0 5px #1ac4cb, 0 0 5px #1ac4cb, 0 0 5px #1ac4cb,
    0 0 5px #1ac4cb, 0 0 5px #1ac4cb, 0 0 5px #1ac4cb, 0 0 5px #1ac4cb;
}

.com-circleTag-text {
  display: flex;
  justify-content: center;
  height: 50%;
  transform: translate(-5%);
  font-family: "FZLanTYJW_Xian";
  color: #39d6cc;
  letter-spacing: 1px;
}
</style>