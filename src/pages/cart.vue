<template>
  <div style="width: inherit;height: inherit">
    <div v-if="shopCarList == null" class="app-no-data"></div>
    <div v-else class="list-block margin-bottom-10" v-for="(shops, key) in shopCarList" :key="key">
      <div class="item-bar">{{shops.shopName}}</div>
      <div class="mint-cell-wrapper padding-0" v-for="(item, key1) in shops.productList" :key="key1">
        <mt-cell-swipe class="app-cell-swipe" :right="[{
            content: '删除',
            handler: ()=>delProduct([key,key1])
        }]">
          <div class="mint-cell-title" @click="checkItem(key, key1)">
            <label class="mint-checklist-label item-content padding-0">
              <div class="item-media">
                <span class="mint-checkbox">
                  <input type="checkbox" class="mint-checkbox-input" v-model='shops.checkedList' :value="key1">
                  <span class="mint-checkbox-core app-checkbox-core"></span>
                </span>
              </div>
              <div class="item-media padding-left-10">
                <img :src="item.imgUrl | noSmallImg" :onerror="noFindSmallImg" width="70">
              </div>
              <div class="item-inner">
                <div class="item-title-row ">
                  <div class="cor-000">
                    <span class="app-ld" v-if="item.isNeib == 1">邻店</span>{{item.title}}
                  </div>
                </div>
                <div class="item-title-row cor-999">
                  <div class="item-title">{{item.code}}</div>
                  <div class="item-after app-sale-price">&yen;{{item.tagPrice}}</div>
                </div>
                <div class="item-title-row cor-999">
                  <div class="item-title">{{item.sizeNo}} {{item.color}}</div>
                  <div class="item-after">x{{item.qty}}</div>
                </div>
              </div>
            </label>
          </div>
        </mt-cell-swipe>
      </div>
      <div class="item-bar">
        <div class="item-title-row">
          <div class="item-title">
            <label class="mint-checklist-label item-content padding-left-0">
              <div class="item-media">
                <span class="mint-checkbox">
                  <input type="checkbox" class="mint-checkbox-input"
                         v-model="shops.checkedAll" :value="key" @click="checkedAll(key)">
                  <span class="mint-checkbox-core app-checkbox-core"></span>
                </span>
              </div>
            </label>
          </div>
          <div class="item-title line-height-44">
            数量：<span class="app-sale-price">{{shops.totalQty}}</span>&nbsp;
            金额：<span class="app-sale-price">&yen;{{shops.totalPrice}}</span>
          </div>
          <div class="item-after">
            <button class="mint-button app-buy-btn" :disabled="shops.btnDisabled" @click="createOrder(key)">
              <label class="mint-button-text">立即购买</label>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import CreateQRCode from '../assets/js/createQRCode'
  //  localStorage.setItem('shopCar', JSON.stringify({"CO12TT":{"shopName":"沈阳中兴TT","totalQty":0,"totalPrice":0,"checkedList":[],"btnDisabled":true,"checkedAll":false,"productList":{"20170606000001|240|U1":{"title":"滴胶/纺织物/牛皮革男休闲鞋","sizeNo":"240","color":"黑色","imgUrl":"https://i1.ygimg.cn/pics/tata/2017/100552778/100552778_01_mb.jpg?3","code":"AA3T3537DU1CM7","tagPrice":999,"salePrice":299,"qty":1,"brandNo":"TT01","availableQty":0,"neighbourQty":4,"isNeib":1,"brand":"他她","zone":"C","year":"2017","season":"秋"},"20170606000001|245|U1":{"title":"滴胶/纺织物/牛皮革男休闲鞋","sizeNo":"245","color":"黑色","imgUrl":"https://i1.ygimg.cn/pics/tata/2017/100552778/100552778_01_mb.jpg?3","code":"AA3T3537DU1CM7","tagPrice":999,"salePrice":299,"qty":1,"brandNo":"TT01","availableQty":0,"neighbourQty":10,"isNeib":1,"brand":"他她","zone":"C","year":"2017","season":"秋"}}},"CO54TT":{"shopName":"沈阳兴隆一百TT","totalQty":0,"totalPrice":0,"checkedList":[],"btnDisabled":true,"checkedAll":false,"productList":{"20170606000001|240|U1":{"title":"滴胶/纺织物/牛皮革男休闲鞋","sizeNo":"240","color":"黑色","imgUrl":"https://i1.ygimg.cn/pics/tata/2017/100552778/100552778_01_mb.jpg?3","code":"AA3T3537DU1CM7","tagPrice":999,"salePrice":299,"qty":1,"brandNo":"TT01","availableQty":0,"neighbourQty":4,"isNeib":1,"brand":"他她","zone":"C","year":"2017","season":"秋"},"20170606000001|245|U1":{"title":"滴胶/纺织物/牛皮革男休闲鞋","sizeNo":"245","color":"黑色","imgUrl":"https://i1.ygimg.cn/pics/tata/2017/100552778/100552778_01_mb.jpg?3","code":"AA3T3537DU1CM7","tagPrice":999,"salePrice":299,"qty":1,"brandNo":"TT01","availableQty":0,"neighbourQty":10,"isNeib":1,"brand":"他她","zone":"C","year":"2017","season":"秋"},"20170606000001|250|U1":{"title":"滴胶/纺织物/牛皮革男休闲鞋","sizeNo":"250","color":"黑色","imgUrl":"https://i1.ygimg.cn/pics/tata/2017/100552778/100552778_01_mb.jpg?3","code":"AA3T3537DU1CM7","tagPrice":999,"salePrice":299,"qty":1,"brandNo":"TT01","availableQty":0,"neighbourQty":14,"isNeib":1,"brand":"他她","zone":"C","year":"2017","season":"秋"}}}}))
  export default{
    data(){
      return {
        isFirst: true // 处理商品选择执行两次事件，使用.prevent会禁用掉默认的复选框选中
      }
    },
    computed: {
      ...mapGetters([
        'shopCarList'
      ]),
      noFindSmallImg(){
        return this.$store.state.productDetail.noFindSmallImg;
      }
    },
    mounted(){
      // 获取购物车列表
      this.getShopCarByLocal();
    },
    methods: {
      ...mapActions([
        'getShopCarByLocal',
        'delProduct',
        'checkedAll'
      ]),
      // 选择商品
      checkItem(shopKey, productKey){
        let _this = this;
        if (!this.isFirst)return;
        this.isFirst = false;
        let _checkbox = event.currentTarget.querySelector("input[type=checkbox]");
        setTimeout(() => {
          _this.$store.dispatch('checkedItem', [shopKey, productKey, _checkbox.checked]);
          _this.isFirst = true;
        }, 0)
      },
      // 生成二维码订单
      createOrder(shopKey){
        let _shopCar = JSON.parse(JSON.stringify(this.shopCarList[shopKey])),
          // 二维码数据
          _outData = {
            os: 12,
            dtlVo: []
          };
        for (let i = 0; i < _shopCar.checkedList.length; i++) {
          let _product = _shopCar.productList[_shopCar.checkedList[i]];
          _outData.dtlVo.push({
            bNo: _product.brandNo,
            code: _product.code,
            size: _product.sizeNo,
            qty: _product.qty
          });
        }
        // 创建二维码并显示
        CreateQRCode.create(_outData);
      }
    },
    filters: {
      noSmallImg(value){
        return value ? value : require("./../assets/images/smallshoes.jpg");
      }
    },
  }
