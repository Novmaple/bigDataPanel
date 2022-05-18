<!-- 
实时存证表
-->
<template>
  <div class="com-page"><blocks></blocks></div>
</template>

<script>
import Blocks from '../components/Blocks.vue'
export default {
    data () {
        return {}
    },
    methods: {

    },
    components: {
        // A:B，A表示在上方中所展示的组件名
        // B表示在components文件夹下对应的组件名
        blocks: Blocks
    }
}
</script>

<style lang="less" scoped>
</style>