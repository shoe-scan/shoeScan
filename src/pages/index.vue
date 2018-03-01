<template>
  <div id="index" class="position-relative" :class="{overlayHidden:showNotice}">
    <div class="padding-bottom-50 bg-fff">
      <swiper>

      </swiper>
      <productInfo></productInfo>
      <tabs></tabs>
    </div>
    <foot></foot>
    <div class="cart" @click="goCart">
      <span class="cart-num">{{cartNum}}</span>
    </div>
    <div class="appy-fab" v-if="showFab" @click="goFab"></div>
    <div v-if="showNotice" class="overlay"></div>
    <notice v-if="showNotice"></notice>
  </div>
</template>

<script>
  import Swiper from "./../components/swiper";//轮播
  import Foot from './../components/footer';//底部加入购物车和立即购买
  import ProductInfo from './../components/productInfo';//商品信息
  import Tabs from './../components/tabs';//切换图文详情和评论
  import Notice from '../components/notice';//到货通知
  import {mapGetters} from 'vuex';
  export default {
    name: 'Index',
    data(){
      return {
        moreShops: true,
      }
    },
    computed: {
      ...mapGetters(['fab', 'showFab', 'showNotice']),
      cartNum(){
        return this.$store.state.productDetail.cartNum;
      }
    },
    methods: {
      goCart(){
        this.$router.push({
          name: "cart",
        })
      },
      goFab(){
        this.$router.push({
          name: "fab",
          query: this.$store.state.productDetail.fab
        })
      }
    },
    components: {
      Swiper,
      Foot,
      ProductInfo,
      Tabs,
      Notice
    }
  }
</script>
<style scoped>
  .cart {
    position: fixed;
    width: 60px;
    height: 60px;
    left: initial;
    right: 10px;
    bottom: 90px;
    border-radius: 25px;
    background: url(./../assets/images/icon_shop.png) no-repeat;
    background-size: 60px 60px;
    z-index: 111;
  }

  .cart-num {
    color: #fff;
    width: 20px;
    height: 20px;
    background-color: red;
    z-index: 1111;
    position: absolute;
    top: 10px;
    right: 10px;
    text-align: center;
    line-height: 20px;
    border-radius: 10px;
    font-size: 12px;
  }

  .appy-fab {
    position: fixed;
    width: 30px;
    height: 65px;
    left: initial;
    right: 0;
    bottom: 150px;
    z-index: 111;
  }

  .appy-fab:after {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    background: url(./../assets/images/icon_fab.png) no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
    z-index: 113000;
  }

  .overlayHidden {
    height: 100%;
    overflow: hidden;
  }
</style>