</script>

<style scoped>
  .item-bar {
    position: relative;
    margin-top: -1px;
    background-color: #f3f3f3;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    padding-left: 10px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .list-block .item-content {
    box-sizing: border-box;
    min-height: 44px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
  }

  .list-block .item-media {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    -webkit-box-lines: single;
    -moz-box-lines: single;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: none;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    box-sizing: border-box;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding-top: 7px;
    padding-bottom: 8px
  }

  .list-block .item-inner {
    position: relative;
    width: 100%;
    padding: 10px;
    min-height: 44px;
    box-sizing: border-box;
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    overflow: hidden;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -ms-flex-item-align: stretch;
    -webkit-align-self: stretch;
    align-self: stretch
  }

  .list-block .item-inner:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: auto;
    top: auto;
    height: 1px;
    width: 100%;
    background-color: #c8c7cc;
    display: block;
    z-index: 15;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }

  .list-block .item-title-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    line-height: 1.4;
  }

  .list-block .item-title {
    -webkit-flex-shrink: 1;
    -ms-flex: 0 1 auto;
    flex-shrink: 1;
    min-width: 0;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .list-block .item-after {
    white-space: nowrap;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    margin-left: auto;
    padding-left: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    max-height: 28px;
  }

  .app-ld {
    padding: 0 2px;
    background-color: #f06955;
    border-radius: 2px;
    color: #FFF;
  }

  .app-sale-price {
    color: #ef0717;
    font-size: 16px;
    font-weight: 600;
  }

  .app-buy-btn {
    padding: 0 15px;
    height: 46px;
    margin-top: -1px;
    display: inline-block;
    background-color: #f40;
    color: #fff;
    border-radius: 0;
  }

  .app-buy-btn:disabled {
    opacity: .6;
  }

  .list-block .swipeout {
    overflow: hidden;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d
  }

  .list-block .swipeout.deleting {
    -webkit-transition-duration: .3s;
    transition-duration: .3s
  }

  .list-block .swipeout.deleting .swipeout-content {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%)
  }

  .list-block .swipeout.transitioning .swipeout-actions-left a, .list-block .swipeout.transitioning .swipeout-actions-right a, .list-block .swipeout.transitioning .swipeout-content, .list-block .swipeout.transitioning .swipeout-overswipe {
    -webkit-transition: .3s;
    transition: .3s
  }

  .list-block .swipeout-content {
    position: relative;
    z-index: 10
  }

  .list-block .swipeout-overswipe {
    -webkit-transition: .2s left;
    transition: .2s left
  }

  .list-block .swipeout-actions-left, .list-block .swipeout-actions-right {
    position: absolute;
    top: 0;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex
  }

  .list-block .swipeout-actions-left a, .list-block .swipeout-actions-right a {
    padding: 0 30px;
    color: #fff;
    background: #c7c7cc;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    position: relative;
    left: 0
  }

  .list-block .swipeout-actions-left a:after, .list-block .swipeout-actions-right a:after {
    content: '';
    position: absolute;
    top: 0;
    width: 600%;
    height: 100%;
    background: inherit;
    z-index: -1
  }

  .list-block .swipeout-actions-left a.swipeout-delete, .list-block .swipeout-actions-right a.swipeout-delete {
    background: #ff3b30
  }

  .list-block .swipeout-actions-right {
    right: 0;
    -webkit-transform: translateX(100%);
    transform: translateX(100%)
  }

  .list-block .swipeout-actions-right a:after {
    left: 100%;
    margin-left: -1px
  }

  .list-block .swipeout-actions-left {
    left: 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%)
  }

  .list-block .swipeout-actions-left a:after {
    right: 100%;
    margin-right: -1px
  }
</style>
