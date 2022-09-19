<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-04 21:44:41
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-09-04 21:48:56
 * @FilePath: \workpace\resume\src\components\titleTwo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="text">
        {{text}}
    </div>
</template>
<script>
export default {
    name:'titleTwo',
    props:{
        text:String
    }
}
</script>
<style lang="scss" scoped>
    .text{
        width: 100%;
        height: 30rpx;
        color: black;
        font-size: 20px;
        font-weight: bold;
        margin: 10px 0;
    }
</style>