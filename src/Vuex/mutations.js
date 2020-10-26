import { MessageBox } from 'mint-ui';
const mutations = {
    changerightdata(state, data) {
        state.rightdata = data
    },
    changeScrollList(state, data) {
        state.scrollList = data.result,
            state.scrollUlW = data.data * data.result.length;
    },
    getCategoryLeft(state, data) {
        state.leftdata = data
    },
    isLogin(state) {
        state.isLogin = !state.isLogin
    },
    getgoodsDetailsData(state, data) {
        state.goodsDetailsData = data
    },
    getshopsData(state, data) {
        state.shopsData = data
    },
    getgoodsData(state, data) {
        state.goodsData = data;
        state.isSuccess = true;
    },
    setdescory(state) {
        state.isSuccess = false;
    },
    // 添加购物车数据
    setCarts(state, data) {
        if (!state.carts[data.keys]) {
            state.carts[data.keys] = {};
            state.carts[data.keys].shopSelectAll = true;
            state.carts[data.keys]['data'] = [];
            state.carts[data.keys]['data'].push(data.obj);
        } else {
            var iscunzai = state.carts[data.keys].data.findIndex(item => {
                return item.goods_id == data.obj.goods_id
            })
            // 如果店铺内有这个商品
            if (iscunzai != -1) {
                state.carts[data.keys]['data'][iscunzai].num++
            } else {
                state.carts[data.keys]['data'].push(data.obj)
            }
        }
        console.log(state.carts);
        localStorage['carts'] = JSON.stringify(state.carts);//更新本地存储
    },
    // 
    // 
    changeisSelect(state, data) {
        state.carts[data.keys]['data'][data.index].isSelect = !state.carts[data.keys]['data'][data.index].isSelect;
        var shopselectAll = state.carts[data.keys]['data'].every(item => {
            return item.isSelect
        })
        state.carts[data.keys]['shopSelectAll'] = shopselectAll;
        // 判断全选
        var Allselect = Object.values(state.carts).every(shop => {
            return shop.shopSelectAll
        })
        state.isSelectAll = Allselect
        localStorage['isSelectAll'] = JSON.stringify(state.isSelectAll)
        localStorage['carts'] = JSON.stringify(state.carts);//更新本地存储
    },
    // 数量加
    addNum(state, data) {
        state.carts[data.keys]['data'][data.index].num++;
        localStorage['carts'] = JSON.stringify(state.carts);//更新本地存储
    },
    jianNum(state, data) {
        if (state.carts[data.keys]['data'][data.index].num == 1) {
            MessageBox({
                title: '提示',
                message: '亲，最少要购买一个哦！',
                showCancelButton: true
            });
        } else {
            state.carts[data.keys]['data'][data.index].num--;
            localStorage['carts'] = JSON.stringify(state.carts);//更新本地存储
        }
    },
    // 输入框改变函数
    inputChangeNum(state, data) {
        if (state.carts[data.keys]['data'][data.index].num.trim().length == 0) {
            state.carts[data.keys]['data'][data.index].num = '1';
        }
        state.carts[data.keys]['data'][data.index].num = state.carts[data.keys]['data'][data.index].num.replace(/^[0]/, '')
        localStorage['carts'] = JSON.stringify(state.carts);//更新本地存储
    },
    dele(state, data) {
        MessageBox.confirm('确定要抛弃该宝贝吗？亲！').then(() => {
            state.carts[data.keys]['data'].splice(data.index, 1);
            localStorage['carts'] = JSON.stringify(state.carts);//更新本地存储
        }, () => {
            return;
        });
    },
    checkSelectAll(state) {
        state.isSelectAll = !state.isSelectAll;
        Object.values(state.carts).forEach(item => {
            item['shopSelectAll'] = state.isSelectAll;
            item['data'].forEach(k => {
                k.isSelect = state.isSelectAll
            })
        })

        localStorage['carts'] = JSON.stringify(state.carts);//更新本地存储
    },
    // 商铺全选函数
    shopSelectAll(state, data) {
        state.carts[data]['shopSelectAll'] = !state.carts[data]['shopSelectAll']
        state.carts[data]['data'].forEach(item => {
            item.isSelect = state.carts[data]['shopSelectAll'];
        })
        // 判断全选
        var Allselect = Object.values(state.carts).every(shop => {
            return shop.shopSelectAll
        })
        state.isSelectAll = Allselect
        localStorage['isSelectAll'] = JSON.stringify(state.isSelectAll)
        localStorage['carts'] = JSON.stringify(state.carts);//更新本地存储
    },
    // 设置搜索列表数据
    setsearchlistData(state, data) {
        state.searchlistData = data;
        if (data.length == 0) {
            state.lanfalg = false;
            state.selectNUll = true;
        } else {
            state.selectNUll = false;
            state.lanfalg = true
        }
    },
    // 设置搜索关键词
    setsearchkeywords(state, data) {
        if (!state.searchkeywords.includes(data)) {
            state.searchkeywords.push(data)
            localStorage['searchkeywords'] = JSON.stringify(state.searchkeywords);//更新本地存储
        }
    },
    setsearchlistDatainsert(state, data) {
        state.searchlistData = state.searchlistData.concat(data);
        if (data.length == 0) {
            state.lanfalg = false
            state.selectNUll = true;
        } else {
            state.selectNUll = false;
            state.lanfalg = true
        }
    },
    delesearchkeywords(state) {
        MessageBox.confirm('确定要清空历史搜索记录吗？亲！').then(() => {
            state.searchkeywords = [];
            localStorage['searchkeywords'] = JSON.stringify(state.searchkeywords);//更新本地存储
        }, () => {
            return;
        });
    },
    setIndexChildTitle(state, data) {
        state.IndexChildTitle = data
    },
    setIndexSwiperdata(state, data) {
        state.IndexSwiperdata = data;
    },
    // 修改轮播图上面颜色
    setswipercolor(state, index) {
        state.swipercolor = state.IndexSwiperdata.list[index].bgColor
    },
    // 设置轮播列表数据
    setswiperlistdata(state, data) {
        state.swiperlistdata = data;
    },
    // 设置首页商铺数据
    setindexshopsdata(state, data) {
        state.indexshopsdata = data
    },
}
export default mutations