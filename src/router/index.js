import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import Index from "../components/public/index"
import main from "../components/public/main";
import editor from "../components/admin/editor";
import post from "../components/public/post";

import admin from "../components/admin/admin";
import tagMan from "../components/admin/tagMan";
import CategoryMan from "../components/admin/CategoryMan";
import postMan from "../components/admin/postMan";

const routes=[
    {
        path:"/",
        component:Index,
        children:[
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
            },
            {
                path:"/admin/Category",
                name:"categoryMan",
                component: CategoryMan,
            },
            {
                path:"/admin/postMan",
                name:"postMan",
                component: postMan,
            },
            {
                path:"/admin/editor",
                name:"editor",
                component: editor
            },
        ]
    }
]
const router=new VueRouter({
    routes,
    mode:"history"
})
export default  router