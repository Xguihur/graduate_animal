<template>
  <div class="show-room">
    <back-home></back-home>
    <el-switch
      v-model="value1"
      class="ml-2 switch"
      size="large"
      active-text="动物分支树"
      inactive-text="时间轴"
      style="--el-switch-on-color: #2da161; --el-switch-off-color: #2bb8bf"
    />
    <div class="show-box">
      <tree class="tree" v-if="value1"></tree>
      <slide class="slide" v-if="!value1"></slide>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Tree from './cpns/tree.vue'
import Slide from './cpns/slide.vue'
import BackHome from '@/components/BackHome/BackHome.vue'

const value1 = ref(false)
</script>
<style lang="less" scoped>
.show-room {
  width: 100%;
  height: 100vh;
  padding: 2vh 2vw;
  box-sizing: border-box;
  background-color: #bace5e;
  // background-color: #2bb8bf;

  .switch {
    // width: 10vw;

    height: 10vh;
    padding: 1%;
    margin: 2vh 1vw 0;
    font-size: 30px;
    border-radius: 2vw;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0vh 0.2vh 1vh #111;
  }
  .show-box {
    height: 78vh;
    // width: 100%;
    padding: 1%;
    box-sizing: border-box;
    margin: 3vh 1vw;
    border-radius: 0.5vw;
    background-color: #eeeeed;

    .tree,
    .slide {
      width: 100%;
      height: 65vh;
    }
  }
}
</style>
