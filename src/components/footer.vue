<template>
  <div class="footer dis-flex width-100 height-50p line-height-50 cor-fff">
    <div class="flex-1 text-align-c bg-ff9402 size-17" @click="addCart">加入购物车</div>
    <div class="flex-1 text-align-c bg-f40 size-17" @click="buy">立即购买</div>
  </div>
</template>
<script>
  import {MessageBox} from 'mint-ui';
  import common from './../assets/js/common.js';
  export default{
    methods: {
      addCart(){
        let curProductDetail = this.$store.state.productDetail.curProductDetail,
          curSize = this.$store.state.productDetail.curSize;
        let isNeib = 0,//是否跨店 0为本店，1为跨店
          tagPrice = curProductDetail.tagPrice,
          arrStore = {},
          maxStore,
          shopCarNum = 0,
          _sKey, _sShopKey, qty = this.$store.state.productDetail.qty,
          shopName = this.$store.state.productDetail.shopName;
        _sShopKey = this.$store.state.productDetail.shopNo;
        _sKey = curProductDetail.itemNo +
          "|" + curSize.sizeNo +
          "|" + curProductDetail.colorNo;
        let carDetail = {
          title: curProductDetail.fullName,
          sizeNo: curSize.sizeNo,
          color: curProductDetail.colorName,
          imgUrl: curProductDetail.imageUrl || "",
          code: curProductDetail.code,
          tagPrice: curProductDetail.tagPrice,
          salePrice: curProductDetail.salePrice,
          qty: qty,
          brandNo: curProductDetail.brandNo,
          availableQty: curSize.availableQty <= 0 ? 0 : curSize.availableQty,
          neighbourQty: curSize.neighbourQty <= 0 ? 0 : curSize.neighbourQty,
          isNeib: isNeib,
          brand: curProductDetail.brandName,//品牌
          zone: this.$store.state.productDetail.productInfo.zoneNo,//大区
          year: curProductDetail.yearsName,//年份
          season: curProductDetail.purchaseSeasonName,//季节
        };
        maxStore = carDetail.availableQty > carDetail.neighbourQty ? maxStore = carDetail.availableQty : maxStore = carDetail.neighbourQty;
        if (!common.isEmptyObject(common.getLocalStorage("shopCar"))) {
          arrStore = common.getLocalStorage("shopCar");
          for (var i in arrStore) {
            if (i == _sShopKey) {
              //存在当前店铺
              for (var j in arrStore[i].productList) {
                if (arrStore[i].productList[j].sizeNo == curSize.sizeNo && arrStore[i].productList[j].code == curProductDetail.code) {
                  shopCarNum += arrStore[i].productList[j].qty;
                  if (qty > maxStore - shopCarNum) {
                    MessageBox('提示', '库存不足');
                    return false;
                  }
                } else {
                  if (qty > maxStore) {
                    MessageBox('提示', '库存不足');
                    return false;
                  }
                }
              }
            } else {
              //不存在当前店铺
              if (qty > maxStore) {
                MessageBox('提示', '库存不足');
                return false;
              }
            }
          }
        } else {
          if (qty > maxStore) {
            MessageBox('提示', '库存不足');
            return false;
          }
        }
        //设置购物车数量
        if (!common.isEmptyObject(common.getLocalStorage("shopCar"))) {
          let carInfo = common.getLocalStorage("shopCar");
          let totalNum = 0;
          for (var i in carInfo) {
            for (var j in carInfo[i].productList) {
              totalNum += carInfo[i].productList[j].qty;
            }
          }
          this.$store.commit("cartNum", totalNum + qty);
        } else {
          this.$store.commit("cartNum", qty);
        }
        if (!common.isEmptyObject(curProductDetail)) {
          var _isSuccess = common.SetCarLocalStorage(_sKey, carDetail, _sShopKey, shopName);
        } else {
          MessageBox('提示', '颜色不能为空');
        }
      },
      buy(){

      }
    }
  }
</script>
<style scoped>
  .bg-ff9402 {
    background-color: #ff9402;
  }

  .bg-f40 {
    background-color: #f40;
  }

  .size-17 {
    font-size: 17px;
  }
</style>
