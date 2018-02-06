import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  // 定义状态
  state: {
    count: 1
  },
  mutations:{
    increment(state,n){
      state.count+=n
    }
  }
})
export default store;
