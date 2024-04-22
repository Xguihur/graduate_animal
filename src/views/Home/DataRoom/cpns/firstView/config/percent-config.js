import { getAnimalProvince } from '@/utils/request.js'
export const getDataPrince = async () => {
  const { data } = await getAnimalProvince()
  const keys = Object.keys(data)
  const values = Object.values(data)
  const dataArr = []
  for (let i = 0; i < keys.length; i++) {
    dataArr.push({ value: values[i], name: keys[i] })
  }
  // console.log(data)
  return {
    tooltip: {
      trigger: 'item'
    },
    // legend: {
    //   top: '0%',
    //   left: 'center'
    // },
    series: [
      {
        name: '数量：',
        type: 'pie',
        radius: ['30%', '80%'],
        center: ['53%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 70,
            fontWeight: 'bold'
          },
          scaleSize: 20
        },
        labelLine: {
          show: false
        },
        data: dataArr
      }
    ]
  }
}
// getDataPrince()
