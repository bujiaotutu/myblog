<!-- eslint-disable no-mixed-spaces-and-tabs -->
<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-03 16:23:28
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-11-05 17:56:15
 * @FilePath: \workpace\resume\src\views\noteInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="note_list">
    <div class="item_box">
      <TitleTwo text="学习记录"></TitleTwo>
      <div class="note_item" v-for="(item) in mdListData" :key="item.id" @click="toNotePage(item.id)" >
        {{ item.file_name }}
      </div>
    </div>
    <router-view :class="[!(this.$store.state.isShow)?'no_show':'is_show']" to="/"></router-view>
  </div>
</template>
<script>
import TitleTwo from "@/components/titleTwo.vue";
export default {
  name: "noteList",
  data() {
    return {
      mdListData:[]
    };
  },
  created(){
     //获取studyList
     this.$apiFun.getListById({
      id:3
    })
    .then(res=>{
      console.log(res);
      this.mdListData = res;
    })
  },
  methods:{
    toNotePage(id){
      this.$apiFun.getMdContentById({
        id:id
      })
      .then(res=>{
        this.$store.commit('isShow',1)
        this.$router.push({
          path:'/noteList/',
          query:{
            data:res
          }
        })
      })
    }
  },
  components: { TitleTwo },
};
</script>
<style lang="scss">
.note_list {
  position: relative;
  width: 100%;
  min-height: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .item_box {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    z-index: 999;

    .note_item {
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      padding: 0 20px;
      text-align: left;
      line-height: 50px;
      background-color: rgb(244, 241, 241);
    }

    .note_item:nth-child(2n) {
      background-color: rgba(224, 219, 219, 0.899);
    }

    .note_item:hover {
      color: white;
      background-color: #434393;
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
</style>
