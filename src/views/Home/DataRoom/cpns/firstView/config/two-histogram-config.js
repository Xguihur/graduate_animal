import { getAnimalProvinceLevel } from '@/utils/request.js'

const getPrinceLevel = async () => {
  const { data } = await getAnimalProvinceLevel()
  const keys = Object.keys(data)
  const values1 = [] //一级
  const values2 = [] //二级
  const arrData = Array.from(Object.values(data), (x) => x) //这个转化还不太会是什么意思,好赶都来不及慢慢品尝了
  // console.log(arrData)
  for (let item of arrData) {
    // 我开摆了,我不用 keys\values 去转化了,就中文 淦
    values1.push(item.一级)
    values2.push(item.二级)
  }

  // console.log(values1)
  // console.log(values2)

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
