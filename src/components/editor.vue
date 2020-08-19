<template>
  <div class="editor">
    <div class="editor-form">
      <label>标题</label>
      <a-input style="grid-column-start: 2;grid-column-end: 4"></a-input>
      <label>分类</label>
      <a-select mode="multiple">

      </a-select>
      <a-button icon="plus">添加</a-button>
      <label>标签</label>
      <a-select mode="multiple">

      </a-select>
      <a-button icon="plus">添加</a-button>
      <a-button icon="cloud-upload" style="grid-column-start: 2">发布</a-button>
    </div>
    <mavon-editor>
    </mavon-editor>
  </div>
</template>

<script>
    export default {
        name: "editor",
        data(){
            return {

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
      width: 30%;
      grid-template-rows: repeat(auto-fill,2rem);
      grid-template-columns: 1fr 7fr 2fr;
      grid-row-gap: 10px;
      grid-column-gap: 5px;
    }
  }
</style>