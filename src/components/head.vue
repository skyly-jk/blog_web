<template>
  <div>
    <div class="head">
      <a-menu mode="horizontal" @select="menu_select">
        <a-menu-item key="main">
          <a-icon type="home"/>主页
        </a-menu-item>
        <a-menu-item key="tag">
          <a-icon type="tags"/>
          标签
        </a-menu-item>
        <a-menu-item>
          <a-icon type="appstore" theme="filled"/>
          分类
        </a-menu-item>
        <a-menu-item>
          <a-icon type="database" theme="filled"/>
          归档
        </a-menu-item>
        <a-menu-item>
          <a-icon type="bank" theme="filled"/>
          实验室
        </a-menu-item>
      </a-menu>
      <div class="user-info">
        <a-button icon="edit" @click="$router.push({name:'editor'})">写博客</a-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "head",
        data(){
            return {

            }
        },
        methods:{
            menu_select(item){
              this.$router.push({name:item.key})
            }
        }
    }
</script>

<style scoped lang="scss" src="@/assets/scss/head.scss">
</style>