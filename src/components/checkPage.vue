<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-03 16:52:09
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-09-03 22:34:51
 * @FilePath: \workpace\resume\src\components\checkPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template >
    <div>
        <input type="text" placeholder="请输入输入邀请码" v-model="checkInfo">
        <button @click="check">验证</button>
    </div>
</template>
<script>
    // import store from '../store/index'
export default {
    data() {
        return {
            checkInfo:'',
            confirmNum:3,
            touristPassword:'123456',
            authorPassword:'654321'
        }
    },
    watch:{
        //监听验证次数变化
        confirmNum(){
            localStorage.setItem("confirmNum",this.confirmNum)
        }
    },
    created() {
        //获取本地次数或赋值
        if(!localStorage.getItem("confirmNum")){
            localStorage.setItem("confirmNum",this.confirmNum)
        }else{
            this.confirmNum=localStorage.getItem("confirmNum")
            console.log(this.confirmNum);
        }
    },
    methods: {
        check(){
            if(this.confirmNum!=0){
                if(this.checkInfo=="123456" || this.checkInfo=="654321"){
                    if(this.checkInfo=="654321"){
                        this.$store.commit('renzhen',2)
                    }else{
                        this.$store.commit('renzhen',1)
                    }
                }else{
                    console.log(this.checkInfo);
                    this.confirmNum--
                    alert('验证码错误！！！请重新输入！！！\n你还有'+this.confirmNum+"次机会!!!")
                } 
            }else{
                alert('你已经用完了本日的认证次数')
            }
        }
    },
}
</script>
<style lang="">
    
</style>