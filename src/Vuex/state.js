const state = {
    isSuccess: false,
    leftdata: [],
    rightdata: [],
    scrollList: [],
    scrollUlW: '',
    categoryListData: [],
    isLogin: false,
    indexColors: [],
    goodsDetailsData: [],//商品详情页信息
    shopsData: [],//商铺信息
    goodsData: [],//商品信息
    carts: localStorage['carts'] ? JSON.parse(localStorage['carts']) : {},
    isSelectAll: localStorage['isSelectAll'] ? JSON.parse(localStorage['isSelectAll']) : true,
    searchlistData: [],//搜索列表数据
    searchkeywords: localStorage['searchkeywords'] ? JSON.parse(localStorage['searchkeywords']) : [],
    lanfalg: true,
    IndexChildTitle: [],//首页子路由头部
    selectNUll: false,//搜索无数据开关
    IndexSwiperdata: [],//轮播图数据
    swipercolor: '',//轮播图上面颜色
    swiperlistdata: [],//轮播列表数据
    indexshopsdata: [],//首页商铺数据
}
export default state