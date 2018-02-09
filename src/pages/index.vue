<template>
  <div id="index">
    <div class="padding-bottom-50 bg-fff">
      <swiper>

      </swiper>
      <productInfo></productInfo>
      <tabs></tabs>
    </div>
    <foot></foot>
  </div>
</template>

<script>
  import Swiper from "./../components/swiper";//轮播
  import Foot from './../components/footer';//底部加入购物车和立即购买
  import ProductInfo from './../components/productInfo';//商品信息
  import Tabs from './../components/tabs';//切换图文详情和评论
  import {Indicator} from 'mint-ui';
  import {mapGetters} from 'vuex';
  export default {
    name: 'Index',
    data(){
      return {
        moreShops: true,
      }
    },
    created(){
      if (this.$store.state.productDetail.openSelectShop) {
        Indicator.open({
          spinnerType: 'fading-circle'
        });
        this.$http.post(this.$store.state.productDetail.AppConfig.basePATH + "app/scan/getShopInfo", {
            brandNo: this.$store.state.productDetail.AppConfig.brandNo,
            barcode:this.$store.state.productDetail.AppConfig.barcode,
            longitude: 123.400506,
            latitude: 41.793524
          },
          {
            emulateJSON: true
          }).then(function (res) {
          var data = res.data.data;
          if (data.shopList.length > 1) {
            this.moreShops = true;
            this.$store.state.productDetail.productInfoShopList = data.shopList;
            this.$store.state.productDetail.productInfo = data;
            this.$router.push({
              name: 'selectShop'
            })
          } else {
            this.moreShops = false;
          }
          Indicator.close();
        })
      }
    },
    methods: {

    },
    components: {
      Swiper,
      Foot,
      ProductInfo,
      Tabs,
    },
    computed: {
      count(){
        return this.$store.state.count
      }
    }
  }
</script>
