<template>
    <div>
        <HelloWorld v-bind:msg="message" />
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import HelloWorld from 'components/HelloWorld.vue';
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
    message: 'NeteaseCloudMusic'
})

onBeforeMount(() => {
    console.log('#EC4141');
    //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
    //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(() => {
})
// 使用toRefs解构
let { message } = { ...toRefs(data) }
defineExpose({
    ...toRefs(data)
})


</script>