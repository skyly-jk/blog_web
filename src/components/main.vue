<template>
  <div>
    <div class="main">
      <div class="page">
        <div class="page-item" v-for="l in list" :key="l">
          <a class="page-title">测试标题</a>
          <div class="page-info">
            <p>作者 作者名</p>
            <p>发表于 2020-8-18 13:35:23</p>
            <p>分类 测试分类</p>
            <p>阅读量 000</p>
            <p>评论数 000</p>
          </div>
          <p class="page-content">
            文章内容概要
          </p>
          <div class="page-tags">
            <a class="tag">
              <a-icon type="tag"/>标签名
            </a>
          </div>
        </div>
      </div>
      <div class="info"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "main",
        data(){
            return {
                list:[1,2,3]
            }
        }
    }
</script>

<style scoped lang="scss" src="@/assets/scss/main.scss">

</style>