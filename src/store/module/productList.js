import productList from '../../api/productList';
import {Indicator,MessageBox} from 'mint-ui'
let AppConfig = JSON.parse(sessionStorage.getItem('appConfig'));
const state = {
  AppConfig: AppConfig,
  productList: [],
  pageNo:1,
  total:0,//总条数
};
const mutations = {
  productList(state, productList){
    state.productList = productList;
  },
  pushProductList(state,productList){
    state.productList.push(...productList);
  },
  total(state,total){
    state.total = total;
  }
};
const getters = {
  productList: state => state.productList,
};
const actions = {
  getProductList ({commit, state}, params) {
    productList.getProductList(state.AppConfig.basePATH, params).then(res => {
      if(res.errorCode!=0){
        Indicator.close();
        MessageBox('提示',res.errorMessage);
        return;
      }
      //第一页
      if(params.pageNo==1){
        commit("productList", res.data.result || []);
        commit("total",res.data.total);
      }else{
        commit("pushProductList",res.data.result || [])
      }
    })
  },
};
export default {
  state,
  getters,
  mutations,
  actions
};
