<template>
  <div class="banner-box">
    <!-- <div class="title">这是轮播图</div> -->
    <div class="swiper" ref="mySwiper">
      <swiper
        :spaceBetween="30"
        :pagination="{
          clickable: true
        }"
        :loop="true"
        autoplay
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="@/assets/images/Home/RoomBanner/protect-cute.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/Home/RoomBanner/wilde.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/Home/RoomBanner/protect-green.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/Home/RoomBanner/protect-people.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/Home/RoomBanner/protect-tree.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/Home/RoomBanner/protect-yesheng.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/Home/RoomBanner/animals.jpg" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
// 导入swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper'
import { onMounted, ref } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
const modules = [Pagination, Autoplay]

const mySwiper = ref()
let swiperOptions
onMounted(() => {
  swiperOptions = {
    spaceBetween: 30,
    pagination: {
      clickable: true
    },
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: true
    },
    modules: modules
  }
  // mySwiper.autoplay.start()
})
</script>
<style lang="less" scoped>
.banner-box {
  width: 28vw;
  height: 39vh;

  .swiper {
    margin-top: 1vh;
    padding: 0 0vh 0 0.6vh;
    box-sizing: border-box;
    // background-color: #fff;
  }
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  // background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 3%;
  overflow: hidden;
  object-fit: cover;
}
</style>
