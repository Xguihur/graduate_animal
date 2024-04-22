// 尝试能不能做成一个很强的hooks  传一个参数 data，包含标题和内容
import { reactive, ref } from 'vue'
const getLevelOption = (data) => {
  const title = data.title ?? '纲下数据'
  // const option = reactive({})
  return {
    title: {
      text: title,
      left: 0,
      top: 10
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '1%',
      left: 'center',
      itemWidth: 14,
      itemHeight: 12
    },
    series: [
      {
        name: '名录更新',
        type: 'pie',
        radius: ['40%', '75%'],
        avoidLabelOverlap: false,
        center: ['50%', '45%'],
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '新增国家二级' },
          { value: 735, name: '原国家二级' },
          { value: 580, name: '新增国家一级' },
          { value: 484, name: '原国家一级' }
        ]
      }
    ]
  }
  // return option
}

export { getLevelOption }
