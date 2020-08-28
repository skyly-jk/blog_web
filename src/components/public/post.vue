<template>
  <div class="article">
    <a-card style="width: 70%">
      <div slot="title" class="article-head">
        <div class="article-title article-info">
          <span>{{post.title}}</span>
        </div>
        <div class="article-bar article-info">
          <span class="post-meta">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            <span class="meta-text">发布时间 {{post.createDate}}</span>
            <span class="meta-divider">|</span>
          </span>
          <span class="post-meta">
            <i class="fa fa-folder-o" aria-hidden="true"></i>
            <span class="meta-text">分类 {{post.categoryName}}</span>
            <span class="meta-divider">|</span>
          </span>
          <span class="post-meta">
            <i class="fa fa-tags" aria-hidden="true"></i>
            <span class="meta-text">标签 {{post.tagNames}}</span>
<!--            <span class="meta-divider">|</span>-->
          </span>
        </div>
      </div>
      <mavon-editor
              v-model="post.content"
              :subfield="false"
              defaultOpen="preview"
              :toolbarsFlag="false"
              :boxShadow="false"
              boxShadowStyle="0 0 0 rgba(0,0,0,0)"
              previewBackground="rgba(0,0,0,0)"
      />
    </a-card>
  </div>
</template>

<script>
    export default {
        name: "post",
        props:["id"],
        mounted() {
            this.getPost()
        },
        data(){
          return {
              post:{}
          }
        },
        methods:{
            getPost(){
                let _this=this;
                this.$axios.post("/api/post/"+this.id).then(res=>{
                    _this.post=res.data.data
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  .article{
    width: 100%;
    margin-top: 4%;
    .article-head{
      display: flex;
      flex-direction: column;
      .article-info{
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .article-title{
        font-size: 28px;
        font-weight: bold;
      }
      .article-bar{
        font-weight: lighter;
        font-size: 14px;
        color: #999;
        .post-meta{
          padding-left: 5px;
          padding-right: 5px;
          .meta-text{
            padding-right: 5px;
          }
          i{
            margin-right: 5px;
          }
        }
      }
    }
    .v-note-wrapper{
      border: 0;
    }
  }
</style>