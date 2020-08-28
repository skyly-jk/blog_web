<template>
  <div class="tagMan">
    <div style="display: flex;flex-direction: column;width: 60%;">
      <div class="tool-bar">
        <a-button @click="addTag">添加</a-button>
      </div>
      <div class="tag-pool">
        <tag
                v-for="tag in tagList"
                :key="tag.id"
                :name="tag.name"
                :add-flag="tag.addFlag"
                @tag-edit="saveTag(tag,$event)"
                @tag-delete="deleTag(tag)"
        />
      </div>
    </div>
  </div>
</template>

<script>
    import Tag from "../util/tag";
    export default {
        name: "tagMan",
        components: {Tag},
        data(){
            return {
                tagList:[],
                addFlag:false
            }
        },
        mounted() {
          this.getTag()
        },
        methods:{
            addTag(){
                if (this.addFlag){
                    this.$message.info("已有类别处于新增状态")
                    return
                }
                this.addFlag=true
                this.tagList.push({
                    id:"",
                    name:"",
                    addFlag:true
                })
            },
            saveTag(tag,name){
                tag.name=name
                let _this=this;
                if (!tag.id){
                    this.$axios.post("/api/tag/addTag",tag).then(res=>{
                        res.data
                        _this.getTag();
                        _this.addFlag=false
                    })
                }else{
                    this.$axios.post("/api/tag/updateTag",tag).then(res=>{
                        res.data
                        _this.getTag();
                    })
                }
            },
            getTag(){
                let _this=this;
                this.$axios.post("/api/tag/getTag").then(res=>{
                        _this.tagList=res.data.data
                    }
                )
            },
            deleTag(tag){
                let _this=this;
                this.$axios.post("/api/tag/deleteTag",tag).then(res=>{
                    res.data
                    _this.getTag();
                })
            }
        }
    }
</script>

<style scoped lang="scss" >
  .tagMan{
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