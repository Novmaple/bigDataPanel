<template>
  <div class="com-page">
    <header class="home-header">
      <div class="header-left">
        可信时间：
        <div id="datetime"></div>
      </div>
      <span class="title">华科大区块链数据监控平台</span>
      <div class="header-right">
        <el-button
          type="text"
          icon="el-icon-user"
          style="color: #fff; font-size: 25px"
          >用户</el-button
        >
        <el-button
          type="text"
          icon="el-icon-switch-button"
          style="color: #fff; font-size: 25px"
          >退出</el-button
        >
      </div>
    </header>
    <div class="home-body">
      <section class="screen-left">
        <div id="left-top">
          <storage></storage>
        </div>
        <div id="left-bottom">
          <blockGen></blockGen>
        </div>
      </section>
      <section class="screen-middle">
        <midCircle></midCircle>
        <!-- <div class="inputbox">
          <div class="inputboxbtn">存证检验</div>
        </div> -->
      </section>
      <section class="screen-right">
        <div id="right-top">
          <circleTag></circleTag>
        </div>
        <div id="right-bottom">
          <concurrency></concurrency>
        </div>
      </section>
      <br />
      <section class="screen-left-bottom">
        <blocks></blocks>
      </section>
      <section class="screen-right-bottom">
        <nodes></nodes>
      </section>
    </div>
  </div>
</template>

<script>
import BlockGen from "@/components/BlockGen.vue";
import Blocks from "@/components/Blocks.vue";
import CircleTag from "@/components/CircleTag.vue";
import Concurrency from "@/components/Concurrency.vue";
import MidCircle from "@/components/MidCircle.vue";
import Nodes from "@/components/Nodes.vue";
import Storage from "@/components/Storage.vue";
export default {
  name: "home",
  components: {
    BlockGen,
    Blocks,
    CircleTag,
    Concurrency,
    MidCircle,
    Nodes,
    Storage,
  },
  mounted() {
    setInterval(
      "document.getElementById('datetime').innerHTML=new Date().toLocaleString();",
      1000
    );
  },
};
</script>

<style lang='less' scoped>
.home-header {
  height: 100px;
  width: 1920px;
  background: url(../../public/static/img/heading.png) no-repeat;
  position: relative;
  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    font-size: 43px;
    font-family: "黑体";
    font-weight: bolder;
    color: #fff;
    text-shadow: 0px 4px 4px #0195ca;
  }
  .header-left {
    left: 0;
    position: absolute;
    bottom: 0;
    width: 500px;
    margin-left: 50px;
    color: #fff;
    font-size: 25px;
    display: flex;
  }
  .header-right {
    right: 0;
    position: absolute;
    bottom: 0;
    width: 250px;
    margin-right: 50px;
    display: flex;
    justify-content: space-evenly;
  }
}

.home-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .screen-left {
    height: 556.96px;
    width: 500px;
    margin-left: 50px;
    margin-top: 10px;
    #left-top {
      height: 50%;
      position: relative;
    }
    #left-bottom {
      height: 50%;
      margin-top: 20px;
      position: relative;
    }
  }
  .screen-middle {
    height: 560px;
    width: 800px;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    // border: 1px dashed #fff;
  }
  .inputbox {
    height: 60px;
    width: 779px;
    transform: translateX(-18%);
    margin-top: 20px;
    background: url(../../public/static/img/submit.png) no-repeat;
  }
  .inputboxbtn {
    line-height: 60px;
    font-size: 35px;
    margin-left: 75%;
    font-weight: bolder;
    color: #fff;
    text-align: center;
  }
  .screen-right {
    height: 556.96px;
    width: 500px;
    margin-right: 50px;
    margin-top: 10px;
    #right-top {
      height: 50%;
      position: relative;
    }
    #right-bottom {
      height: 50%;
      margin-top: 20px;
      position: relative;
    }
  }
  .screen-left-bottom {
    height: 275.8px;
    width: 900px;
    margin-left: 50px;
    transform: translateY(-15%);
  }
  .screen-right-bottom {
    height: 275.8px;
    width: 900px;
    margin-left: 20px;
    transform: translateY(-15%);
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

/* 
  turn : 定义的动画名称
  1s : 动画时间
  linear : 动画以何种运行轨迹完成一个周期
  infinite :规定动画应该无限次播放
*/

.run {
  animation: rotate 10s linear infinite;
  color: #fff;
}
</style>