<template>
    <div class="demo-container">
        <!-- App bar -->
        <ui-top-app-bar class="app-bar" :nav-icon="false">
            网易云音乐 in MaterialDesign
        </ui-top-app-bar>
    </div>
</template>

<script lang='ts' setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
// import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
/**
* 仓库
*/
// const store = useStore();
/**
* 路由对象
*/
const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
const data = reactive({
    type: 1,
    title: 'Hello BalmUI',
    openDrawer: false,
    fixed: true
})
onBeforeMount(() => {
    //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
    //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(() => {
})
// 使用toRefs解构
let { type, title, fixed } = { ...toRefs(data) }
defineExpose({
    ...toRefs(data)
})


</script>
<style scoped lang='scss'>
.app-bar {
    background-color: $primary;
}
</style>