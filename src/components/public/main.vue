<template>
  <div>
    <div class="main">
      <div class="page">
        <article-card v-for="post in postList" :key="post.id" :article="post"/>
      </div>
      <div class="info">
        <div class="info-item">
          <div class="info-title">

          </div>
          <div class="info-content my-userinfo">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import ArticleCard from "./articleCard";
    export default {
        name: "main",
        components: {ArticleCard},
        data(){
            return {
                postList:[],
                currentPage:1,
                onePageCount:10
            }
        },
        mounted() {
            this.getPost()
        },
        methods:{
            getPost(config={}){
                config.currentPage=this.currentPage
                config.onePageCount=this.onePageCount
                let _this=this;
                this.$axios.post(
                    "/api/post/getPost",
                    config
                ).then(res=>{
                    _this.postList=res.data.data
                })
            }
        }
    }
</script>

<style scoped lang="scss" src="@/assets/scss/main.scss">

</style>