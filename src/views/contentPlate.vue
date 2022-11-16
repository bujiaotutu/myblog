<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-01 16:02:33
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-11-14 16:26:10
 * @FilePath: \workpace\resume\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home_box">
    <!-- <md class="markdown-body"></md> -->
    <div class="carousel_box">
      <el-carousel :interval="3000" type="card" height="350px">
        <el-carousel-item v-for="(item,index) in bannerData" :key="index">
          <img :src="item" alt="" class="bfb">
        </el-carousel-item>
      </el-carousel>
    </div>
    <TitleTwo :text="'旅游集'"></TitleTwo>
    <div class="card_box">
        <div class="card_item" v-for="(item,index) in 6" :key="index">
            <div class="card_icon" @click="($store.commit('isInfoShow',1))">
              <img src="../assets/gin-fizz.jpg" alt="">
            </div>
            <div class="card_title">我是旅游标题</div>
        </div>
    </div>
    <TitleTwo :text="'美食集'"></TitleTwo>
    <div class="card_box">
      <div class="card_item" v-for="(item,index) in 4" :key="index">
        <div class="card_icon" @click="($store.commit('isInfoShow',1))">
              <img src="../assets/gin-fizz.jpg" alt="">
            </div>
            <div class="card_title">我是旅游标题</div>
      </div>
    </div>
    <router-view :class="[!(this.$store.state.isInfoShow)?'no_show':'is_show']" to="/"></router-view>
  </div>
</template>

<script>
import TitleTwo from '@/components/titleTwo.vue';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      bannerData:[
        require('../assets/banner/banner_01.jpg'),
        require('../assets/banner/banner_02.jpg'),
        require('../assets/banner/banner_03.jpg'),
        require('../assets/banner/banner_04.jpg'),
        require('../assets/banner/banner_05.jpg'),
      ]
    }
  },
  methods:{
    toInfo(){
      this.router.push
    }
  },
  components: {
    TitleTwo
},
};
</script>
<style lang="scss" scoped>
.home_box {
  position: relative;
  width: 100%;
  height: auto;


  .card_box{
    width: 98%;
    padding: 1%;
    min-height: 350px;
    margin: 20px 0;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #eaeff7;
    border-radius: 5px;

    .card_item{
      position: relative;
      width: 20%;
      height: 310px;
      margin: 20px 0;
      margin-left: 4%;
      border-radius: 2px;
      box-shadow: 0 0 2px rgb(173, 171, 171);

      .card_icon{
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        img{
          width: 100%;
          height: 100%;
        }
      }

      .card_title{
        position:absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        background-color: rgba(0,0,0,0.6);
        color: white;
        font-size: 16px;
        font-weight: bold;
        line-height: 40px;
        text-align: center;
      }
    }
  }

  .no_show{
    display: none;
  }

  .is_show{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    height: auto;
    z-index: 1000;
    background-color: white;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
