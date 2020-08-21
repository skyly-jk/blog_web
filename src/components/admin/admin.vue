<template>
  <div>
    <Head :menu-list="menus"></Head>
    <router-view/>
  </div>
</template>

<script>
    import Head from "../head";
    export default {
        name: "admin",
        components: {Head},
        data(){
            return {
                menus:[
                    {key:"tagMan",name:"标签管理",icon:"tags"},
                    {key:"categoryMan",name:"分类管理",icon:"appstore",theme:"filled"},
                    {key:"postMan",name:"文章管理",icon:"database",theme:"filled"},
                ]
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>