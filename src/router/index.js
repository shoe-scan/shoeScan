import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const Index = () => import('../pages/index'); //商品首页
const Cart = () => import('../pages/cart'); //购物车
const ProductList = () => import('../pages/productList'); //商品列表
const NearShop = () => import('../pages/nearShop'); //附近门店
const SelectShop = () => import('../pages/selectShop'); //请选择店铺
const Fab = () => import('../pages/fab'); //特征与故事

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
      meta: {
        title: "附近门店",
      },
      component: NearShop
    },
    {
      path: '/productList',
      name: 'productList',
      meta: {
        title: "你可能喜欢",
      },
      component: ProductList
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {
        title: "购物车",
      },
      component: Cart
    },
    {
      path: '/selectShop',
      name: 'selectShop',
      meta: {
        title: "选择店铺",
      },
      component: SelectShop
    },
    {
      path: '/fab',
      name: 'fab',
      meta: {
        title: "特征与故事",
      },
      component: Fab
    },
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title;
  } else {
    document.title = "";
  }
  /*if (to.name == "selectShop") {
   router.replace("/");//刷新回到首页
   }*/
  next();
})
router.afterEach((to, fram, next) => {
  if (to.name == "index" && fram.name == "cart") {
    router.app.$options.store.commit("cartBackNum");//处理购物车返回首页时的数量
  }
  window.scrollTo(0, 0)
})
export default router;
