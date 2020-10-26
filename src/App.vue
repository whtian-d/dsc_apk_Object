<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      list: "nihao",
    };
  },
};
</script>

<style>
@import url("./styles/dsc_small_font.css");
@import url("./styles/commponent.css");
@import url("./fonts/iconfont.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #efefef;
}
</style>
