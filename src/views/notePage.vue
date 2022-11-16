<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-05 22:29:45
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-11-14 16:14:39
 * @FilePath: \workpace\resume\src\views\notePage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template >
    <div>
        <div v-html="$route.query.data"></div>
        <div class="back" @click="$store.commit('isShow',0)">退出阅读页面</div>
    </div>
</template>
<script>
export default {
    name:'notePage',
    data() {
        return {
        }
    },
    created(){
    },
    methods:{  
    },
    comments:{
    }
}
</script>
<style lang="scss">
    .back{
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        background-color: pink;
    }
</style>