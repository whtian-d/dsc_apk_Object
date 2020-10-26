import Vue from 'vue'
import VueX from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(VueX);
const store = new VueX.Store({
    state,
    mutations,
    actions,
    getters,
})
export default store