<template>
  <div>
    <slot></slot>
    <div ref="histogramChart" class="chart-box"></div>
  </div>
</template>
<script setup>
import * as echarts from 'echarts'
import { onMounted, onUnmounted, ref } from 'vue'
// 导入 初始化图标的 hook
import { EchartTools } from '@/hooks/initEcharts.js'
// 导入清除事件监听的hook
import removeRiseze from '@/hooks/removeListener.js'

// 定义父组件传入的配置文件
const props = defineProps({
  optionConfig: Object,
  cloud: {
    type: Boolean,
    default: false
  }
})

// 按需导入词云组件
// if (props.cloud) {
import 'echarts-wordcloud'
// }

// 定义 dom 元素 以及 echartTools 实例
const histogramChart = ref()
let echartTools

// 刷新echarts
const reloadEcharts = (option) => {
  echartTools.reloadEcharts(option)
}

// 对外暴露
defineExpose({ reloadEcharts })

onMounted(() => {
  echartTools = new EchartTools(histogramChart.value, props.optionConfig)
  // console.log(histogramChart.value)
})
onUnmounted(() => {
  // 移除 resize 事件监听
  echartTools.removeRiseze()
})
</script>
<style lang="less" scoped>
.chart-box {
  width: 100%;
  height: 100%;
  padding-right: 1vw;
  box-sizing: border-box;
}
</style>
