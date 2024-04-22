export default {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '哺乳纲',
        '肠鳃纲',
        '腹足纲',
        '昆虫纲',

        '鸟纲',
        '爬行纲',
        '软骨鱼纲',
        '软甲纲',
        '珊瑚纲',
        '双壳纲',
        '水螅纲',
        '头足纲',
        '鱼纲',
        '圆口、肢口纲',
        '肢口纲',
        '蛛形纲',
        '两栖纲'
      ],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '数量',
      type: 'bar',
      barWidth: '60%',
      data: [
        265, 73, 95, 125, 168, 94, 44, 61, 89, 45, 150, 53, 183, 55, 81, 394
      ]
    }
  ],
  grid: [
    // 可以设置表格的位置，上下左右移动一下
    {
      left: '10%',
      bottom: '30%',
      top: '11%',
      right: '1%'
    }
  ]
}
