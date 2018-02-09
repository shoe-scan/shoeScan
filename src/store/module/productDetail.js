let AppConfig = JSON.parse(sessionStorage.getItem('appConfig'));
const state = {
  initItemNo: true,//是扫码进来的itemNo
  shopName: "",//门店名
  shopNo: "",//门店编号
  productInfo: null,//扫码回来的基本信息
  productInfoShopList: null,
  openSelectShop: true,
  productDetail: null,
  AppConfig: AppConfig,
  curProductDetail: null,//当前页面渲染的详情
  corIsActive: false,
};
const mutations = {
  selectShop(state, params){
    state.openSelectShop = false;
    state.shopNo = params.shopNo;
    state.shopName = params.shortName;
  },
  productDetail(state, productDetail){
    state.productDetail = productDetail;
  },
  getCurProductDetail(state, itemNo){
    state.productDetail.filter(function (product) {
      if (itemNo == product.itemNo) {
        state.curProductDetail = product;
      }
    })
  }
};
const getters ={
  shopName: state => state.shopName,
  productDetail: state => state.productDetail,
  AppConfig: state => state.AppConfig,
  curProductDetail: state => state.curProductDetail,
}
export default {
  state,
  getters,
  mutations
}
