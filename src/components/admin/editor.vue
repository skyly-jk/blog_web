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
    <mavon-editor v-model="content">
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
                categoryList:[]
            }
        },
        mounted() {
            this.getTag();
            this.getCategory();
        },
        methods:{
            submit_post(){
                let pureText=document.getElementsByClassName("v-note-show")[0].innerText
                pureText=pureText.replace(/\s*/g,"")
                pureText=pureText.replace(/[\r\n]/g,"")
                let _this=this;
                this.$axios.post(
                    "/api/post/addPost",
                    {
                        title:_this.title,
                        author:"测试",
                        content:_this.content,
                        categoryID:_this.categoryID,
                        tagIDs:_this.tagIDs,
                        pureText
                    }
                ).then(res=>{
                    if (res.data.status==1){
                        _this.$message.info("文章发布完成")
                        _this.$router.push({name:"postMan"})
                    }
                })
            },
            getTag(){
                let _this=this;
                this.$axios.post("/api/tag/getTag").then(res=>{
                    _this.tagList=res.data.data
                })
            },
            getCategory(){
                let _this=this;
                this.$axios.post("/api/category/getCategory").then(res=>{
                    _this.categoryList=res.data.data
                })
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