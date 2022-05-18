<template>
  <div class="com-container">
    <div class="midcircle">
      <!-- <div
        v-for="(item, index) in allData"
        class="tag"
        :style="{
          '--left': allDataLocation[index][0],
          '--top': allDataLocation[index][1],
          getData
        }"
        ref="midcircle_ref"
      >
        <span class="runindex">{{ item.nodename }}</span>
        <div :class="item.status ? 'trueimg' : 'falseimg'"></div>
      </div> -->
      <div v-for="(item, index) in allData" :key="index" :class="tag[index]">
        <div :class="item.status ? 'trueimg' : 'falseimg'"></div>
        <p :class="index < 4 ? 'nodenameright' : 'nodenameleft'">{{ item.nodename }}</p>
      </div>
      <div class="midcirclebg"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allData: null,
      tag: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8"],
      // allDataAngel: [],
      // allDataLocation: [],
      // startAngel: 0,
      // endAngel: 360,
      // timerId: null,
    };
  },
  mounted() {
    this.getData();
    // this.startInterval();
  },
  methods: {
    async getData() {
      const { data: ret } = await this.$http.get("/nodes/");
      this.allData = ret.playload;
      console.log(this.allData);
      // // 计算间隔角度
      // const InterAngel = 360 / this.allData.length;
      // for (let i = 0; i < this.allData.length; i++) {
      //   this.allDataAngel[i] =
      //     this.startAngel + InterAngel * i + InterAngel / 2;
      //   this.allDataLocation[i] = [
      //     300 + 300*sin(this.allDataAngel[i]*Math.PI/180),
      //     300 - 300*cos(this.allDataAngel[i]*Math.PI/180)
      //   ];
      // }
    },
    // startInterval() {
    //   if (this.timerId) {
    //     clearInterval(this.timerId);
    //   }
    //   this.timerId = setInterval(() => {
    //     this.startAngel++;
    //     if (this.startAngel > this.endAngel) {
    //       this.startAngel = 0;
    //     }
    //     this.getData();
    //   }, 2000);
    // },
  },
};
</script>

<style>
.trueimg,
.falseimg {
  width: 130px;
  height: 130px;
  /* border: 1px dashed #fff; */
  border-radius: 50%;
  position: absolute;
}

.trueimg {
  background: url("../../public/static/img/node_1.png") no-repeat 35px 60px;
}

.falseimg {
  background: url("../../public/static/img/node_2.png") no-repeat 25px 0px;
}

.tag1 {
  position: absolute;
  top: 0px;
  left: 450px;
  transform: translateY(-30%);
  color: #fff;
}

.tag2 {
  position: absolute;
  top: 90px;
  left: 558px;
  color: #fff;
}
.tag3 {
  position: absolute;
  top: 270px;
  left: 558px;
  color: #fff;
}
.tag4 {
  position: absolute;
  top: 390px;
  left: 450px;
  color: #fff;
}
.tag5 {
  position: absolute;
  top: 390px;
  left: 215px;
  color: #fff;
}
.tag6 {
  position: absolute;
  top: 90px;
  left: 108px;
  color: #fff;
}
.tag7 {
  position: absolute;
  top: 270px;
  left: 108px;
  color: #fff;
}
.tag8 {
  position: absolute;
  top: 0px;
  left: 215px;
  transform: translateY(-30%);
  color: #fff;
}

.nodenameright {
  position: relative;
  top: 50px;
  width: 120px;
  margin-left: 110px;
}

.nodenameleft {
  position: relative;
  top: 50px;
  width: 120px;
  transform: translateX(-75%);
  text-align: right;
}


</style>