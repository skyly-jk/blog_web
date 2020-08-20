<template>
  <div id="app">
    <Head style="width: 100%;border-bottom: black 1px solid;display: flex;flex-direction: row;justify-content: center"></Head>
    <router-view style="width: 100%;height:94%;display: flex;flex-direction: row;justify-content: center"></router-view>
  </div>
</template>

<script>

import Head from "./components/head";
export default {
    name: 'App',
    components: {
        Head
    },
    mounted() {
        this.getTag();
        this.getCategory()
    },
    methods:{
        getTag(){
          let _this=this;
          this.$axios.post("/api/post/getTag").then(res=>{
              res.data.data.forEach(tag=>_this.$store.commit("addTag",tag))
          })
        },
        getCategory(){
            let _this=this;
            this.$axios.post("/api/post/getCategory").then(res=>{
                res.data.data.forEach(category=>_this.$store.commit("addCategory",category))
            })
        }
    }
}
</script>

<style>
  body, html, #app {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  body{
    overflow-y: scroll;
  }
  #app {

  }
</style>
