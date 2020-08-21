<template>
  <div class="editor">
    <div class="editor-form">
      <label>标题</label>
      <a-input style="grid-column-start: 2;grid-column-end: 3" v-model="title"></a-input>
      <label>分类</label>
      <a-select v-model="categoryID">
        <a-select-option v-for="category in $store.state.categorys" :key="category.id" :value="category.id">
          {{category.name}}
        </a-select-option>
      </a-select>
      <label>标签</label>
      <a-select mode="multiple" v-model="tagIDs">
        <a-select-option v-for="tag in $store.state.tags" :key="tag.id" :value="tag.id" :token-separators="[',']">
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
                content:""
            }
        },
        methods:{
            submit_post(){
                let _this=this;
                this.$axios.post(
                    "/api/post/addPost",
                    {
                        title:_this.title,
                        author:"测试",
                        content:_this.content,
                        categoryID:_this.categoryID,
                        tagIDs:_this.tagIDs,
                    }
                ).then(res=>{
                    if (res.data.status==0){
                        _this.$message.info("文章发布完成")
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  .editor{
    margin-top: 15px;
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