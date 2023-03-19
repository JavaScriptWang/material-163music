<template>
    <div class="home">
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
        <h2>职业：{{ job.occupation }}<br>薪资：{{ job.salary }}</h2>
        <h3>爱好：{{ hobby[0] }},{{ hobby[1] }},{{ hobby[2] }}</h3>
        <button @click="say">修改</button>
        <span>{{ sum }}</span>
    </div>
</template>
  
<script lang="ts">
import { ref, reactive, computed } from 'vue'
export default {
    name: 'Home',
    setup() {
        let name = ref('燕儿')
        let age = ref(18)
        let job = reactive({
            occupation: '程序员',
            salary: '10k'
        })
        let nums = reactive([1, 2])
        let hobby = reactive(['刷剧', '吃鸡', '睡觉'])
        console.log(name)
        console.log(age)
        //方法
        function say() {
            job.salary = '12k'
            hobby[0] = '学习'
        }
        let sum = computed(function () {
            return nums[0] + nums[1]
        })
        return {
            name,
            age,
            job,
            say,
            hobby,
            sum
        }
    }
}
</script>