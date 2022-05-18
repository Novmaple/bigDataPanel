<!-- 
展示饼图
-->
<template>
  <div class="com-page"><storage></storage></div>
</template>

<script>
import Storage from '../components/Storage.vue'
export default {
    data () {
        return {}
    },
    methods: {

    },
    components: {
        // A:B，A表示在上方中所展示的组件名
        // B表示在components文件夹下对应的组件名
        storage: Storage
    }
}
</script>

<style lang="less" scoped>
</style>