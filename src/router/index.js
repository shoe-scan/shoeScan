import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index';
import Cart from '../pages/cart';//购物车
import ProductList from '../pages/productList';//商品列表
import NearShop from '../pages/nearShop';//附近门店
import SelectShop from '../pages/selectShop';//请选择店铺


Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/nearShop',
      name: 'nearShop',
      meta:{
        title:"附近门店",
      },
      component: NearShop
    },
    {
      path: '/productList',
      name: 'productList',
      meta:{
        title:"你可能喜欢",
      },
      component: ProductList
    },
    {
      path: '/cart',
      name: 'cart',
      meta:{
        title:"购物车",
      },
      component: Cart
    },
    {
      path: '/selectShop',
      name: 'selectShop',
      meta:{
        title:"选择店铺",
      },
      component: SelectShop
    },
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title;
  }else{
    document.title = "";
  }
  if(to.name=="selectShop"){
    router.replace("/");//刷新回到首页
  }
  next()
})
router.afterEach((to, fram, next) => {
  window.scrollTo(0, 0)
})
export default router;
