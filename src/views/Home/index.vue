<template>
  <div id="home">
    <div class="bg">
      <h1 class="theme-title"><span>中国保护动物</span><br />科普站</h1>
      <router-link to="/distributionroom" class="room distributionroom">
        <img
          src="../../assets/images/Home/bgDistribution.png"
          @mouseenter="displayRoom($event)"
          @mouseleave="hideRoom($event)"
          alt=""
        />
        
        <div class="tip showroom-tip">在这里可以了解到保护动物在各省的分布情况</div>
        <div class="title">动物分布指南</div>
      </router-link>
      <router-link to="/showroom" class="room showroom">
        <img
          src="../../assets/images/Home/bgShowroom.png"
          @mouseenter="displayRoom($event)"
          @mouseleave="hideRoom($event)"
          alt=""
        />
        
        <div class="tip distribution-tip">可以了解到保护动物相关的一些基础信息</div>
        <div class="title">陈列馆</div>
      </router-link>
      <router-link to="/dataroom" class="room dataroom">
        <img
          src="../../assets/images/Home/bgDataroom.png"
          @mouseenter="displayRoom($event)"
          @mouseleave="hideRoom($event)"
          alt=""
        />
        
        <div class="tip dataroom-tip">在这里对保护动物的数据进行处理，并以图表形式展现分析</div>
        <div class="title">数据分析室</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const displayRoom = function (event) {
      let roomRef = event.currentTarget.nextElementSibling
      roomRef.style.display = 'block'
    }
    const hideRoom = function (event) {
      let roomRef = event.currentTarget.nextElementSibling
      roomRef.style.display = 'none'
    }
    return {
      displayRoom,
      hideRoom
    }
  }
})
</script>
<style lang="less">
#home {
  width: 100%;
  height: 100vh;
  .theme-title {
    margin: 0;
    padding: 15vh 5vw;
    font-size: 3.7vw;
    color: #fff;
    font-family: 'STCaiyun';
    line-height: 9vh;
    cursor: default;
    span {
      font-size: 3vw;
    }
  }
}

.bg {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../../assets/images/Home/bg.jpg') no-repeat;
  background-size: 100% 100%;
}

.bg .room {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13vw;
  height: 20vh;
  text-decoration: none;
  // flex-direction: column;
  // flex-wrap: nowrap;
}

.bg .room img {
  width: 100%;
  height: 100%;
  transition: all 1s;
}
.bg .room .title{
  text-align: center;
  color: #ddd;
  font-weight: 600;
  text-shadow: 0.1vh 0.2vh 0.9vh rgb(95, 68, 72);
  width: 2.5vw;
  font-size: 1.5vw;
  // width: 13vw;
}
.bg .room .tip {
  width: 90%;
  height: 90%;
  position: absolute;
  text-align: center;
  padding: 8%;
  padding-top: 24%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 20px;
  transition: all 3s;
  font-size: 1vw;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.bg .room .showroom-tip {
  top: -60%;
  left: -90%;
  display: none;
  background-color: #ca846b;
}

.bg .room .distribution-tip {
  top: -70%;
  right: -110%;
  display: none;
  background-color: #cee16e;
}

.bg .room .dataroom-tip {
  bottom: -70%;
  right: -110%;
  display: none;
  background-color: #50b0a4;
}

// .bg .room img:hover {
//   transform: scale(1.1, 1.1);
//   transition: all 1s;
// }

.bg .room:hover {
  transform: scale(1.1, 1.1);
  transition: all 1s;
}

.bg .distributionroom {
  top: 35vh;
  left: 30vw;
}

.bg .showroom {
  top: 28vh;
  right: 30vw;
}

.bg .dataroom {
  bottom: 21vh;
  right: 35vw;
}
</style>
