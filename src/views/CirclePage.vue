<!-- 
圆环图
-->
<template>
  <div class="com-page"><circleCharts></circleCharts></div>
</template>

<script>
import Circle from '../components/Circle.vue'
export default {
    data () {
        return {}
    },
    methods: {

    },
    components: {
        // A:B，A表示在上方中所展示的组件名
        // B表示在components文件夹下对应的组件名
        circleCharts: Circle
    }
}
</script>

<style lang="less" scoped>
</style>