import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 创建组件
import Cart from '../views/Cart/Cart.vue';
import Home from '../views/Home/Home.vue';
import Category from '../views/Category/Category.vue';
import Mine from '../views/Mine/Mine.vue';
import Search from '../views/Search/Search.vue';
// 引入首页的子组件
import Indexs from '../views/Home/children/Index.vue'
// import Box from '../views/Home/children/Box.vue'
// import Computer from '../views/Home/children/Computer.vue'
import Face from '../views/Home/children/Face.vue'
// import FamilyEle from '../views/Home/children/FamilyEle.vue'
// import House from '../views/Home/children/House.vue'
// import Person from '../views/Home/children/Person.vue'
// import Phone from '../views/Home/children/Phone.vue'

// 分类详情页
import CategoryGoods from '../views/Category/components/categoryGoods.vue'
// 物品详情页
import goodsDetailspage from '../views/Category/components/goodsDetailspage.vue'
// 登录页
import Login from '../views/Login/login.vue'
import Register from '../views/Register/register.vue'
import infologin from '../views/Login/infologin.vue'
// 搜索列表页
import SearchList from '../views/Search/searchList.vue'
const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/cart',
    name: 'cart',
    component: Cart
}, {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
        path: '/home/',
        redirect: '/home/indexs'
    }, {
        path: '/home/indexs',
        component: Indexs,
    }, {
        path: 'box',
        component: Face,
    }, {
        path: 'computer',
        component: Face,
    }, {
        path: 'face',
        component: Face,
    }, {
        path: 'familyele',
        component: Face,
    }, {
        path: 'house',
        component: Face,
    }, {
        path: 'person',
        component: Face,
    }, {
        path: 'phone',
        component: Face,
    },]
}, {
    path: '/category',
    redirect: '/category/858'
}, {
    path: '/category/:cid',
    name: 'category',
    component: Category,
}, {
    path: '/categorygoods/:id',
    component: CategoryGoods,

}, {
    path: '/mine',
    name: 'mine',
    component: Mine,

}, {
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '/register',
    name: 'register',
    component: Register
}, {
    path: '/search',
    name: 'search',
    component: Search
}, {
    path: '/infologin',
    name: 'infologin',
    component: infologin
}, {
    path: '/goodsDetailspage/:id',
    name: 'goodsDetailspage',
    component: goodsDetailspage
}, {
    path: '/searchlist',
    component: SearchList
}]
const router = new VueRouter({
    routes
})
// 暴露出去
export default router