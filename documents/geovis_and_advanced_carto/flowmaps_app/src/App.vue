<template>
  <div id="app">
    <Map/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import FileDropper from "@/components/FileDropper";
import Map from "@/components/Map";

export default {
  name: 'App',
  components: {
    Map,
    // HelloWorld
    // FileDropper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin-top: 0px;
  margin-left: 0px;
  max-right: 0px;
  margin-bottom: 0px;
}
</style>
