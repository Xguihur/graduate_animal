import { computed } from 'vue'
// 将一个数组转化为上下两层

const filterData = (sorceData) => {
  const resultArr = computed(() => {
    const arrRes = []
    // const obj = {}//如果放在外面就和内部循环用var定义的意思一样了，循环结束最后push的都是最后一个 obj
    for (let i = 0; i < sorceData.length; i++) {
      const obj = {}
      obj.top = sorceData[i]
      // 这里已经自增了一遍了
      if (++i < sorceData.length) {
        obj.bottom = sorceData[i]
      }
      arrRes.push(obj)
    }
    return arrRes
  })
  return resultArr
}
export { filterData }
// --------------------------------
// 原本的写法：
// const res = computed(() => {
//   // return data1.filter((item, index) => {
//   //   index % 2 === 0
//   // })
//   const arrRes = []
//   // const obj = {}//如果放在外面就和内部循环用var定义的意思一样了，循环结束最后push的都是最后一个 obj
//   for (let i = 0; i < data1.length; i++) {
//     const obj = {}
//     obj.top = data1[i]
//     // 这里已经自增了一遍了
//     if (++i < data1.length) {
//       obj.bottom = data1[i]
//     }
//     arrRes.push(obj)
//   }
//   return arrRes
//   // bottom: data1.filter((item, index) => index % 2 === 1)
//   console.log(res.value)
// })
