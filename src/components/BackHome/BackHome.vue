<template>
  <router-link to="/" class="back-home">
    <img src="@/assets/images/home.png" alt="" />
    <div class="text">首页</div>
  </router-link>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.back-home {
  position: absolute;
  right: 1.5vw;
  top: 1.5vh;
  width: 4vw;
  height: 4vw;
  background-color: transparent;
  transition: all 0.3s;
  cursor: pointer;
  img {
    width: 100%;
  }
}
.back-home:hover {
  transform: rotate(360deg);
}
.text {
  text-align: center;
  margin-left: 0.65vw;
  margin-top: -1vh;
  color: #ddd;
  font-weight: 600;
  text-shadow: 0.1vh 0.2vh 0.9vh rgb(95, 68, 72);
  width: 2.5vw;
  font-size: 0.8vw;
}
</style>
