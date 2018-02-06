import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index';
// /*import Cart from '../pages/cart';//购物车
// import ProductList from '../pages/productList';//商品列表*/
import NearShop from '../pages/nearShop';//附近门店

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/nearShop',
      name: 'nearShop',
      component: NearShop
    },
  ]
})
