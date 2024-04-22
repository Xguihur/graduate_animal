<template>
  <!-- <div>第一种模板 -- 柱状图</div> -->
  <div class="pie-model">
    <div class="pie-top">
      <div class="data-show">
        <div class="left-top">
          <!-- 词云图-各省十大保护动物 -->
          <!-- cloud="true" -->
          <ui-chart
            class="chart"
            :optionConfig="LevelOption"
            v-if="LevelOption"
          ></ui-chart>
        </div>
        <div class="left-bottom">
          <!-- 各省投入:投入保护区、投入保护动物、投入建设、投入运营、投入地面 -->
          <!-- cloud="true" -->
          <ui-chart
            class="chart"
            cloud="true"
            :optionConfig="WordCloudOption"
          ></ui-chart>
        </div>
      </div>
      <div class="select">
        <!-- 中间是保护动物的数量 -->
        <ui-chart
          class="chart"
          :optionConfig="TwoHistogramOption"
          v-if="TwoHistogramOption"
        ></ui-chart>
      </div>
    </div>
  </div>
</template>
<script setup>
// 导入图表
import UiChart from '@/components/data_room/histogram_input.vue'
// 导入配置
import { getPrinceLevel } from '../../cpns/firstView/config/two-histogram-config.js'
import WordCloudOption from '../../cpns/firstView/config/word-cloud-config.js'
import ColHistogramOption from '../../cpns/firstView/config/col-histogram-config.js'
import SumOption from '../../cpns/firstView/config/sum-config.js'
import { getLevelData } from '../../cpns/firstView/config/level-config.js'

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
// 获取路由参数信息
const route = useRoute()
const routeName = ref(route.params.name)

let TwoHistogramOption = ref()
let LevelOption = ref()

const initOption = async () => {
  TwoHistogramOption.value = await getPrinceLevel()
  LevelOption.value = await getLevelData()
}
onMounted(() => {
  initOption()
})

const value2 = ref(null)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>
<style lang="less" scoped>
.pie-model {
  padding: 2%;
  box-sizing: border-box;

  .pie-top {
    display: flex;
    justify-content: space-between;
  }
  .data-show {
    width: 35vw;
    margin-right: 1vw;
    height: 85vh;
    display: flex;
    flex-direction: column;

    .left-top {
      height: 50vh;
      padding: 1vh;

      // border-radius: 1vh;
      // background-color: skyblue;

      .chart {
        width: 100%;
        height: 100%;
        border-radius: 2vh;
        box-sizing: border-box;
        background-color: #fff;
        border: 0.3vw solid rgb(230, 119, 98);
      }
    }
    .left-bottom {
      // flex: 1;
      height: 50vh;
      margin-top: 1vh;
      padding: 1vh;
      // background-color: salmon;

      .chart {
        width: 100%;
        height: 100%;
        border-radius: 2vh;
        box-sizing: border-box;
        background-color: #fff;
        border: 0.3vw solid rgb(230, 119, 98);
      }
    }
  }
  .select {
    flex: 1;
    position: relative;
    // padding-top: 5vh;
    height: 80vh;
    margin-top: 2.5vh;
    border-radius: 1vw;
    box-sizing: border-box;
    background-color: #fff;
    border: 0.3vw solid rgb(230, 119, 98);

    .chart {
      width: 100%;
      height: 100%;
      position: absolute; //使用定位让柱状图在盒子中央，如果用padding之类的会压缩图表
      bottom: -1vh;
      box-sizing: border-box;
    }
  }
}
</style>
