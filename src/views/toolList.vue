<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-17 20:28:57
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-09-17 21:13:59
 * @FilePath: \resume\src\views\tools.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="toolList flex">
    <div class="toolContent flex">
        <div class="toolItem" v-for="(item,index) in listData" :key="index">
            <router-link :to="item.url" class="flex bfb">
                <img :src="item.iconUrl" class="toolIcon">
                <div class="toolName">{{item.title}}</div>
            </router-link>
        </div>
    </div>
    <div class="toolPage">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "toolList",
  data() {
    return {
      listData: [
        {
          url: "/cookBook",
          iconUrl:require('../assets/icons/cook_icon.png'),
          title: "烹饪笔记",
        },
        {
          url: "/musicPlayer",
          iconUrl:require('../assets/icons/musicPlayer_icon.png'),
          title: "音乐播放器",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
$font-color:rgb(65, 184, 210);
a{
        text-decoration: none;
  }
.toolList {
    flex-direction: column;
    .toolContent{
        width: 100%;
        height: auto;
        min-height: 100px;
        justify-content: flex-start;
        margin-bottom: 20px;

        .toolItem{
        width: 100px;
        height: 100px;
        box-shadow: 0 0 2px rgba($color: $font-color, $alpha: 0.5);
        border-radius: 5px;
        margin-right: 20px;

        a{
            flex-direction: column;
            font-size: 12px;
            color: #000000;
        }

        a:hover{
          background-color: $font-color;
          color: white;
        }

        .toolIcon{
            width: 50px;
            height: 50px;
        }
    }
    }
    
    .toolPage{
      width: 100%;
      height: auto;
      min-height: 400px;
      box-shadow: 0 0 5px rgba($color: $font-color, $alpha: 0.3);
      box-sizing: border-box;
      padding: 20px;
    }
}
</style>
