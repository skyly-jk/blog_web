<template>
  <div id="app">
    <Head style="width: 100%;border-bottom: black 1px solid;display: flex;flex-direction: row;justify-content: center"></Head>
    <router-view style="width: 100%;height:94%;display: flex;flex-direction: row;justify-content: center"></router-view>
  </div>
</template>

<script>

import Head from "./components/head";
export default {
  name: 'App',
  components: {
      Head
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
