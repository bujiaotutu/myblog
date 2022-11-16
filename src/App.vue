<!--
 * @Author: bujiaotutu 8353498Either disable config file checking with requireConfigFile: false, or configure Babel so58@qq.com
 * @Date: 2022-09-01 16:02:33
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-11-05 18:00:58
 * @FilePath: \workpace\resume\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app" class="app" :style="{ height: windowHeight + 'px' }">
    <div class="nav">
      <div class="logo_content flex">
        <div class="logo_logo">BJTT</div>
        <div class="logo_text">用于记录美好的事物</div>
      </div>
      <div class="nav_content">
        <ul>
        <li v-for="(item,index) in listData" :key="index" @click="selectList(index)" :class="[listSelectNumber===index?'li_select':'']">
          <router-link :to="item.url">{{item.title}}</router-link>
        </li>
        </ul>
      </div>
      <div class="search_content flex">
          <input class="input_open" type="text" name="searchText" id="searchText" v-model="searchText" placeholder="请输入检索字样" />
      </div>
    </div>
    <div class="show_content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import store from "./store/index";
import getDate from "./utils/exportTime"
// import { mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {
      searchText:'',//搜索框内容
      number1: 1,
      timeOut: Object,
      windowHeight: Number,
      listSelectNumber:0,
      listData:[
        {
          url:'/',
          title:'首页'
        },
        {
          url:'/backPage',
          title:'后台'
        },
        {
          url:'/noteList',
          title:'笔记列表'
        },
        {
          url:'/toolList',
          title:'小工具'
        },
        {
          url:'/saveMd',
          title:'上传md文件'
        }
      ],
    };
  },
  watch: {
    number1(newValue, oldValue) {
      if (this.timeOut) {
        clearTimeout(this.timeOut);
      }
      this.timeOut = setTimeout(() => {
        console.log("new:" + newValue + "\nold:" + oldValue);
      }, 1000);
    },
  },
  created() {
    console.log(getDate());
    //获取页面高度
    this.windowHeight = document.documentElement.clientHeight;
    //刷新回到首页
    if(this.$route.path!=='/'){
        this.$router.push({path:'/'})
    }
    //身份验证
    if(localStorage.getItem('sfyz')){
      this.$store.commit('renzhen',localStorage.getItem('sfyz'))
      // this.$store.commit('renzhen',0)
    }

    //默认子页面关闭
    this.$store.commit("isShow",0)
  },
  methods: {
    selectList(i){
      this.listSelectNumber = i
    }
  },
  store,
  components: {},
};
</script>

<style lang="scss">
  // @import '../amaze/css/amazeui.css';
  $font-color:rgb(65, 184, 210);
  *{
    caret-color: rgba(0, 0, 0, 0)
  }
  .flex{//标准flex居中布局
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bfb{//百分百继承
    width: 100%;
    height: 100%;
  }
  body{
    margin: 0;
  }
  input{
    outline: none;
    border: none;
  }
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;

  .nav {
    position: sticky;
    top: 0;
    width: 90%;
    height: 64px;
    padding: 0 5%;
    box-shadow: 0 5px 0 rgb(249, 249, 251);
    font-size: 18px;
    display: flex;
    background-color: white;
    z-index: 1000;

    .logo_content{
      flex: 2;
      color: rgb(65, 184, 210);

      .logo_logo{
        font-size: 30px;
        margin-right: 20px;
      }

      .logo_text{
        font-size: 12px;
      }
    }

    .nav_content{
      flex: 5;
      ul{
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;

      li{
        width: 100%;
        a{
          display: block;
          text-align: center;
          color: $font-color;
          text-decoration: none;
          line-height: 64px;
        }
      }

      .li_select{
        box-shadow: 0 -2px 0px $font-color inset;
      }
    }
    }

    .search_content{
      flex: 2;
      
      .input_open{
          width: 160px;
          height: 15px;
          font-size: 12px;
          color: $font-color;
          padding: 5px 10px;
          border-radius: 10px;
          border: 1px solid $font-color;
        }
      }
  }

  .show_content {
    width: 90%;
    box-sizing: border-box;
    padding: 40px 5%;
    overflow-x: hidden;
    overflow-y: scroll;
    min-height:calc(100% - 80px);
    height: auto;
    z-index: 998;
  }

  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
        width:12px;
      }
}
</style>
