export default {
  title: {
    text: '稀有动物关注度',
    // subtext: '等级分布',
    top: 5,
    left: 'center'
  },
  series: [
    {
      type: 'wordCloud',
      gridSize: 14,
      sizeRange: [15, 60],
      shape: 'circle',
      rotationRange: [0, 35],
      // rotationStep: 60,
      layoutAnimation: true,
      textStyle: {
        normal: {
          color: () => {
            const r = Math.floor(Math.random() * this.wordCloudColor.length)
            return this.wordCloudColor[r]
          }
        }
      },
      width: '90%',
      height: '75%',
      //数据
      data: [
        { name: '大熊猫', value: '10.53' },
        { name: '东北虎', value: '9.53' },
        { name: '川金丝猴', value: '9.03' },
        { name: '华南虎', value: '8.83' },
        { name: '藏羚羊', value: '8.53' },
        { name: '梅花鹿', value: '8.13' },
        { name: '麋鹿', value: '7.73' },
        { name: '扬子鳄', value: '6.53' },
        { name: '雪豹', value: '6.13' },
        { name: '长臂猿', value: '3.53' },
        { name: '儒艮', value: '7.43' },
        { name: '四爪陆龟', value: '6.23' },
        { name: '大鲵', value: '9.30' },
        { name: '玳瑁', value: '4.79' },
        { name: '红腹角雉', value: '5.83' },
        { name: '中华沙丘鸭', value: '3.83' },
        { name: '朱鹮', value: '5.43' },
        { name: '丹顶鹤', value: '7.73' },
        { name: '白鹤', value: '6.65' }
      ]
    }
  ]
}
