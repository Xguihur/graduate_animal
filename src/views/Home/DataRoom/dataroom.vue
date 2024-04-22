<template>
  <div class="data-room">
    <back-home></back-home>
    <!-- 加载首页 -->
    <first-view></first-view>
  </div>
</template>
<script>
import FirstView from './cpns/firstView/firstView.vue'
import { defineComponent } from 'vue'
import firstView from './cpns/firstView/firstView.vue'
import BackHome from '@/components/BackHome/BackHome.vue'
export default defineComponent({
  components: { firstView, BackHome }
})
</script>
<style lang="less" scoped>
.data-room {
  width: 100%;
  height: 100vh;
  padding: 2%;
  box-sizing: border-box;
  // background-color: #54bdaf;
  background-color: #7fc7df;
}
</style>
