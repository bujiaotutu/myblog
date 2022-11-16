/*
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-01 16:02:33
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-11-05 16:18:52
 * @FilePath: \workpace\resume\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
import apiFun from "./utils/api";
import 'lib-flexible'
// markdown样式
import 'github-markdown-css'
// 代码高亮
import 'highlight.js/styles/github.css'

Vue.config.productionTip = false
Vue.prototype.$apiFun = apiFun;//请求接口api
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
})
.$mount('#app')
