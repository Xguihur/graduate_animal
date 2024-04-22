import * as echarts from 'echarts'
import { ref } from 'vue'

import { getAllCategory, getAnimalDetail } from '@/utils/request.js'

export const initTreeData = async (element) => {
  if (element) {
    let option
    const myChart = echarts.init(element)
    // let animalDetail = ref()
    // let isShowModel = ref(false)

    // 获取 data 渲染 树
    myChart.showLoading()
    const { data: Mydata } = await getAllCategory()
    const data = {
      name: '动物分支',
      children: Mydata
    }
    data.children.forEach(function (datum, index) {
      index % 2 === 0 && (datum.collapsed = true)
    })
    myChart.setOption(
      (option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'tree',
            data: [data],
            top: '0%',
            left: '10%',
            bottom: '0%',
            right: '18%',
            symbolSize: 7,
            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 13
            },
            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            },
            emphasis: {
              focus: 'descendant'
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      })
    )
    option && myChart.setOption(option)
    window.addEventListener('resize', () => {
      myChart.resize()
    })

    // 事件监听，同时导出 ref 数据
    //以下为文希加的代码
    // myChart.on('click', function (param) {
    //   if (param.event.target.culling === true) {
    //     return
    //   } else if (param.event.target.culling === false) {
    //     // console.log(param.data)
    //     // console.log(param.data.children)
    //     if (!('children' in param.data)) {
    //       // console.log('最后一个节点啦')
    //       getAnimalDetail(param.data.name).then((res) => {
    //         animalDetail.value = res.data
    //         isShowModel.value = true
    //         console.log(animalDetail.value)
    //       })
    //     }
    //   }
    // })

    //文希代码结束
    myChart.hideLoading()

    // 返回 数据和模态框控制变量 出去
    // return { animalDetail, isShowModel }
    return myChart
  }
}
