import { getAnimalProvinceLevel } from '@/utils/request.js'

const getPrinceLevel = async () => {
  const { data } = await getAnimalProvinceLevel()
  const keys = Object.keys(data) //省份名称
  const values1 = [] //一级
  const values2 = [] //二级
  keys.forEach((item) => {
    values1.push(data[item].level1)
    values2.push(data[item].level2)
  })

  return {
    title: {
      text: '各省保护动物',
      // subtext: '等级分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      top: 25
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: keys //表示各个省的名字
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '一级保护动物', //维度，表示一级保护动物
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: values1 //一级保护动物各个省的数据
      },
      {
        name: '二级保护动物', //另一个维度，比如二级保护动物
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: values2
      }
    ]
  }
}
export { getPrinceLevel }

// getAnimaData()

// export default {
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'shadow'
//     }
//   },
//   legend: {},
//   grid: {
//     left: '3%',
//     right: '4%',
//     bottom: '3%',
//     containLabel: true
//   },
//   xAxis: [
//     {
//       type: 'category',
//       data: keys //表示各个省的名字
//     }
//   ],
//   yAxis: [
//     {
//       type: 'value'
//     }
//   ],
//   series: [
//     {
//       name: 'Bing', //维度，表示一级保护动物
//       type: 'bar',
//       stack: 'Search Engine',
//       emphasis: {
//         focus: 'series'
//       },
//       data: [60, 72, 71, 74, 190, 130, 110] //一级保护动物各个省的数据
//     },
//     {
//       name: 'Others', //另一个维度，比如二级保护动物
//       type: 'bar',
//       stack: 'Search Engine',
//       emphasis: {
//         focus: 'series'
//       },
//       data: [62, 82, 91, 84, 109, 110, 120]
//     }
//   ]
// }
