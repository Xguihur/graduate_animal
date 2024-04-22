export default {
  xAxis: {
    type: 'category',
    data: [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
      'dsa',
      'fsd',
      'fdsa',
      'sa',
      'wfd',
      'okh'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130, 233, 342, 123, 90, 342, 123],
      type: 'bar'
    }
  ],
  grid: [
    // 可以设置表格的位置，上下左右移动一下
    {
      left: '10%',
      bottom: '30%',
      top: '5%',
      right: '1%'
    }
  ]
}
