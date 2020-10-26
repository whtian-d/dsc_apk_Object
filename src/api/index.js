import ajax from '../api/ajax'
//定义一个全局变量--全局路径
const Base_URL = "/api"
//请求数据

//首页轮播图
export const getHomeSwipe = () => ajax(Base_URL + "/visual/visual_team_goods")
export const getChildTitle = (cat_id) => ajax(Base_URL + '/visual/visual_second_category', { cat_id })