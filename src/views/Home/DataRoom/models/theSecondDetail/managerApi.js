// 管理接口
import { getAllCategory } from '@/utils/request.js'

const getAnimaData = async () => {
  const { data } = await getAllCategory()
  // const keys = Object.keys(data)
  // const values = Object.values(data)
  console.log(data)
  // return data
}
getAnimaData()
