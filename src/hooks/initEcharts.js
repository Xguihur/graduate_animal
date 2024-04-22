import * as echarts from 'echarts'

class EchartTools {
  constructor(element, option) {
    this.myChart = null //定义一个类成员
    this.initEcharts(element, option)
  }
  // 监听器
  mylistener = () => {
    this.myChart.resize()
  }
  // 初始化图表
  initEcharts = (element, option) => {
    // drowPercentPie
    if (element) {
      // 这里还需要更加严谨的方式验证 element 的合法性，暂时就不搞了
      this.myChart = echarts.init(element)

      // 进行画图
      option && this.myChart.setOption(option)
      // 添加 resize 事件监听
      window.addEventListener('resize', this.mylistener)
    }
  }
  // 清除resize事件的绑定
  removeRiseze = () => {
    // chart 是挂载事件的对象，就是图标
    // 组件卸载时将事件监听给取消掉， resize 事件，防止内存泄漏和额外 cup 内存占用
    // 为什么不是直接 remove 名字就好了，还要加一个回调函数的吗？这么像发布订阅的那个模式的吗哈哈哈
    // console.log('我正在移除')
    window.removeEventListener('resize', this.mylistener)
  }
  // 刷新数据，重新渲染
  reloadEcharts = (option) => {
    option && this.myChart.setOption(option)
    // 添加 resize 事件监听
    window.addEventListener('resize', this.mylistener)
  }
}
export { EchartTools }
