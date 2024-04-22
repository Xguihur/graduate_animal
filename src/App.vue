<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {}
})
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100vh;
}
</style>
