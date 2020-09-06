<template>
  <div class="editor">
    <div class="editor-form">
      <label>标题</label>
      <a-input style="grid-column-start: 2;grid-column-end: 3" v-model="title"></a-input>
      <label>分类</label>
      <a-select v-model="categoryID">
        <a-select-option v-for="category in categoryList" :key="category.id" :value="category.id">
          {{category.name}}
        </a-select-option>
      </a-select>
      <label>标签</label>
      <a-select mode="multiple" v-model="tagIDs">
        <a-select-option v-for="tag in tagList" :key="tag.id" :value="tag.id" :token-separators="[',']">
          {{tag.name}}
        </a-select-option>
      </a-select>
      <a-button icon="cloud-upload" style="grid-column-start: 2" @click="submit_post">发布</a-button>
    </div>
    <mavon-editor v-model="content" @save="saveDraft">
    </mavon-editor>
  </div>
</template>

<script>
    export default {
        name: "editor",
        data(){
            return {
                title:"",
                categoryID:"",
                tagIDs:[],
                content:"",
                tagList:[],
                categoryList:[],
                articleID:0,
                draft:false
            }
        },
        async mounted() {
            await this.getTag();
            await this.getCategory();
            let article=this.$store.state.article
            if (article){
                this.articleID=article.id
                this.title=article.title
                this.categoryID=article.categoryId
                this.tagIDs=article.tagIDs.split(",").map(id=>id=Number(id))
                this.content=article.content
            }
        },
        methods:{
            submit_post(){
                let pureText=document.getElementsByClassName("v-note-show")[0].innerText
                pureText=pureText.replace(/\s*/g,"")
                pureText=pureText.replace(/[\r\n]/g,"")
                let _this=this;
                let data={
                    title:_this.title,
                    author:"测试",
                    content:_this.content,
                    categoryID:_this.categoryID,
                    tagIDs:_this.tagIDs,
                    pureText
                }
                if (this.draft){
                    data.draft=1
                }
                if (this.articleID){
                    this.$axios.post(
                        "/api/post/updatePost",
                        {
                            id:this.articleID,
                            ...data
                        }
                    ).then(res=>{
                        if (res.data.status==1){
                            if (_this.draft){
                                _this.$message.info("已存为草稿")
                                _this.$store.state.article=res.data.data
                                _this.articleID=res.data.data.id
                                return
                            }
                            _this.$message.info("文章发布完成")
                            _this.$router.push({name:"postMan"})
                        }
                    })
                }else{
                    this.$axios.post(
                        "/api/post/addPost",
                        data
                    ).then(res=>{
                        if (res.data.status==1){
                            if (_this.draft){
                                _this.$message.info("已存为草稿")
                                _this.$store.state.article=res.data.data
                                _this.articleID=res.data.data.id
                                return
                            }
                            _this.$message.info("文章发布完成")
                            _this.$router.push({name:"postMan"})
                        }
                    })
                }

            },
            async getTag(){
                let _this=this;
                await this.$axios.post("/api/tag/getTag").then(res=>{
                    _this.tagList=res.data.data
                })
            },
            async getCategory(){
                let _this=this;
                await this.$axios.post("/api/category/getCategory").then(res=>{
                    _this.categoryList=res.data.data
                })
            },
            saveDraft(){
                this.draft=true
                this.submit_post()
            }
        }
    }
</script>

<style scoped lang="scss">
  .editor{
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    height: 100%;
    .editor-form{
      margin-right: 10px;
      display: grid;
      width: 25%;
      grid-template-rows: repeat(auto-fill,2rem);
      grid-template-columns: 1fr 5fr;
      grid-row-gap: 10px;
      grid-column-gap: 5px;
    }
  }
</style>