export default {
  // title: {
  //   text: 'Rainfall vs Evaporation',
  //   subtext: 'Fake Data'
  // },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['所有', '物种', '种下单元'],
    top: '0%'
  },
  toolbox: {
    show: true,
    feature: {
      // dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true }
      // saveAsImage: { show: true }
    },
    top: '-3%'
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      // prettier-ignore
      data: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '所有',
      type: 'bar',
      data: [
        49574, 49434, 60688, 65690, 70596, 76462, 79792, 83290, 86575, 92301,
        98317, 106509, 122280, 127950, 138293
      ]
    },
    {
      name: '物种',
      type: 'bar',
      data: [
        44159, 44185, 54823, 59531, 62067, 66708, 69920, 73255, 76487, 80390,
        86203, 94260, 110231, 115064, 125034
      ]
    },
    {
      name: '种下单元',
      type: 'bar',
      data: [
        5388, 5249, 5865, 6159, 8529, 9754, 9872, 10035, 10088, 11911, 12114,
        12249, 12049, 12886, 13259
      ]
      // markPoint: {
      //   data: [
      //     { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 }
      //     { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
      //   ]
      // }
      // markLine: {
      //   data: [{ type: 'average', name: 'Avg' }]
      // }
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
