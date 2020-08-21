<template>
  <div>
        <Head :menu-list="menus"></Head>
        <router-view style="width: 100%;height:94%;display: flex;flex-direction: row;justify-content: center"></router-view>
  </div>
</template>

<script>
    import Head from "../head";

    export default {
        name: "index",
        components: {
            Head
        },
        data(){
            return {
                menus:[
                    {key:"main",name:"主页",icon:"home"},
                    {key:"tag",name:"标签",icon:"tags"},
                    {key:"category",name:"分类",icon:"appstore",theme:"filled"},
                    {key:"archive",name:"归档",icon:"database",theme:"filled"},
                    {key:"labs",name:"实验室",icon:"bank",theme:"filled"},
                ]
            }
        }
    }
</script>

<style scoped>

</style>