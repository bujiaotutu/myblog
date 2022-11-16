<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-03 16:52:09
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-09-05 22:15:10
 * @FilePath: \workpace\resume\src\components\checkPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template >
    <div class="check_page">
        <div class="btn_box">
            <input type="text" placeholder="请输入输入邀请码" v-model="checkInfo">
            <button @click="check">验 证</button>
        </div>
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
                        localStorage.setItem('sfyz',2)
                    }else{
                        this.$store.commit('renzhen',1)
                        localStorage.setItem('sfyz',1)
                    }
                    this.$router.push({path:'/authorInfo'})
                    
                }else{
                    // console.log(this.checkInfo);
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
<style lang="scss" scoped>
    .check_page{
        width: 100%;
        height: 100%;

        .btn_box{
            margin-top: calc(30% - 100px);
            margin-left: calc(50% - 200px);
            width: 400px;
            height: 200px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgb(236, 234, 234);

            input{
                width: 80%;
                height: 60px;
                box-sizing: border-box;
                font-size: 20px;
                padding: 5px;
            }

            button{
                width: 80%;
                height: 60px;
                border: none;
                margin-top: 40px;
                background-color: #5858c2;
                color: white;
                font-size: 20px;
            }

            button:hover{
                background-color: #434393;
            }
        }
    }
</style>