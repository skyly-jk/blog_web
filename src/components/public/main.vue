<template>
  <div>
    <div class="main">
      <div class="page">
        <div class="page-item" v-for="post in postList" :key="post.id">
          <a class="page-title" @click="$router.push('post/'+post.id)">{{post.title}}</a>
          <div class="page-info">
            <p><i class="fa fa-user-o" aria-hidden="true"/>作者 {{post.author}}</p>
            <p><i class="fa fa-clock-o" aria-hidden="true"/>发表于 {{post.createDate}}</p>
            <p><i class="fa fa-folder-o" aria-hidden="true"/>分类 {{post.categoryName}}</p>
            <p><i class="fa fa-eye" aria-hidden="true"/>阅读量 {{post.readCount}}</p>
            <p><i class="fa fa-comment" aria-hidden="true"/>评论数 0</p>
          </div>
          <p class="page-content">
            {{post.content | mdToStr}}
          </p>
          <div class="page-tags">
            <a class="tag" v-for="tag in post.tagNames.split(',')" :key="tag">
              <a-icon type="tag"/>{{tag}}
            </a>
          </div>
        </div>
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
    export default {
        name: "main",
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