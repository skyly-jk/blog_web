<template>
  <div class="tagView">
    <tag-cloud style="align-items: center"></tag-cloud>
  </div>
</template>

<script>
    import TagCloud from "../util/tagCloud";
    export default {
        name: "tagView",
        components: {TagCloud}
    }
</script>

<style scoped lang="scss">
  .tagView{
    height: 95%;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>