<template>
  <div class="edit-cell">
    <div v-show="!edited" class="edit-cell-text">
      <a-input style="width: 100px;" type="text" v-model="text"></a-input>
      <a-icon  type="check" class="edit-cell-icon" @click="check"></a-icon>
    </div>
    <div v-show="edited" class="edit-cell-text">
      <span style="width: 100px">{{text}}</span>
      <a-icon  type="edit"  class="edit-cell-icon" @click="edit"></a-icon>
    </div>
  </div>
</template>

<script>
    export default {
        name: "editCell",
        props:['text'],
        data(){
            return {
                edited:true,
                oldvalue:""
            }
        },
        mounted() {
            this.oldValue=this.text
        },
        methods:{
          edit(){
              this.edited=false;
          },
          check(){
              if (this.oldValue!=this.text){
                  this.$emit("change");
              }
              this.edited=true;
          }
        }
    }
</script>

<style scoped lang="scss">
  .edit-cell{
    width: 80%;
    display: flex;
    flex-direction: row;
    .edit-cell-text{
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      .edit-cell-icon{
        line-height: 3rem;
        margin-left: 20px;
        visibility: hidden;
        &:hover{
          color: blue;
        }
      }
      &:hover{
        .edit-cell-icon{
          visibility: visible;
        }
      }
    }

  }
</style>