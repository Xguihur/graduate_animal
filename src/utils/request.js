import axios from './axios'
let { get, post } = axios
//获取各省份对应动物接口
export const getProvinceAnimals = (data) => get(`/direction/${data}`)
// 获取具体动物接口
export const getAnimalDetail = (data) => get(`/animal_detail/${data}`)
// 获取保护动物等级
export const getAnimalLevel = () => get(`/level_animalcount`)
// 获取保护动物数量 -- 省级
export const getAnimalProvince = () => get(`/province_animalcount`)
// 获取保护动物数量与级别 -- 省级
export const getAnimalProvinceLevel = () => get(`/perprovinceanimalcount`)
// 获取所有保护动物门纲目科的分类
export const getAllCategory = () => get(`/animaltree`)
// 获取纲和细节
export const getAllDetail = () => get(`order_desc/getalldesc`)
// 获取纲的左上的数据
export const getAllGang = (name) => get(`/getChange/${name}`)
// 获取纲的左下的数据
export const getLevelGang = (name) => get(`/getOrderLevelCount/${name}`)
