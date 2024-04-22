<template>
  <div>
    <div class="top">
      <div class="protect-level">
        <!-- <router-link to="/dataroom-detail-Level"> -->
        <ui-chart class="chart-top" :optionConfig="SumConfig" v-if="SumConfig">
          <div>
            <text
              class="childTitle point"
              @click="turnTo('/dataroom-detail-Level')"
              >保护动物各类别对比<span class="title-detail"
                >(点击查看详细数据)</span
              ></text
            >
          </div>
        </ui-chart>
        <!-- </router-link> -->
      </div>

      <div class="view">
        <!-- <div class="view-title">数据分析室 --- 全国动物数据分析</div> -->
        <div class="view-data">
          <!-- 数字显示器组件 -->

          <my-number></my-number>
          <!-- 轮播图组件 -->
          <my-banner></my-banner>
        </div>
      </div>
      <div class="protect-percent">
        <!-- 引入组件展示首页的部分图标 -->
        <ui-chart
          class="chart-top"
          :optionConfig="PercentOption"
          v-if="PercentOption"
        >
          <div>
            <text
              class="childTitle point"
              @click="turnTo('/dataroom-detail-Percent')"
              >各省份保护动物比较<span class="title-detail"
                >(点击查看详细数据)</span
              ></text
            >
          </div>
        </ui-chart>
        <!-- </router-link> -->
      </div>
    </div>
    <div class="bottom">
      <div class="province-trend">
        <!-- <router-link to="/dataroom-detail-Trend"> -->
        <ui-chart class="chart-bottom" :optionConfig="TrendConfig">
          <div>
            <text class="childTitle">各纲类保护动物</text>
          </div>
        </ui-chart>
        <!-- </router-link> -->
      </div>
      <div class="province-input">
        <!-- <router-link to="/dataroom-detail-Input"> -->
        <ui-chart class="chart-bottom" :optionConfig="VarietyConfig">
          <div>
            <text class="childTitle"> 生物多样性 </text>
          </div>
        </ui-chart>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>
<script setup>
// 导入库的内容
import { onMounted, reactive, watch, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
// 导入组件
import UiChart from '@/components/data_room/histogram_input.vue'
import MyBanner from '@/components/data_room/banner.vue'
import MyNumber from '@/components/data_room/number-show.vue'
// 导入一些表的配置文件
import { getLevelData } from './config/level-config.js'
import TrendConfig from './config/trend-cute.js'
import HistogramConfig from './config/histogram-config.js'
import { getDataPrince } from './config/percent-config.js'
import VarietyConfig from './config/variety-config'
import SumConfig from './config/sum-config.js'

let LevelOption = ref()
let PercentOption = ref()

const initOption = async () => {
  LevelOption.value = await getLevelData()
  PercentOption.value = await getDataPrince()
  // console.log(LevelOption.value)
}
onMounted(() => {
  initOption()
})

const router = useRouter()
// 编程式导航
const turnTo = (path) => {
  router.push({ path: path })
}
</script>
<style lang="less" scoped>
.title-detail {
  color: pink;
  font-size: 1.2vw;
  margin-left: 0.8vw;
}
.point {
  transition: all 600ms;
  cursor: pointer !important;
}
.point:hover {
  scale: 1.09;
  color: #c8b46c;
  // background-color: #fff;
  transition: all 400ms;
}
.childTitle {
  padding: 1vh 1vw;
  box-sizing: border-box;
  display: inline-block;
  cursor: default;
  color: #ddd;
  font-weight: 600;
  font-size: 1.15vw;
  text-shadow: 0.1vh 0.2vh 0.9vh rgb(95, 68, 72);
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    // width: 200px;
    flex: 1;
    height: 60vh;
    margin-right: 1vw;
    padding: 0 1%;
    border-radius: 1vw;
    background-color: #43a0b77c;

    .chart-top {
      height: 60vh; //控制图标的大小，通过高度去设置，父组件控制子组件的大小
    }
    // background-color: #eee;
  }
  > div:nth-last-child(1) {
    margin-right: 0;
  }
  .view {
    padding: 1vh 2vw;
    // text-align: center;
    // display: flex;
    // justify-content: center;
    box-sizing: border-box;

    .view-title {
      margin-bottom: 2vh;
      text-align: center;
    }
    .view-data {
    }
  }
  .protect-percent {
    padding-bottom: 2vw;
    box-sizing: border-box;
    .chart-top {
      width: 100%;
      height: 100%;
    }
  }
}
.bottom {
  display: flex;
  margin-top: 3vh;
  align-items: center;
  justify-content: space-between;
  > div {
    flex: 1;
    margin-right: 1vw;
    height: 30vh;
    overflow: hidden; //去掉因为图表底部超内容导致的滚动条
    // background-color: #59c1dca5;
    background-color: #43a0b77c;
    border-radius: 1vw;
  }
  > div:nth-last-child(1) {
    margin-right: 0;
  }
  .chart-bottom {
    height: 30vh;
  }
}
</style>
