<template>
  <div class="category">
    <div style="display: flex;flex-direction: column;width: 60%;">
      <div class="tool-bar">
        <a-button>添加</a-button>
      </div>
      <div class="tag-pool">
        <tag name="java"/>
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

        },
        methods:{
            addCategory(){

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