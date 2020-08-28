<template>
  <div class="categoryView">
    <div class="view-left">
      <li :class="{selected:selectID==-1}" @click="selectItem(-1)">全部</li>
      <li v-for="category in categoryList"
          :key="category.id"
          :class="{selected:selectID==category.id}"
          @click="selectItem(category.id)">{{category.name}}</li>
    </div>
    <div class="view-right">
      <article-card v-for="article in articleList" :key="article.id" :article="article"/>
    </div>
  </div>
</template>

<script>
    import ArticleCard from "./articleCard";
    export default {
        name: "categoryView",
        components: {ArticleCard},
        data(){
            return {
                articleList:[],
                categoryList:[],
                currentPage:1,
                onePageCount:10,
                selectID:-1
            }
        },
        mounted() {
            this.getPost()
            this.getCategory()
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
            getCategory(){
                let _this=this;
                this.$axios.post("/api/category/getCategory").then(res=>{
                        _this.categoryList=res.data.data
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
  .categoryView{
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