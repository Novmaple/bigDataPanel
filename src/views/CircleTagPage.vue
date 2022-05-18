<!-- 
圆环标识图
-->
<template>
  <div class="com-page"><circletag></circletag></div>
</template>

<script>
import CircleTag from '../components/CircleTag.vue'
export default {
    data () {
        return {}
    },
    methods: {

    },
    components: {
        // A:B，A表示在上方中所展示的组件名
        // B表示在components文件夹下对应的组件名
        circletag: CircleTag
    }
}
</script>

<style lang="less" scoped>
</style>