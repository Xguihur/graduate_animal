<template>
  <div class="number-box">
    <div class="data-title">保护动物总类数:</div>
    <ul class="number">
      <!-- 最多容纳八个数字,超过就撑开盒子了 -->
      <!-- <li v-for="item in (1, 7)">{{ item }}</li> -->
     
      <li>9</li>
      <li>8</li>
      <li>4</li>
      <!-- <li>(</li> -->
      <li>类</li>
      <!-- <li>)</li> -->
    </ul>
    <!-- <el-statistic class="number" :value="9850067"> </el-statistic> -->
  </div>
</template>
<script setup></script>
<style lang="less" scoped>
ul,
li {
  padding: 0;
  margin: 0;
}
.data-title {
  // font-size: 16px;
  color: #ddd;
  // color: rgb(210, 174, 142);
  font-weight: 600;
  font-size: 1.15vw;
  cursor: default;
  text-shadow: 0.1vh 0.2vh 0.9vh rgb(95, 68, 72);
  // background-color: #fff;
}
.number-box {
  cursor: default;

  .number {
    text-align: center;
    font-size: 30px !important;
    // background-color: #2c9bc3;
    border-radius: 0.5vw;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vh 2vh;
    margin: 2.5vh 3vh 3vh;
    background: linear-gradient(to right, #62a0b6ba, #56a6c39d);

    > li {
      flex: 1;
      max-width: 5vh;
      margin-right: 1vw;
      border-radius: 1vh;
      color: #fdfdfb;
      // background-color: rgb(230, 218, 218);
      background-color: rgb(235, 203, 174);
      box-shadow: 0.1vh 0.1vh 0.8vh rgb(168, 165, 165);
      text-shadow: 0.1vh 0.2vh 0.3vh rgb(159, 144, 146);
    }
    > li:nth-last-child(1) {
      margin-right: 0;
    }
  }
}
</style>
