import api from '../../api/productDetail';
let AppConfig = JSON.parse(sessionStorage.getItem('appConfig'));
let cartDetail = JSON.parse(localStorage.getItem('shopCar'));//获取购物车详细信息
let carNum = 0;
//有本地存储时获取本地存储中购物车的数量
for (var i in cartDetail) {
  for (var j in cartDetail[i].productList) {
    carNum += cartDetail[i].productList[j].qty;
  }
}
const state = {
  shopName: "",//门店名
  shopNo: "",//门店编号
  productInfo: null,//扫码回来的基本信息
  productInfoShopList: null,
  openSelectShop: true,
  productDetail: null,
  AppConfig: AppConfig,
  curProductDetail: {},//当前页面渲染的详情
  imgs: {},
  sizes: null,
  curSize: {},
  qty: 1,
  maxQty: 0,
  pageNo: 1,//换一批分页
  isCurItemNo: AppConfig.itemNo,//初始化itemNo,
  isCurSizeIndex: 0,//默认选中第一个尺码
  reCommends: [],//你可能喜欢数据
  total: 0,//换一批总数
  fab: null,
  cartNum: cartDetail ? carNum : 0,//购物车数量
  showFab: false,//是否显示fab按钮
  comment: {},//评论
  showNotice: false,//显示到货通知
  showMsg: false,//是否已经开启到货通知
  noFindSmallImg: 'this.src="' + require('./../../assets/images/smallshoes.jpg') + '"',//未找到鞋小图
  noFindBigImg: 'this.src="' + require('./../../assets/images/bigshoes.jpg') + '"',//未找到鞋大图
  noFindHeadImg: 'this.src="' + require('./../../assets/images/icon_head.png') + '"',//未找到头像
};
const mutations = {
  shopName(state, shopName){
    state.shopName = shopName;
  },
  shopNo(state, shopNo){
    state.shopNo = shopNo;
  },
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
  },
  imgs(state, imgs){
    state.imgs = imgs;
  },
  sizes(state, sizes){
    state.sizes = sizes
  },
  //当前选中的颜色
  curSize(state, index){
    console.log('index',index)
    state.curSize = state.sizes[index];
  },
  qty(state, qty){
    state.qty = qty;
  },
  //处理数量加
  addQty(state, qty){
    let max = state.curSize.availableQty >= state.curSize.neighbourQty ? state.curSize.availableQty : state.curSize.neighbourQty;
    if (max > 1 && qty < max) {
      state.qty++
    }
  },
  //处理数量减
  addQty(state, qty){
    let max = state.curSize.availableQty >= state.curSize.neighbourQty ? state.curSize.availableQty : state.curSize.neighbourQty;
    if (max > 1 && qty < max) {
      state.qty++
    }
  },
  minusQty(state, qty){
    if (qty > 1) {
      state.qty--
    }
  },
  isCurItemNo(state, isCurItemNo){
    state.isCurItemNo = isCurItemNo;
  },
  isCurSizeIndex(state, isCurSizeIndex){
    state.isCurSizeIndex = isCurSizeIndex;
  },
  reCommends(state, reCommends){
    state.reCommends = reCommends;
  },
  total(state, total){
    state.total = total;
  },
  addPageNo(state, n){
    if (n) {
      state.pageNo = 1
    } else {
      state.pageNo++
    }
  },
  fab(state, fab){
    state.fab = fab;
  },
  cartNum(state, cartNum){
    state.cartNum = cartNum;
  },
  cartBackNum(state){//处理购物车返回首页时的数量
    let cartDetail = JSON.parse(localStorage.getItem('shopCar'));//获取购物车详细信息
    let carNum = 0;
//有本地存储时获取本地存储中购物车的数量
    for (var i in cartDetail) {
      for (var j in cartDetail[i].productList) {
        carNum += cartDetail[i].productList[j].qty;
      }
    }
    state.cartNum = carNum;
  },
  showFab(state, showFab){
    state.showFab = showFab;
  },
  comment(state, comment){
    state.comment = comment;
  },
  showNotice(state, showNotice){
    state.showNotice = showNotice;
  },
  showMsg(state, showMsg){
    state.showMsg = showMsg;
  }
};
const getters = {
  shopName: state => state.shopName,
  productDetail: state => state.productDetail,
  AppConfig: state => state.AppConfig,
  curProductDetail: state => state.curProductDetail,
  imgs: state => state.imgs,
  sizes: state => state.sizes,
  curSize: state => state.curSize,
  qty: state => state.qty,
  maxQty: state => state.curSize.availableQty > state.curSize.neighbourQty ? state.curSize.availableQty : state.curSize.neighbourQty,
  isCurItemNo: state => state.isCurItemNo,
  isCurSizeIndex: state => state.isCurSizeIndex,
  reCommends: state => state.reCommends,
  fab: state => state.fab,
  showFab: state => state.showFab,
  comment: state => state.comment,
  showNotice: state => state.showNotice
};
const actions = {
  getProductInfo ({commit, state}, obj) {
    return new Promise((resolve) => {
      api.getProductInfo(state.AppConfig.basePATH, {
        itemNo: obj && obj.obj ? obj.obj.itemNo : state.productInfo.itemNo,
        shopNo: state.shopNo,
        styleNo: obj && obj.obj ? obj.obj.styleNo : state.productInfo.styleNo,
        zoneNo: state.productInfo.zoneNo,
        brandNo: state.AppConfig.brandNo
      }).then(res => {
        commit("productDetail", res.data || []);
        commit("getCurProductDetail", obj && obj.obj ? obj.obj.itemNo : state.AppConfig.itemNo);
        commit("isCurItemNo", obj && obj.obj ? obj.obj.itemNo : AppConfig.itemNo);
        resolve();//使用resolve传值解决异步传值为undefined问题
      })
    })
  },
  getImgs({commit, state}){
    return new Promise((resolve) => {
      api.getImgs(state.AppConfig.basePATH, {
        itemNo: state.curProductDetail.itemNo,
        shopNo: state.shopNo,
        code: state.curProductDetail.code,
        brandNo: state.AppConfig.brandNo,
      }).then(res => {
        if (res.errorCode != 0) return;
        commit("imgs", res.data || {});
        resolve();
      })
    })
  },
  getSize({commit, state}, obj){
    return new Promise((resolve) => {
      api.getSize(state.AppConfig.basePATH, {
        itemNo: state.curProductDetail.itemNo,
        shopNo: state.shopNo,
        shardingFlag: state.productInfo.shardingFlag,
        organTypeNo: state.productInfo.organTypeNo
      }).then(res => {
        commit("sizes", res.data || []);
        commit("curSize",state.isCurSizeIndex);
        commit("isCurSizeIndex", 0);
        resolve();
      })
    })
  },
  getRecommend({commit, state}){
    return new Promise((resolve) => {
      api.getRecommend(state.AppConfig.basePATH, {
        itemNo: state.curProductDetail.itemNo,
        brandNo: state.AppConfig.brandNo,
        shopNo: state.shopNo,
        years: state.curProductDetail.years,
        categoryNo: state.curProductDetail.categoryNo,
        season: state.curProductDetail.purchaseSeason,
        zoneNo: state.productInfo.zoneNo,
        gender: state.curProductDetail.gender,
        organTypeNo: state.productInfo.organTypeNo,
        pageNo: state.pageNo,
        pageSize: 3,
      }).then(res => {
        commit("reCommends", res.data.result || []);
        commit("total", res.data.total);
        resolve();
      })
    })
  },
  getFab({commit, state}){
    api.getFab(state.AppConfig.basePATH, {
      itemNo: state.curProductDetail.itemNo,
    }).then(res => {
      if (res.data && (res.data.fList || res.data.aList || res.data.bList || res.data.seriesList || res.data.brandStoryList || res.data.fPicUrl || res.data.aPicUrl || res.data.bPicUrl || res.data.seriesPicUrl || res.data.storyPicUrl)) {
        commit("fab", res.data);
        commit("showFab", true);
      } else {
        commit("showFab", false);
      }
    })
  },
  getComment({commit, state}){
    api.getComment(state.AppConfig.basePATH, {
      pageNo: 1,
      pageSize: 10,
      productCodes: state.curProductDetail.code,
      starLowerLimit: 3,
      evaluationLengthLowerLimit: 0,
    }).then(res => {
      commit("comment", res.data || {});
    })
  },
  setNotice({commit, state}, obj){
    api.setNotice(state.AppConfig.basePATH, obj.productDetail).then(res => {
      if (res.errorCode == 0) {
        commit("showMsg", true);
        obj.callback(res.data);
      }
    })
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
