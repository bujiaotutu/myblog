<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-05 22:29:45
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-09-17 20:16:46
 * @FilePath: \workpace\resume\src\views\notePage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template >
    <div>
        <div class="back" @click="$store.commit('isInfoShow',0)">退出阅读页面</div>
    </div>
</template>
<script>
import md from "../assets/md/Markdown语法笔记.md"
export default {
    name:'notePage',
    data() {
        return {
            
        }
    },
    methods:{  
    },
    comments:{
        md
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