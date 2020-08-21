<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
    name: 'App',
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
