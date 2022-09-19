/*
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-01 17:05:07
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-09-17 20:16:23
 * @FilePath: \workpace\resume\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  /**
   * identity
   * 0 外部登入
   * 1 通过认证
   * 2 内部登入
   */
  identity:0,
  count: 100,
  list: [1, 2, 3, 4],
  isShow:0,//控制noteList子页面是否显示
  isInfoShow:0,//控制旅游和美食子页面是否显示
}
const getters = {
  go: state => {
    return state.list.sort(function () {
      return Math.random() - 0.5;
    });
  }
}
//声明方法来改变count的值
const mutations = {
  add(state, n) {
    if (n) {
      state.count += n
    } else {
      state.count++
    }
  },
  reduce(state) {
    state.count--
  },
  renzhen(state,n){
    if(n==1){
      state.identity = n
    }else if(n==2){
      state.identity = n
    }
  },
  isShow(state,n){
    if(n){
      state.isShow = 1
    }else{
      state.isShow = 0
    }
  },
  isInfoShow(state,n){
    if(n){
      state.isInfoShow = 1
    }else{
      state.isInfoShow = 0
    }
  }
}
const actions = {
  add(state, n) {
    setTimeout(() => {
      if (n) {
        state.count += n
      } else {
        state.count++
      }
    }, 1000);
  },
  reduce(state) {
    setTimeout(() => {
      state.count--
    }, 1000);
  }
}
export default new Vuex.Store({
  state, mutations, getters, actions
})