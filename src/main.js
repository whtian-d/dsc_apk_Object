import Vue from 'vue'
import App from './App.vue'
import store from '@/Vuex/store.js'
// 导入router 模块
import router from './router/index.js';
Vue.config.productionTip = false
// 导入ly-tab模块
import LyTab from 'ly-tab';
Vue.use(LyTab)
// 导入mint-ui模块并使用
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
// 使用图片懒加载
// import VueLazyload from 'vue-lazyload';
// Vue.use(VueLazyload, {
//     preLoad: 1.3,
//     error: '../public/timg.gif',
//     loading: '../public/loading.jpg',
//     attempt: 1
// })

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')