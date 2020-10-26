import ajax from '../api/ajax';
//定义一个全局变量--全局路径
const Base_URL = "/api"
//请求数据

//
export const getCategoryLeft = (cid) => ajax(Base_URL + "/catalog/list/" + cid)

