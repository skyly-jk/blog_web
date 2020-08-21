<template>
    <div class="head">
      <div class="home">
        <span class="logo-before"></span>
        <span class="title">MR.YAN</span>
        <span class="logo-after"></span>
      </div>
      <a-menu mode="horizontal" @select="menu_select">
        <a-menu-item v-for="menu in menuList" :key="menu.key">
          <a-icon :type="menu.icon" :theme="menu.theme"/>
          {{menu.name}}
        </a-menu-item>
<!--        <a-menu-item key="tag">-->
<!--          <a-icon type="tags"/>-->
<!--          标签-->
<!--        </a-menu-item>-->
<!--        <a-menu-item>-->
<!--          <a-icon type="appstore" theme="filled"/>-->
<!--          分类-->
<!--        </a-menu-item>-->
<!--        <a-menu-item>-->
<!--          <a-icon type="database" theme="filled"/>-->
<!--          归档-->
<!--        </a-menu-item>-->
<!--        <a-menu-item>-->
<!--          <a-icon type="bank" theme="filled"/>-->
<!--          实验室-->
<!--        </a-menu-item>-->
      </a-menu>
    </div>
</template>

<script>
    export default {
        name: "head",
        props:['menuList'],
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