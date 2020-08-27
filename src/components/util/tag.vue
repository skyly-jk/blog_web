<template>
  <div class="tag">
    <a-input v-show="edited" style="width: 5rem" v-model="name" size="small"></a-input>
    <a-icon v-show="edited" class="tag-icon" type="check" @click="check"></a-icon>
    <span v-show="!edited" class="tag-text" @dblclick="edit">{{name}}</span>
    <a-popconfirm title="是否删除？" @confirm="deleteTag">
      <a-icon v-show="!edited" class="tag-icon" type="close"></a-icon>
    </a-popconfirm>
  </div>
</template>

<script>
    export default {
        name: "tag",
        props:['name','addFlag'],
        data(){
            return {
                edited:false,
                oldval:"",
            }
        },
        mounted() {
            this.oldval=this.name
            if (this.addFlag){
                this.edited=this.addFlag
            }
        },
        methods:{
            edit(){
                this.edited=true
            },
            check(){
                if (this.oldval!=this.name){
                    this.$emit("tag-edit",this.name)
                }
                this.edited=false
            },
            deleteTag(){
                this.$emit("tag-delete")
            }
        }
    }
</script>

<style scoped lang="scss">
  .tag{
    background-color: #F7F7F7;
    border-radius: 3px;
    padding:{
      top: 5px;
      bottom: 5px;
      left: 10px;
      right: 10px;
    }
    margin-right: 10px;
    margin-bottom: 10px;
    .tag-icon{
      font-size: 10px;
      padding-left: 5px;
      cursor: pointer
    }
    .tag-text{
      font-size: 16px;
      cursor: default;
    }
  }
</style>