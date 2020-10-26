import ajax from './ajax';
const base_url = '/api'
export const getgoodsDetailsData = (id) => ajax(base_url + '/goods/show', {
    goods_id: id,
    warehouse_id: 0,
    area_id: 0,
    is_delete: 0,
    is_on_sale: 1,
    is_alone_sale: 1,
}, 'post')
// 获取商铺的信息
export const getShopdata = (ru_id) => ajax(base_url + '/shop/shopdetail', {
    ru_id
}, 'post')
// 获得goodslist的内容
export const getgoodsData1 = (obj) => ajax(base_url + '/catalog/goodslist', {
    cat_id: obj.id,
    warehouse_id: 0,
    area_id: 0,
    goods_num: 0,
    size: 10,
    page: obj.page,
    // sort: " goods_id",
    sort: obj.sort,
    // order: "desc",
    order: obj.order,
    self: 0,
}, 'post')