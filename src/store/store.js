import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import productDetail from './module/productDetail';
import productList from './module/productList';
import nearShop from './module/nearShop';
import cart from './module/cart';
const store = new Vuex.Store({
  modules:{
    productDetail,
    productList,
    nearShop,
    cart
  },
})
export default store;
