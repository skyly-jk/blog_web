import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import Index from "../components/public/index"
import main from "../components/public/main";
import editor from "../components/admin/editor";
import post from "../components/public/post";

import admin from "../components/admin/admin";
import tagMan from "../components/admin/tagMan";
const routes=[
    {
        path:"/",
        component:Index,
        children:[
            {
                path:"/editor",
                name:"editor",
                component: editor
            },
            {
                path: "/main",
                name:"main",
                redirect:'/'
            },
            {
                path:"/",
                component:main
            },
            {
                path: '/post/:id',
                component: post,
                props:true
            }
        ]
    },
    {
        path:"/admin",
        component: admin,
        children: [
            {
                path:"/admin/tag",
                name:"tagMan",
                component: tagMan,
            }
        ]
    }
]
const router=new VueRouter({
    routes,
    mode:"history"
})
export default  router