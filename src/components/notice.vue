<template>
  <div class="modal">
    <div class="padding-15-0">
      <div class="size-14 padding-left-20 cor-333 font-weight-bold text-align-l">
        商品到货会通过短信通知您
      </div>
      <div class="cor-666 text-align-l  padding-left-20">
        <span class="size-12">颜色:{{curProductDetail.colorName}}</span>
        <span class="margin-left-15 size-12">尺码:{{curSize.sizeNo}}</span>
      </div>
      <div class="padding-15-0">
        <div class="dis-flex cor-666 padding-left-20 align-item-center">
          <div class="padding-right-15 size-12">购买数量</div>
          <div class="add-minus" :class="{disabled:qty==1}" @click="minusNum">-</div>
          <div class="notice-qty">{{qty}}</div>
          <div class="add-minus" @click="addNum">+</div>
        </div>
        <div class="dis-flex cor-666 padding-left-20 align-item-center padding-top-10">
          <div class="padding-right-15 size-12">手机号码</div>
          <input class="notice-mobile" v-model="mobile" type="tel" maxlength="11" placeholder="手机号码">
        </div>
      </div>
      <div class="dis-flex padding-5-20 margin-0-20">
        <div class="width-50">
          <div class="notice-cancel sure-cancel" @click="cancel">取消</div>
        </div>
        <div class="width-50">
          <div class="notice-sure sure-cancel" @click="sure">确定</div>
        </div>
      </div>
    </div>
    <img class="close" @click="close" src="./../assets/images/arrow_close.png" alt="">
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import {Toast} from 'mint-ui';
  import common from './../assets/js/common.js';
  export default{
    data(){
      return {
        qty: 1,//到货通知数量
        mobile: !common.isEmptyObject(common.getLocalStorage("mobile")) ? common.getLocalStorage("mobile") : ""
      }
    },
    computed: {
      ...mapGetters(['curProductDetail', 'curSize', 'shopNo']),
      shopNo(){
        return this.$store.state.productDetail.shopNo;
      },
      shopName(){
        return this.$store.state.productDetail.shopName;
      },
      /*mobile(){//手机号码
       if (!common.isEmptyObject(common.getLocalStorage("mobile"))){
       return common.getLocalStorage("mobile")
       }else{
       return "";
       }
       }*/

    },
    methods: {
      cancel(){//取消
        this.$store.commit("showNotice", false);
      },
      sure(){//确定
        let curProductDetail = this.$store.state.productDetail.curProductDetail,
          curSize = this.$store.state.productDetail.curSize,
          key = this.shopNo + "|" + curProductDetail.code + "|" + curSize.sizeNo,
          productDetail = {};
        productDetail.code = curProductDetail.code;
        productDetail.itemNo = curProductDetail.itemNo;
        productDetail.name = curProductDetail.name;
        productDetail.brandNo = curProductDetail.brandNo;
        productDetail.brandName = curProductDetail.brandName;
        productDetail.colorName = curProductDetail.colorName;
        productDetail.sizeNo = curSize.sizeNo;
        productDetail.shopNo = this.shopNo;
        productDetail.shardingFlag = this.$store.state.productDetail.productInfo.shardingFlag;
        productDetail.qty = this.qty;
        //验证手机号
        let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!myreg.test(this.mobile)) {
          Toast("请输入有效的手机号码");
          return false;
        }
        productDetail.tel = this.mobile;
        this.$store.dispatch("setNotice", {
          productDetail: productDetail, callback: function (data) {
            Toast(data);
            common.setLocalStorage("mobile", productDetail.tel);
            let _productDetail = "productDetail";
            //如果session中有数据
            let _key = {};
            if (!common.isEmptyObject(JSON.parse(sessionStorage.getItem("productDetail")))) {
              _key = JSON.parse(sessionStorage.getItem("productDetail"));
              _key[key] = productDetail;
            } else {
              _key[key] = productDetail;
            }
            sessionStorage.setItem("productDetail", JSON.stringify(_key));
          }
        });
        this.$store.commit("showNotice", false);
      },
      addNum(){//数量+1
        this.qty++;
      },
      minusNum(){//数量-1
        if (this.qty == 1) return;
        this.qty--;
      },
      close(){//关闭弹层
        this.$store.commit("showNotice", false);
      }
    }
  }
</script>
<style scoped>
  .modal {
    width: 270px;
    position: fixed;
    z-index: 13500;
    left: 50%;
    margin-left: -135px;
    margin-top: 0;
    top: 25%;
    text-align: center;
    border-radius: 13px;
    background-color: #fff;
    z-index: 1111111;
  }

  .close {
    content: "";
    position: absolute;
    top: -8px;
    right: -8px;
    width: 30px;
    height: 30px;
  }

  .add-minus {
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin: 0 3px 0 0;
    text-align: center;
    background-color: #eee;
    border: 1px solid #d3d3d3;
  }

  .notice-qty {
    width: 60px;
    height: 30px;
    line-height: 30px;
    margin: 0 3px 0 0;
    text-align: center;
    background-color: #eee;
    border: 1px solid #d3d3d3;
  }

  .notice-mobile {
    height: 30px;
    line-height: 30px;
    margin: 0 3px 0 0;
    padding-left: 5px;
    width: 150px;
    font-size: 12px;
    box-sizing: border-box;
  }

  .notice-sure {
    margin-left: 30px;
    background-color: #18c37d;
    color: #fff;
  }

  .notice-cancel {
    margin-right: 30px;
    background-color: #F3F3F3;
    color: #000;
  }

  .sure-cancel {
    height: 30px;
    line-height: 30px;
    border: 1px solid #e7e7e7 !important;
    border-radius: 3px;
  }
</style>
