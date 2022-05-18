<!-- 
结点集表
-->
<template>
  <div class="com-page"><nodes></nodes></div>
</template>

<script>
import Nodes from '../components/Nodes.vue'
export default {
    data () {
        return {}
    },
    methods: {

    },
    components: {
        // A:B，A表示在上方中所展示的组件名
        // B表示在components文件夹下对应的组件名
        nodes: Nodes
    }
}
</script>

<style lang="less" scoped>
</style>