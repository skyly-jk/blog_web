import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import main from "../components/main";
const routes=[
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