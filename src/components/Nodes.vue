<template>
  <div class="com-container">
    <div class="com-table com-tablebg">
      <div class="table-title">共识结点状态监控实时存证</div>

      <table>
        <thead class="table_head">
          <tr>
            <th class="column1">组织名</th>
            <th class="column2">机构名称</th>
            <th class="column3">结点</th>
          </tr>
        </thead>
        <tbody class="table_body">
          <!-- <dv-scroll-ranking-board :config="config" style="width:500px;height:300px" /> -->
          <tr v-for="(item, index) in allData">
            <th class="cell column1">{{ item.groupname }}</th>
            <th class="cell column2">{{ item.nodename }}</th>
            <th class="cell column3">{{ item.node }}</th>
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
      startValue: 0,
      endValue: 4,
      timerId: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data: ret } = await this.$http.get("/nodes/");
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
  height: 150px;
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
  width: 20%;
}

.column2 {
  width: 40%;
}

.column3 {
  width: 40%;
}
</style>
