<template>
  <div>
    <slot></slot>
    树状图
    <div ref="myTree" class="chart-box"></div>
    <!-- 模态框 -->
    <div class="model" v-if="isShowModel">
      <div class="detail-info">
        <div class="close-btn" @click="closeModel">×</div>
        <div class="detail-content">
          <h1 class="animal-name">{{ animalDetail.animal_name }}</h1>
          <div class="animal-biology content-box">
            <h3>生物学</h3>
            <p>
              {{
                animalDetail.biology === '0'
                  ? '该动物的生物学暂时无法找到哦'
                  : animalDetail.biology
              }}
            </p>
          </div>
          <div class="animal-habitat content-box">
            <h3>生境信息</h3>
            <p>
              {{
                animalDetail.habitat_information === '0'
                  ? '该动物的生境信息暂时无法找到哦'
                  : animalDetail.habitat_information
              }}
            </p>
          </div>
          <div class="animal-location content-box">
            <h3>国内外分布</h3>
            <p>
              {{
                animalDetail.domestic_distribution === '0'
                  ? '该动物的国内外分布暂时无法找到哦'
                  : animalDetail.domestic_distribution
              }}
            </p>
          </div>
          <div class="animal-economic content-box">
            <h3>形态描述</h3>
            <p>
              {{
                animalDetail.morphological_description === '0'
                  ? '该动物的形态描述暂时无法找到哦'
                  : animalDetail.morphological_description
              }}
            </p>
          </div>
          <div class="animal-img">
            <img :src="animalDetail.img" alt="" />
          </div>
          <!-- <word-cloud class="word-cloud" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import * as echarts from 'echarts'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { initTreeData } from '@/hooks/initTreeData.js'
import { getAnimalDetail } from '@/utils/request.js'

const myTree = ref()
let animalDetail = ref()
let isShowModel = ref(false)
// 关闭模态框
const closeModel = function () {
  // 直接修改 hooks 内部的 变量，真的妙啊！！！hooks真的牛
  isShowModel.value = false
}

// onMounted(async () => {
//   let { animalDetail, isShowModel } = await initTreeData(myTree.value)
// })
onMounted(async () => {
  let myChart = await initTreeData(myTree.value)
  myChart.on('click', function (param) {
    if (param.event.target.culling === true) {
      return
    } else if (param.event.target.culling === false) {
      // console.log(param.data)
      // console.log(param.data.children)
      if (!('children' in param.data)) {
        // console.log('最后一个节点啦')
        getAnimalDetail(param.data.name).then((res) => {
          animalDetail.value = res.data
          isShowModel.value = true
          console.log(animalDetail.value)
        })
      }
    }
  })
})
onUnmounted(() => {
  // removeRiseze()
})

// 展开模态框以及获取数据的接口
</script>
<style lang="less" scoped>
.chart-box {
  width: 100%;
  height: 100%;
  padding-right: 1vw;
  box-sizing: border-box;
}

.model {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  .detail-info {
    position: absolute;
    top: 50%;
    left: 50%;
    // transform: translate(-50%, -50%);
    transform: translateY(-50%) translateX(-50%);
    width: 90vw;
    height: 83vh;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    .close-btn {
      position: absolute;
      right: 5px;
      top: 5px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #7b5f54;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      color: #fff;
      font-size: 1.5vw;
      transition: all 0.3s;
    }
    .close-btn:hover {
      transform: scale(1.2);
      transition: all 0.3s;
    }
    .detail-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 92%;
      height: 94%;
      // background-color: pink;
      .animal-name {
        text-align: center;
        color: #5e453b;
      }
      .content-box {
        position: absolute;
        width: 18vw;
        height: 28vh;
        // background-color: #8f786f;
        border: 2px dashed #5e453b;
        margin-bottom: 10px;
        border-radius: 10px;
        padding: 6px;
        box-sizing: border-box;
        h3 {
          width: 40%;
          margin: 0;
          text-align: center;
          color: #fff;
          background-color: #7b5f54;
          font-size: 1.3vw;
        }
        p {
          width: 100%;
          height: 84%;
          margin-top: 8px;
          // text-indent: 2em;
          overflow-y: auto;
          font-size: 1vw;
          color: #7b5f54;
        }
        p::-webkit-scrollbar {
          width: 0 !important;
        }
      }
      .animal-biology {
        left: 0;
        top: 2.5vh;
      }
      .animal-habitat {
        bottom: 0;
        left: 0;
      }
      .animal-location {
        right: 1vw;
        top: 2.5vh;
      }
      .animal-economic {
        bottom: 0;
        right: 1vw;
      }

      .animal-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 18vw;
        height: 18vw;
        background-color: #7b5f54;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .word-cloud {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 16vw;
        height: 16vw;
        // background-color: #fff;
      }
    }
  }
}
</style>
