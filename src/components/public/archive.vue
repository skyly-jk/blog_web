<template>
  <div class="archiveView">
    <div class="view-left">
      <li v-for="(archive,index) in archiveList"
          :key="index"
          :class="{selected:selectIndex==index}"
          @click="selectItem(index)">
        <a-badge :count="archive.count">
          <a-button>{{archive.date}}</a-button>
        </a-badge>
      </li>
    </div>
    <div class="view-right">
      <article-card v-for="article in articleList" :key="article.id" :article="article"/>
    </div>
  </div>
</template>

<script>
    import ArticleCard from "./articleCard";
    export default {
        name: "archive",
        components: {ArticleCard},
        data(){
            return {
                articleList:[],
                archiveList:[],
                currentPage:1,
                onePageCount:10,
                selectIndex:-1
            }
        },
        mounted() {
            this.getPost()
            this.getArchive()
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
                    _this.articleList=res.data.data
                })
            },
            getArchive(){
                let _this=this;
                this.$axios.post("/api/post/getArchive").then(res=>{
                        _this.archiveList=res.data.data
                    }
                )
            },
            selectItem(id){
                this.selectID=id
            }
        }
    }
</script>

<style scoped lang="scss">
  .archiveView{
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .view-left{
      width: 10%;
      list-style: none;
      text-align: center;
      li{
        width: 100%;
        line-height: 32px;
        padding: 5px;
        font-size: 20px;
        cursor: pointer;
        font-family: Avenir,Helvetica,Arial,sans-serif;;
      }
      .selected{
        color: #1890ff;
      }
    }
    .view-right{
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
</style>