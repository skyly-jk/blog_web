<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
    name: 'App',
    mounted() {

    },
    methods:{

    }
}
</script>

<style>
  body, html, #app {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  body{
    overflow-y: scroll;
  }
  #app {

  }
</style>
