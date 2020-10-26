import ajax from './ajax';
const base_url = '/api'
export const getSearchlist = (params) => ajax(base_url + '/catalog/goodslist', params, 'post')