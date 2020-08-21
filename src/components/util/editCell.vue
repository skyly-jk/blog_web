<template>
  <div class="edit-cell">
    <div v-show="!edited">

    </div>
    <div v-show="edited">
      <span>{{text}}</span>
      <a-icon type="edit" class="edit-cell-icon"></a-icon>
    </div>
  </div>
</template>

<script>
    export default {
        name: "editCell",
        props:['text'],
        data(){
            return {
                edited:true
            }
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
  .edit-cell{
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    .edit-cell-icon{
      line-height: 3rem;
      position: absolute;
      right: 0;
    }
  }
</style>