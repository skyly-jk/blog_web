<template>
  <div class="article-card">
      <div class="card-title">
        <a @click="$router.push('post/'+article.id)">{{article.title}}</a>
      </div>
      <div class="card-bar">
        <p><i class="fa fa-user-o" aria-hidden="true"/>作者 {{article.author}}</p>
        <p><i class="fa fa-clock-o" aria-hidden="true"/>发表于 {{article.createDate}}</p>
        <p><i class="fa fa-folder-o" aria-hidden="true"/>分类 {{article.categoryName}}</p>
        <p><i class="fa fa-eye" aria-hidden="true"/>阅读量 {{article.readCount}}</p>
        <p><i class="fa fa-comment" aria-hidden="true"/>评论数 0</p>
      </div>
      <div class="card-content">
        {{article.pureText}}
      </div>
      <div class="card-tags">
        <a class="tag" v-for="tag in article.tagNames.split(',')" :key="tag">
          <a-icon type="tag"/>{{tag}}
        </a>
      </div>
  </div>
</template>

<script>
    export default {
        name: "articleCard",
        props:["article"]
    }
</script>

<style scoped lang="scss" src="@/assets/scss/card.scss">

</style>