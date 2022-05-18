<!-- 
每小时出块数量
-->
<template>
  <div class="com-page"><blockgen></blockgen></div>
</template>

<script>
import BlockGen from '../components/BlockGen.vue'
export default {
    data () {
        return {}
    },
    methods: {

    },
    components: {
        // A:B，A表示在上方中所展示的组件名
        // B表示在components文件夹下对应的组件名
        blockgen: BlockGen
    }
}
</script>

<style lang="less" scoped>
</style>