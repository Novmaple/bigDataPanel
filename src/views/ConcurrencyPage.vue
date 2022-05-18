<!-- 
业务并发量
-->
<template>
  <div class="com-page"><concurrency></concurrency></div>
</template>

<script>
import Concurrency from '../components/Concurrency.vue'
export default {
    data () {
        return {}
    },
    methods: {

    },
    components: {
        // A:B，A表示在上方中所展示的组件名
        // B表示在components文件夹下对应的组件名
        concurrency: Concurrency
    }
}
</script>

<style lang="less" scoped>
</style>