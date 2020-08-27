<template>
  <div class="category">
    <div style="display: flex;flex-direction: column;width: 60%;">
      <div class="tool-bar">
        <a-button @click="addCategory">添加</a-button>
      </div>
      <div class="tag-pool">
        <tag
                v-for="category in categoryList"
                :key="category.id"
                :name="category.name"
                :add-flag="category.addFlag"
                @tag-edit="saveCategory(category,$event)"
                @tag-delete="deleCategory(category)"
        />
      </div>
    </div>
  </div>
</template>

<script>
    import Tag from "../util/tag";
    export default {
        name: "CategoryMan",
        components: {Tag},
        data(){
          return {
              categoryList:[],
              addFlag:false
          }
        },
        mounted() {
            this.getCategory()
        },
        methods:{
            addCategory(){
                if (this.addFlag){
                    this.$message.info("已有类别处于新增状态")
                    return
                }
                this.addFlag=true
                this.categoryList.push({
                    id:"",
                    name:"",
                    addFlag:true
                })
            },
            saveCategory(category,name){
                category.name=name
                let _this=this;
                if (!category.id){
                  this.$axios.post("/api/category/addCategory",category).then(res=>{
                      res.data
                      _this.getCategory();
                      _this.addFlag=false
                  })
                }else{
                    this.$axios.post("/api/category/updateCategory",category).then(res=>{
                        res.data
                        _this.getCategory();
                    })
                }
            },
            getCategory(){
                let _this=this;
                this.$axios.post("/api/category/getCategory").then(res=>{
                      _this.categoryList=res.data.data
                    }
                )
            },
            deleCategory(category){
                let _this=this;
                this.$axios.post("/api/category/deleteCategory",category).then(res=>{
                    res.data
                    _this.getCategory();
                })
            }
        }
    }
</script>
<style scoped lang="scss">
  .category{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    .tag-pool{
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 10px;
      border: #222222 1px solid;
      border-radius: 5px;
    }
    .tool-bar{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin-bottom: 10px;
    }
  }
</style>