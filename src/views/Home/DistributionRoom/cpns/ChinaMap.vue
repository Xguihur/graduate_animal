<template>
  <div>
    <div ref="chinaMap" style="height: 90vh; width: 100%"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import chinaJSON from '@/assets/json/china.json'
import elementResizeDetectorMaker from 'element-resize-detector'
import { onMounted, ref } from 'vue'
const chinaMap = ref()
const emit = defineEmits(['toFather'])
onMounted(() => {
  drawChina()
  emit('initProvince', regions[0].name)
})
let regions = [
  {
    name: '新疆维吾尔自治区',
    itemStyle: {
      areaColor: '#67d2d4',
      opacity: 1
    }
  }
]
let scatter = [
  {
    name: '大熊猫国家公园',
    value: [105.186111, 31.852778]
  },
  { name: '西藏芒康滇金丝猴国家级自然保护区', value: [98.666667, 29.133333] },
  { name: '石首糜鹿国家级自然保护区', value: [112.55, 29.816667] },
  {
    name: '广西崇左白头叶猴国家级自然保护区',
    value: [107.281389, 22.178611]
  },
  { name: '瓦屋山自然保护区', value: [102.816667, 29.416667] },
  { name: '青海可可西里国家级自然保护区', value: [92.0, 35.166667] },
  { name: '江苏大丰麋鹿国家级自然保护区', value: [120.8, 33.0] },
  { name: '都江堰熊猫谷', value: [30.96812631795538, 103.59674183178554] },
  { name: '安徽扬子鳄国家级自然保护区', value: [119.0, 30.3] },
  { name: '长江宜昌中华鲟自然保护区', value: [111.266667, 30.5] }
]
function drawChina() {
  var myChart = echarts.init(chinaMap.value)
  echarts.registerMap('china', chinaJSON) //注册可用的地图
  var option = {
    geo: {
      map: 'china',
      roam: true, //是否允许缩放，拖拽
      zoom: 1.3, //初始化大小
      //缩放大小限制
      scaleLimit: {
        min: 1.3, //最小
        max: 3 //最大
      },
      //设置中心点
      center: [106, 32],
      //省份地图添加背景
      regions: regions,
      itemStyle: {
        areaColor: '#e098c7',
        color: 'white',
        borderColor: '#7b5f54',
        borderWidth: 2
      },
      //高亮状态
      emphasis: {
        itemStyle: {
          areaColor: '#858bd3',
          color: '#fff'
        }
      }
    },
    //配置属性
    series: {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: scatter,
      showEffectOn: 'render',
      rippleEffect: {
        //涟漪特效相关配置
        brushType: 'fill' //波纹的绘制方式，可选 'stroke' 和 'fill'
      },
      hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果
      label: {
        //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      itemStyle: {
        //图形样式，normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时
        normal: {
          color: '#ffffff', //散点的颜色
          shadowBlur: 10,
          shadowColor: 20,
          fontSize: '12px'
        }
      },
      zlevel: 1
    }
  }
  myChart.setOption(option)
  const erd = elementResizeDetectorMaker()
  erd.listenTo(chinaMap.value, function (element) {
    myChart.resize()
  })
  myChart.on('click', function (params) {
    if (!JSON.stringify(regions).includes(JSON.stringify(params.region))) {
      regions.push({
        name: params.name,
        itemStyle: {
          areaColor: '#67d2d4',
          opacity: 1
        }
      })
    }
    regions.forEach((area) => {
      if (area.name === params.name) {
        area.itemStyle.areaColor = '#67d2d4'
        emit('toFather', params.name)
      } else {
        area.itemStyle.areaColor = '#e098c7'
      }
    })
    myChart.setOption(option)
    erd.listenTo(chinaMap.value, function (element) {
      myChart.resize()
    })
  })
}
</script>
