// import { getAnimalProvinceLevel } from '@/utils/request.js'

// const getPrinceLevel = async () => {
//   const { data } = await getAnimalProvinceLevel()
//   const keys = Object.keys(data)
//   const values1 = [] //一级
//   const values2 = [] //二级
//   const arrData = Array.from(Object.values(data), (x) => x) //这个转化还不太会是什么意思,好赶都来不及慢慢品尝了
//   // console.log(arrData)
//   for (let item of arrData) {
//     // 我开摆了,我不用 keys\values 去转化了,就中文 淦
//     values1.push(item.一级)
//     values2.push(item.二级)
//   }

//   // console.log(values1)
//   // console.log(values2)

//   return {
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'shadow'
//       }
//     },
//     legend: {},
//     grid: {
//       left: '3%',
//       right: '4%',
//       bottom: '3%',
//       containLabel: true
//     },
//     xAxis: [
//       {
//         type: 'category',
//         data: keys //表示各个省的名字
//       }
//     ],
//     yAxis: [
//       {
//         type: 'value'
//       }
//     ],
//     series: [
//       {
//         name: '一级保护动物', //维度，表示一级保护动物
//         type: 'bar',
//         stack: 'Search Engine',
//         emphasis: {
//           focus: 'series'
//         },
//         data: values1 //一级保护动物各个省的数据
//       },
//       {
//         name: '二级保护动物', //另一个维度，比如二级保护动物
//         type: 'bar',
//         stack: 'Search Engine',
//         emphasis: {
//           focus: 'series'
//         },
//         data: values2
//       }
//     ]
//   }
// }
// export { getPrinceLevel }

// getAnimaData()

export default {
  title: {
    text: '哺乳纲',
    left: 0,
    top: -0
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    right: 0,
    top: 10
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '2%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '灵长目',
        '鳞甲目',
        '食肉目',
        '长鼻目',
        '奇蹄目',
        '偶蹄目',
        '啮齿目',
        '兔形目',
        '海牛目',
        '鲸目'
      ] //表示各个目的名字
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '一级', //维度，表示一级保护动物
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [23, 3, 19, 1, 3, 34, 1, 0, 1, 14] //一级保护动物各个省的数据
    },
    {
      name: '二级', //另一个维度，比如二级保护动物
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [6, 0, 19, 27, 0, 0, 20, 1, 6, 26]
    }
  ]
}
