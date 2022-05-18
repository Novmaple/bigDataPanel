<template>
  <div class="com-container">
    <div class="com-table com-tablebg">
      <div class="table-title">实时存证</div>
      <table>
        <thead class="table_head">
          <tr>
            <th class="column1">序号</th>
            <th class="column2">存证Hash</th>
            <th class="column3">区块高度</th>
            <th class="column4">上链时间</th>
          </tr>
        </thead>
        <tbody
          class="table_body"
        >
          <tr v-for="(item, i) in allData">
            <th class="cell column1">{{ i + 1 }}</th>
            <th class="cell column2">{{ item.Hash }}</th>
            <th class="cell column3">{{ item.height }}</th>
            <th class="cell column4">{{ item.time }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allData: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data: ret } = await this.$http.get("/blocks/");
      this.allData = ret.playload;
      console.log(this.allData);
    },
  },
};
</script>

<style lang="less" scoped>
.table-title {
  font-weight: bolder;
  color: #fff;
  font-size: 19px;
  transform: translate(4%, 70%);
}
table {
  width: 100%;
  height: 100%;
  transform: translate(0%, 6%);
}

/* 要实现表头固定，表头与表体就要用display：block设定为块级元素 */
/* 而tr设置为弹性盒 */
/* 表头 */
.table_head {
  width: 100%;
  line-height: 40px;
  font-weight: bold;
  display: block;
  background: url(../../public/static/img/border_3.png) no-repeat 20px;
}

/* 表体 */
.table_body {
  width: 100%;
  display: block;
  overflow-y: auto;
  height: 55%;
  text-align: center;
  line-height: 20px;
  margin-top: 5px;
}
/* 滚动条会占位置修改其样式 */
.table_body::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.table_body::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.table_body::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
tr {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 单元格修饰 */
.cell {
  font-weight: lighter;
  height: 30px;
}
.column1 {
  width: 10%;
}

.column2 {
  width: 40%;
}

.column3 {
  width: 20%;
}

.column4 {
  width: 30%;
}
</style>
