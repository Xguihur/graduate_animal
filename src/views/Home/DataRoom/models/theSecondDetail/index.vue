<template>
  <!-- <div>第二种模板 饼图</div> -->
  <div class="two-model">
    <div class="two-left">
      <div class="left-top">
        <!-- 折线图-新增 -->

        <ui-chart
          ref="leftTopChart"
          class="chart"
          :optionConfig="PieSecondOption"
        ></ui-chart>
      </div>
      <div class="left-bottom">
        <!-- 降级,根据科属种分类下来 -->
        <ui-chart
          class="chart"
          ref="leftBottomChart"
          :optionConfig="hisSecondOption"
        ></ui-chart>
      </div>
    </div>
    <div class="two-mid">
      <!-- 三级保护动物对比 -->
      <ui-chart
        class="chart"
        :optionConfig="SumOption"
        v-if="SumOption"
      ></ui-chart>
    </div>
    <div class="two-right">
      <div class="right" v-if="listData">
        <div class="right-title">各纲类列表：</div>
        <!-- 手风琴 -->
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item
            v-for="(item, index) in listData"
            :title="item.title"
            :name="index + 1"
            @click="getDetailData(item.title)"
            class="collapse-item"
          >
            <div>
              {{ item.data }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>
<script setup>
// 导入图形渲染组件
import UiChart from '@/components/data_room/histogram_input.vue'
// 导入图形渲染配置  -- 之后可以换成参数传入
import { getLevelOption } from '../../cpns/firstView/config/pie-second.js'
import SumOption from '../../cpns/firstView/config/sum-config.js'
import hisSecondOption from '../../cpns/firstView/config/col-his-second.js'
// 获取接口数据
import { getAllGang, getAllDetail, getLevelGang } from '@/utils/request.js'

import {
  onBeforeMount,
  onMounted,
  reactive,
  watch,
  toRefs,
  toRef,
  ref
} from 'vue'
import { useRoute } from 'vue-router'
import { forEach } from 'element-resize-detector/src/collection-utils.js'
// 获取路由参数信息
const route = useRoute()
const routeName = ref(route.params.name)
// 左上的图
const leftTopChart = ref(null)
//左下的图
const leftBottomChart = ref(null)
const PieSecondOption = getLevelOption({ title: '哺乳纲' })

let listData = ref()

// 点击右侧，修改配置信息并且初始化左边的echarts
const getDetailData = async (title) => {
  // console.log('事件监听：', title)
  // 改对应的值就好了
  // 左上
  PieSecondOption.title.text = title
  const { data } = await getAllGang(title)
  // 转变一下格式
  data.forEach((item) => {
    item.value = item.count
    item.count = null
  })
  // console.log(data)
  PieSecondOption.series[0].data = data
  leftTopChart.value.reloadEcharts(PieSecondOption)

  // 左下
  hisSecondOption.title.text = title
  const { data: leftBottomData } = await getLevelGang(title)
  // 继续将远程的数据变成三个数组
  let muName = []
  let oneLevel = []
  let twoLevel = []
  leftBottomData.filter((item) => {
    muName.push(item.name)
    oneLevel.push(item.firstLevel)
    twoLevel.push(item.secondLevel)
  })
  // console.log(muName)

  hisSecondOption.xAxis[0].data = muName
  hisSecondOption.series[0].data = oneLevel
  hisSecondOption.series[1].data = twoLevel

  // console.log(hisSecondOption)
  leftBottomChart.value.reloadEcharts(hisSecondOption)
}

onBeforeMount(async () => {
  const data = await getAllDetail()
  listData.value = data.data
  // console.log(listData.value)
  // 出 bug 了，页面一直不渲染，好烦这些问题
})
onMounted(() => {
  getDetailData('两栖纲')
})

// 手风琴的配置
// const listData = [
//   {
//     title: '哺乳纲',
//     data: `以大型兽类为代表的哺乳动物是最受关注的野生动物类群。国家重点保护野生动物包括了185种哺乳动物，其中96种为国家一级重点保护对象，89种为国家二级重点保护对象。`
//   },
//   {
//     title: '肠鳃纲',
//     data: `Consistent with real life: in line with the process and logic of
//               real life, and comply with languages and habits that the users are
//               used to;`
//   },
//   {
//     title: '腹足纲',
//     data: `Consistent with real life: in line with the process and logic of
//               real life, and comply with languages and habits that the users are
//               used to;`
//   },
//   {
//     title: '昆虫纲',
//     data: `昆虫属于无脊椎动物中的节肢动物，是地球上数量最多的动物群体，在所有生物种类（包括细菌、真菌、病毒)中，昆虫占比超过50%。昆虫类是此次调整中新增比例最高的类群之一，与原名录21种相比，昆虫类的重点保护对象增加了54种，叶鏅科10种全部纳入国家二级重点保护了，此外，步甲、金龟、凤蝶占比较大。`
//   },
//   {
//     title: '鸟纲',
//     data: `与原名录244种相比，鸟类重点保护对象增加150种之多。其中，鸨形目、鹤科、鲣鸟科、鹈鹕科、鹰形目、鹗形目、隼形目、咬鹃目、犀鸟科、鹦形目、八色鸫科、阔嘴鸟科的全部物种纳入保护。也就是说，中国有分布的3种鸨、3种鹈鹕、5种犀鸟全部为国家一级；9种鹤中，6种为国家一级、3种为国家二级；3种鲣鸟、3种咬鹃、9种鹦鹉、8种八色鸫、2种阔嘴鸟全部为国家二级。`
//   },
//   {
//     title: '爬行纲',
//     data: `爬行纲的重点保护对象分布在鳄目、龟鳖目和有鳞目。鳄目只有扬子鳄一种，龟鳖目就是各种龟、鳖，有鳞目如蛇、壁虎、蜥蜴等。根据《中国脊椎动物红色名录》，中国爬行类中，龟鳖目的受威胁比例高达91.18%。鳄目中，中国有分布的唯一一种扬子鳄为国家一级；龟鳖目中，中国有分布的3种陆龟、4种海龟、1种棱皮龟全部为国家一级，1种平胸龟为国家二级；有鳞目中，中国有分布的2种巨蜥全部为国家一级，10种睑虎、3种蛇蜥、2种沙蟒、1种蟒蛇全部为国家二级。`
//   },
//   {
//     title: '软骨鱼纲',
//     data: `Consistent with real life: in line with the process and logic of
//               real life, and comply with languages and habits that the users are
//               used to;`
//   },
//   {
//     title: '软甲纲',
//     data: `Consistent with real life: in line with the process and logic of
//               real life, and comply with languages and habits that the users are
//               used to;`
//   },
//   {
//     title: '珊瑚纲',
//     data: `Consistent with real life: in line with the process and logic of
//               real life, and comply with languages and habits that the users are
//               used to;`
//   },
//   {
//     title: '双壳纲',
//     data: `Consistent with real life: in line with the process and logic of
//               real life, and comply with languages and habits that the users are
//               used to;`
//   },
//   {
//     title: '水螅纲',
//     data: `Consistent with real life: in line with the process and logic of
//               real life, and comply with languages and habits that the users are
//               used to;`
//   },
//   {
//     title: '头足纲',
//     data: `Consistent with real life: in line with the process and logic of
//               real life, and comply with languages and habits that the users are
//               used to;`
//   },
//   {
//     title: '鱼纲',
//     data: `Consistent with real life: in line with the process and logic of
//               real life, and comply with languages and habits that the users are
//               used to;`
//   },
//   {
//     title: '圆口纲',
//     data: `Consistent with real life: in line with the process and logic of
//               real life, and comply with languages and habits that the users are
//               used to;`
//   },
//   {
//     title: '肢口纲',
//     data: `Consistent with real life: in line with the process and logic of
//               real life, and comply with languages and habits that the users are
//               used to;`
//   },
//   {
//     title: '肢口纲',
//     data: `Consistent with real life: in line with the process and logic of
//               real life, and comply with languages and habits that the users are
//               used to;`
//   },
//   {
//     title: '蛛形纲',
//     data: `本次调整新增了蛛形纲的海南塞勒蛛，也是蜘蛛类的唯一保护动物`
//   },
//   {
//     title: '两栖纲',
//     data: `两栖纲保护对象分布在无尾目、有尾目和螈目，无尾目如大鲵，有尾目如蛙类，蚓螈目如蚓螈。根据《中国脊椎动物红色名录》，中国两栖动物受威胁比例最高的目是有尾目(63.4%)，明显高于无尾目(39.0%) 此次入列名录的有尾目最多，无尾目其次。有尾目中，中国有分布的小鲵全部为重点保护对象，其中7种为国家一级，86种为国家二级。`
//   }
// ]
</script>
<style lang="less" scoped>
.two-model {
  display: flex;
  padding: 2%;
  box-sizing: border-box;
  justify-content: space-around;

  > div {
    margin-right: 1vw;
    height: 80vh;
    // background-color: pink;
  }

  .two-left {
    flex: 1;
    display: flex;
    padding: 1%;
    box-sizing: border-box;
    justify-content: space-between;
    flex-direction: column;
    > div {
      background-color: rgb(230, 119, 98);
    }

    .left-top {
      flex: 1;
      padding: 0.5vh;
      border-radius: 1vw;
      box-sizing: border-box;

      .chart {
        height: 100%;
        border-radius: 0.8vw;
        background-color: #fff;
      }
    }
    .left-bottom {
      position: relative;
      flex: 1;
      margin-top: 1vh;
      padding: 0.5vh;
      border-radius: 1vw;

      .chart {
        scale: 1;
        padding-top: 1.5vh; //让顶部有一个内边距好看一些，如果能在 echarts 配置中搞那更好了
        // position: absolute;
        // top: 2vh;
        border-radius: 0.8vw;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        background-color: #fff;
      }
    }
  }
  .two-mid {
    // position: relative;
    width: 50%;
    height: 80vh;
    align-items: center;

    .chart {
      height: 80vh;
      padding-top: 1.5vh; //让顶部有一个内边距好看一些，如果能在 echarts 配置中搞那更好了
      border-radius: 2vw;
      box-sizing: border-box;
      background-color: #fff;
      border: 0.3vw solid rgb(230, 119, 98);
    }
  }
  .two-right {
    flex: 1;
    margin-right: 0;
    display: flex;
    padding: 1% 2%;
    box-sizing: border-box;
    justify-content: space-between;
    flex-direction: column;

    .right {
      height: 100%;
      max-width: 19vw;
      padding: 0.8vh 1vw 0;
      overflow: auto;
      background-color: #fff;
      border-radius: 1vw;
      border: 0.3vw solid rgb(230, 119, 98);

      .right-title {
        font-weight: 600;
        margin-bottom: 1.5vh;
      }
      .collapse-item {
        // width: 80%;
      }
    }
    // 滚动条
    .right::-webkit-scrollbar {
      width: 0vw;
    }
    .right::-webkit-scrollbar-track {
      background-color: #9fdff0;
      border-radius: 0.5vh;
    }
    .right::-webkit-scrollbar-thumb {
      background-color: rgb(210, 204, 205);
      border-radius: 0.5vh;
    }
    .right::-webkit-scrollbar-thumb:hover {
      background-color: rgb(205, 0, 34);
    }
  }
}
</style>
