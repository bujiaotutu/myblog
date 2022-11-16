/*
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-01 16:09:24
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-11-05 16:48:09
 * @FilePath: \workpace\resume\src\router\router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Router from 'vue-router'
import contentPlate from '../views/contentPlate.vue'
import noteList from '../views/noteList.vue'
import myLogin from '../views/myLogin.vue'
import notePage from "../views/notePage.vue"
import infoPage from '../views/infoPage.vue'
import toolList from '../views/toolList.vue'
import cookBook from '../views/cookBook.vue'
import musicPlayer  from '../views/musicPlayer.vue'
import store from "../store/index";
import saveMd from "../views/saveMd.vue"

import backPage from '../views/backstage/backPage.vue'
import userList from '../views/backstage/userList.vue'
import fileList from '../views/backstage/fileList.vue'
import classList from '../views/backstage/classList.vue'
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
            path: '/backPage',
            name: 'backPage',
            component:backPage,
            children:[
                {
                    path:'/',
                    name:'userList',
                    component:userList,
                },
                {
                    path:'/fileList',
                    name:'fileList',
                    component:fileList,
                },
                {
                    path:'/classList',
                    name:'classList',
                    component:classList,
                }
            ],
            beforeEnter: (to,from,next) => {
                let userId = store.state.identity;
                if(userId===0){
                    // alert("你不是作者本人，需要进行验证！==="+userId);
                    next({path:'/myLogin'})
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
            path: '/myLogin',
            name: 'myLogin',
            component:myLogin
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
        {
            path: '/saveMd',
            name: 'saveMd',
            component:saveMd
        },
    ],
})

export default router