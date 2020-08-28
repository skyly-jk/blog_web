<template>
    <div class="head" >
      <div class="home" @click="switchModule">
        <span class="logo-before"></span>
        <span class="title">MR.YAN</span>
        <span class="logo-after"></span>
      </div>
      <a-menu mode="horizontal" @select="menu_select">
        <a-menu-item v-for="menu in menuList" :key="menu.key">
          <a-icon :type="menu.icon" :theme="menu.theme"/>
          {{menu.name}}
        </a-menu-item>
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
            },
            switchModule(){
                if(this.$router.currentRoute.path.match(/admin/g)){
                    this.$router.push("/")
                }else {
                    this.$router.push("/admin")
                }
            }
        }
    }
</script>

<style scoped lang="scss" src="@/assets/scss/head.scss">
</style>