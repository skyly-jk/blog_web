import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import main from "../components/main";
import editor from "../components/editor";
const routes=[
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
    }
]
const router=new VueRouter({
    routes
})
export default  router