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
      'dev',
      'kin',
      'dis',
      'ccb',
      'skx',
      'dsa',
      'sbx'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        150, 430, 224, 278, 195, 447, 360, 234, 434, 342, 153, 325, 234, 521
      ],
      type: 'line'
    }
  ],
  grid: [
    {
      left: '10%',
      bottom: '30%',
      top: '5%',
      right: '1%'
    }
  ]
}
