import { getAnimalLevel } from '@/utils/request.js'
export const getLevelData = async () => {
  const { data } = await getAnimalLevel()
  const keys = Object.keys(data)
  const values = Object.values(data)

  const option = {
    title: {
      text: '全国保护动物',
      subtext: '等级分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: '5%',
      left: '5%',
      data: [keys[0], keys[1]]
    },
    series: [
      {
        type: 'pie',
        radius: '74%',
        center: ['50%', '55%'],
        selectedMode: 'single',
        data: [
          { value: [values[0]], name: keys[0] },
          { value: [values[1]], name: keys[1] }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  return option
}

// getData()

// export default {
//   title: {
//     text: 'Weather Statistics',
//     subtext: 'Fake Data',
//     left: 'center'
//   },
//   tooltip: {
//     trigger: 'item',
//     formatter: '{a} <br/>{b} : {c} ({d}%)'
//   },
//   legend: {
//     bottom: '10%',
//     left: 'center',
//     data: ['一级', '二级', '三级', '四级']
//   },
//   series: [
//     {
//       type: 'pie',
//       radius: '65%',
//       center: ['50%', '45%'],
//       selectedMode: 'single',
//       data: [
//         { value: 735, name: '一级' },
//         { value: 510, name: '二级' },
//         { value: 434, name: '三级' },
//         { value: 335, name: '四级' }
//       ],
//       emphasis: {
//         itemStyle: {
//           shadowBlur: 10,
//           shadowOffsetX: 0,
//           shadowColor: 'rgba(0, 0, 0, 0.5)'
//         }
//       }
//     }
//   ]
// }
