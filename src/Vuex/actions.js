import { getHomeSwipe, getChildTitle } from '@/api/index'
import { getCategoryLeft } from '@/api/category'
import { getgoodsData1 } from '../api/goodsDetails';
import { Indicator } from 'mint-ui';
import { getSearchlist } from '../api/search'
var actions = {
    async actIndexScrollList(context, data) {
        var result = await getHomeSwipe();
        result = result.data;
        context.commit('changeScrollList', { result, data })
    },
    async getCategoryLeft(context, cid) {
        var result = await getCategoryLeft(cid);
        // console.log(result);
        context.commit('getCategoryLeft', result.data)
    },
    // 商品多个信息
    async getgoodsData(context, object) {
        Indicator.open('加载中...');
        context.goodsData = [];
        var result = await getgoodsData1(object);
        console.log(result.data);
        context.commit('getgoodsData', result.data)
        Indicator.close();
    },
    // 设置搜索数据
    async setsearchlistData(context, data) {
        Indicator.open('加载中...');
        if (context.state.lanfalg) {
            context.state.lanfalg = false;
            var result = await getSearchlist(data)
            if (result.status == 'success') {
                if (data.page > 1) {
                    context.commit('setsearchlistDatainsert', result.data);
                } else if (data.page == 1) {
                    context.commit('setsearchlistData', result.data);
                }
                context.commit('setsearchkeywords', data.keywords)
            }
            Indicator.close();
        }
    },
    //请求首页子路由的数据
    async setIndexChildTitle(context, data) {
        Indicator.open('加载中...');
        var result = await getChildTitle(data);
        context.commit('setIndexChildTitle', result.data)
        console.log(result.data);
        Indicator.close();
    },
};
export default actions 