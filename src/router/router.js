/*
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-01 16:09:24
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-09-17 20:38:15
 * @FilePath: \workpace\resume\src\router\router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Router from 'vue-router'
import contentPlate from '../views/contentPlate.vue'
import authorInfo from '../views/authorInfo.vue'
import noteList from '../views/noteInfo.vue'
import checkPage from '../views/checkPage.vue'
import notePage from "../views/notePage.vue"
import infoPage from '../views/infoPage.vue'
import toolList from '../views/toolList.vue'
import cookBook from '../views/cookBook.vue'
import musicPlayer  from '../views/musicPlayer.vue'
import store from "../store/index";
/**
 * 注册路由组件
 */
Vue.use(Router);
let router = new Router({
    mode:'history',
    routes:[
        {
            path: '/',
            name: 'ContentPlate',
            component:contentPlate,
            children:[
                {
                    path: '/',
                    name: 'infoPage',
                    component:infoPage,
                }
            ]
        },
        {
            path: '/authorInfo',
            name: 'authorInfo',
            component:authorInfo,
            beforeEnter: (to,from,next) => {
                let userId = store.state.identity;
                if(userId===0){
                    // alert("你不是作者本人，需要进行验证！==="+userId);
                    next({path:'/checkPage'})
                }else if(userId==1 || userId==2){
                    next()
                }
              }
        },
        {
            path: '/noteList',
            name: 'noteList',
            component:noteList,
            children:[
                {
                    path: '/',
                    name: 'notePage',
                    component:notePage,
                }
            ]
        },
        {
            path: '/checkPage',
            name: 'checkPage',
            component:checkPage
        },
        {
            path: '/toolList',
            name: 'toolList',
            component:toolList,
            children:[
                {
                    path: '/cookBook',
                    name: 'cookBook',
                    component:cookBook,
                },
                {
                    path: '/musicPlayer',
                    name: 'musicPlayer',
                    component:musicPlayer,
                }
            ]
        },
    ],
})

export default router