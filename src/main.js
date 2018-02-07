// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import {Swipe, SwipeItem, Cell, TabContainer, TabContainerItem, Navbar, TabItem, Badge} from 'mint-ui';
import "mint-ui/lib/style.min.css";
import './assets/css/common.css';

Vue.use(Vuex);
import store from './store/store';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Badge.name, Badge);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
