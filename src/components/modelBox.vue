<template>
  <div class="model" v-show="isShowModel">
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
</template>
<script setup>
import { defineComponent, ref, reactive, onMounted } from 'vue'
const isShowModel = ref(false)
let animalDetail = ref({})
const closeModel = function () {
  isShowModel.value = false
}
</script>
<style lang="less">
.distribution-room {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #efd8d0;
  .num {
    position: absolute;
    bottom: 2vh;
    right: 2vw;
  }
  // background-color: #d5af82;
  .map-wrapper {
    position: absolute;
    top: 50%;
    left: 4vw;
    transform: translateY(-50%);
    width: 63vw;
    height: 80vh;
    border-radius: 20px;
    background-color: #fff;
    overflow: hidden;
  }
  .detail-animal-wrapper {
    position: absolute;
    top: 50%;
    right: 6vw;
    transform: translateY(-50%);
    width: 24vw;
    height: 80vh;
    background-color: #7b5f54;
    border: 2px solid #af7b5d;
    border-radius: 10px;
    box-sizing: border-box;
    z-index: 110;
    .outline {
      width: 100%;
      height: 10vh;
      line-height: 10vh;
      text-align: center;
      color: #fff;
      font-weight: 600;
      font-size: 1.6vw;
      cursor: default;
    }
    .animal-display {
      position: absolute;
      left: 0;
      bottom: 0;
      flex-direction: column;
      width: 100%;
      height: 73vh;
      // background-color: pink;
      // background-color: #5e453b;
      padding: 10px;
      box-sizing: border-box;
      .swiper {
        width: 98%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        // background-color: pink;
        z-index: 110;
        .swiper-slide {
          text-align: center;
          font-size: 1vw;
          .animali-list {
            // position: absolute;
            // left: 0;
            // bottom: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 96%;
            // background-color: #fff;
            box-sizing: border-box;
            padding: 20px;
            .animal-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              width: 6.5vw;
              height: 6.5vw;
              box-sizing: border-box;
              padding: 4px;
              cursor: pointer;
              .animal-pic {
                width: 4.6vw;
                height: 4.6vw;
                background-color: #fff;
                border-radius: 50%;
                border: 2px solid #5e453b;
                box-sizing: border-box;
              }
              .animal-name {
                color: #fff;
                cursor: default;
              }
            }
          }
        }
        .swiper-pagination-bullet {
          background-color: #fff;
        }
      }
    }
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
      left: 4vw;
      // transform: translate(-50%, -50%);
      transform: translateY(-50%);
      width: 64vw;
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
}
</style>
