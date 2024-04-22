<template>
  <div class="dataroom-detail">
    <back-front></back-front>
    <!-- <div>数据分析室的详细内容</div> -->

    <div class="content">
      <keep-alive>
        <component :is="tabs[currentTab]" class="tab"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import ModelOne from '../models/theOneDetail/index.vue'
import ModelTwo from '../models/theSecondDetail/index.vue'
import BackFront from '@/components/BackFront/BackFront.vue'

// 获取路由参数信息
const route = useRoute()
const routeName = ref(route.params.name)

const tabs = {
  Level: ModelTwo,
  Percent: ModelOne
}
const currentTab = routeName //直接用 ref 就好了，不需要用 reactive
</script>

<style lang="less" scoped>
.dataroom-detail {
  width: 100%;
  height: 100vh;
  padding: 2%;
  box-sizing: border-box;
  background-color: #54bdaf;

  .content {
    margin-top: 3vh;
  }
}
</style>
