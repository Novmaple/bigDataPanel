<!-- 
中间圆图
-->
<template>
  <div class="com-page"><midcircle></midcircle></div>
</template>

<script>
import MidCircle from '../components/MidCircle.vue'
export default {
    data () {
        return {}
    },
    methods: {

    },
    components: {
        // A:B，A表示在上方中所展示的组件名
        // B表示在components文件夹下对应的组件名
        midcircle: MidCircle
    }
}
</script>

<style lang="less" scoped>
</style>