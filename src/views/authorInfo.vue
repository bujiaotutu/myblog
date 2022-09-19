<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-03 15:51:11
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-09-06 20:05:49
 * @FilePath: \workpace\resume\src\components\contentList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div ref="printHrml" id="pdfHtml" class="pdfHtml">
        <div class="author_info" >
        <div class="personal_info">
            <div class="info_header">
                <img src="../assets/touxiang.jpg" alt="">
            </div>
            <div class="info_info" >
                <div class="info_item">
                    <div class="info_title">姓名: </div>
                    <input type="text" v-model="name"  :disabled="jurisdiction"/>
                </div>
                <div class="info_item">
                    <div class="info_title">毕业时间: </div>
                    <input type="text" v-model="graduationYear" :disabled="jurisdiction"/>
                </div>
                <div class="info_item">
                    <div class="info_title">毕业学校: </div>
                    <input type="text" v-model="graduationSchool" :disabled="jurisdiction"/>
                </div>
                <div class="info_item">
                    <div class="info_title">联系方式: </div>
                    <input type="text" v-model="contactInfo" :disabled="jurisdiction"/>
                </div>
            </div>
        </div>
        <div class="introduce_info">
            <TitleTwo :text="'介绍:'"></TitleTwo>
            <textarea name="introduce_info" id="introduce_info" cols="30" rows="10" v-model="introduceInfo" :disabled="jurisdiction"></textarea>
        </div>
        <button type="primary" @click="exportPDF">导出PDF</button>
    </div>
    </div>
    
</template>
<script>
import TitleTwo from '@/components/titleTwo.vue';
import getPdf from '../utils/exportPdf.js'
export default {
    name: "authorInfo",
    props: {},
    data() {
        return {
            jurisdiction:true,
            name: "周瑞永",
            graduationYear: "2021年7月",
            graduationSchool: "福州大学至诚学院",
            contactInfo: "18558785728",
            introduceInfo:'暂无'
        };
    },
    created() {
        //获取编辑权限
        if (this.$store.state.identity==2){
            this.jurisdiction=false
        }
            
    },
    methods:{
        exportPDF() {
            getPdf('测试','pdfHtml');
        },
    },
    components: { TitleTwo }
}
</script>
<style lang="scss" scoped>
    .author_info{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;


        .personal_info{
            width: 100%;
            height: 300px;
            padding: 50px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            .info_header{
                width: 200px;
                height: 100%;
                box-shadow: 0 0 1px black;

                img{
                    width: 100%;
                    height: 100%;
                }
            }

            .info_info{
                width: calc(100% - 250px);
                height: 100%;
                margin-left: 50px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;

                .info_item{
                    flex: 1;
                    display: flex;
                    width: 100%;
                    font-size: 20px;

                    .info_title{
                        height: 100%;
                        line-height: 75px;
                        margin-right: 20px;
                    }

                    input{
                        outline:none;
                        height: 100%;
                        border: none;
                        font-size: 20px;
                        background-color: white;
                    }
                }
            }
        }

        .introduce_info{
            width: 100%;
            min-height:300px;
            height: auto;
            padding: 50px;

            textarea{
                width: 1040px;
                box-sizing: border-box;
                padding: 20px;
                min-height: 270px;
                resize: none;
                font-size: 20px;
                background-color: white;
            }
        }
    }
</style>