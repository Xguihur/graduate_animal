<template>
  <router-link to="/dataroom" class="back-front">
    <!-- <div class="image"> -->
    <img src="@/assets/images/front.png" alt="" />
    <!-- </div> -->
    <div class="text">返回</div>
  </router-link>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.back-front {
  position: absolute;
  right: 2vw;
  top: 2vh;
  width: 3.5vw;
  height: 3.5vw;
  background-color: transparent;
  transition: all 0.3s;
  cursor: pointer;
  img {
    width: 100%;
  }
}
.back-front:hover {
  transform: rotate(360deg);
}
.text {
  text-align: center;
  margin-left: 0.5vw;
  margin-top: -0.5vh;
  color: #ddd;
  font-weight: 600;
  text-shadow: 0.1vh 0.2vh 0.9vh rgb(95, 68, 72);
  width: 2.5vw;
  font-size: 0.8vw;
}
</style>
