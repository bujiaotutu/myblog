<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-17 20:32:29
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-09-18 18:04:22
 * @FilePath: \resume\src\views\recipes.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="cook_book flex">
        <div class="turn_box">
            <div :class="[isTurn?'turn_table':'turn_table go']">
            <div :class="!isSoup?'table_class table_top_right':'table_class_choose table_top_right'" @click="isSoup=!isSoup">汤类</div>
            <div :class="!isMeal?'table_class table_top_left':'table_class_choose table_top_left'" @click="isMeal=!isMeal">主食</div>
            <div :class="!isDrinks?'table_class table_bottom_right':'table_class_choose table_bottom_right'" @click="isDrinks=!isDrinks">饮品</div>
            <div :class="!isSnack?'table_class table_bottom_left':'table_class_choose table_bottom_left'" @click="isSnack=!isSnack">点心</div>
        </div>
        <div class="table_start" @click="go">开始</div>
        </div>
        <div class="cook_list flex">
            <div class="list_top">
                你的选择是：
                <span v-for="(item,index) in cookList" :key="index">{{item}}</span>
            </div>
            <div class="list_bottom"></div>
        </div>
    </div>
</template>
<script>
export default {
    watch:{
        isSoup(newValue){
            if(newValue){
                this.cookList.push('汤类')
            }else{
                this.cookList.splice(this.cookList.indexOf('汤类'),1)
            }
        },
        isMeal(newValue){
            if(newValue){
                this.cookList.push('主食')
            }else{
                this.cookList.splice(this.cookList.indexOf('主食'),1)
            }
        },
        isDrinks(newValue){
            if(newValue){
                this.cookList.push('饮品')
            }else{
                this.cookList.splice(this.cookList.indexOf('饮品'),1)
            }
        },
        isSnack(newValue){
            if(newValue){
                this.cookList.push('点心')
            }else{
                this.cookList.splice(this.cookList.indexOf('点心'),1)
            }
        }
    },
    data() {
        return {
            isTurn:true,
            cookList:[],
            isSoup:false,
            isMeal:false,
            isDrinks:false,
            isSnack:false,
        }
    },
    methods:{
        go(){
            /**
             * 开始抽取菜单
             * 抽取到之前维持旋转
             * 抽取到后停止
             */
            this.isTurn=false
            setTimeout(() => {
                this.isTurn=true
            }, 3000);
        }
    }
}
</script>
<style lang="scss">
    $font-color:rgb(65, 184, 210);
    .cook_book{
        justify-content: flex-start;
        
        .turn_box{
            position: relative;

            .turn_table{
            position: relative;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.3);

            .table_class,.table_class_choose{
                width: 50%;
                height: 50%;
                float: right;
                box-sizing: border-box;
                box-shadow: 0 0 1px black;
                z-index: 998;
                text-align: center;
                line-height: 200px;
                color: $font-color;
                font-size: 16px;
            }

            .table_top_left{
                border-top-left-radius: 100%;
            }
            .table_top_right{
                border-top-right-radius: 100%;
            }
            .table_bottom_left{
                border-bottom-left-radius: 100%;
            }
            .table_bottom_right{
                border-bottom-right-radius: 100%;
            }

            .table_class:hover{
                // background-color: $font-color;
                // color: white;
            }

            .table_class_choose{
                background-color: $font-color;
                color: white;
            }
        }

        .table_start{
                position: absolute;
                top: 150px;
                left: 150px;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                z-index: 999;
                background-color: white;
                text-align: center;
                line-height: 100px;
                box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.3);
            }

        .table_start:hover{
                background-color: $font-color;
                color: white;
                box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.6);
        }

        .go{
                transform: rotate(1999999deg);
                transition: all 999s;
            }
        }
        
        .cook_list{
            flex-direction: column;
            width: calc(100% - 450px);
            min-height: 400px;
            height: auto;
            padding-left: 50px;

            .list_top{
                width: 100%;
                height: auto;
                margin-bottom: 20px;
                    span{
                        width: auto;
                        height: 30px;
                        padding: 5px;
                        border-radius: 5px;
                        font-size: 15px;
                        color: white;
                        background-color: $font-color;
                        margin-right: 10px;
                    }
            }

            .list_bottom{
                width: 100%;
                flex: 1;
                border: 2px dotted $font-color;
            }
        }
    }
</style>