<template>
  <div>
    <div class="text-align-c app-underline size-17 height-50p line-height-50 cor-333">
      请选择店铺
    </div>
    <mt-cell v-for="item in productInfoShopList" :key="item.id" class="app-underline cor-333"
             :title="item.shortName" @click.native="selectShop(item.shopNo,item.shortName)"></mt-cell>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import api from '../api/productDetail';
  export default{
    data(){
      return {}
    },
    computed: {
      productInfoShopList(){
        return this.$store.state.productDetail.productInfoShopList;
      }
    },
    methods: {
      selectShop(shopNo, shortName){
        this.$store.commit({
          type: "selectShop",
          shortName: shortName,
          shopNo: shopNo
        });
        this.$router.push({
          name: "index"
        })
        let that = this;
        this.$store.dispatch('getProductInfo').then(() => {
          that.$store.dispatch('getImgs');
          that.$store.dispatch('getFab');
        }).then(() => {
          that.$store.dispatch('getSize');
        }).then(()=>{
          that.$store.dispatch('getRecommend');
        })
      }
    }
  }
</script>
<style scoped>
  .app-underline {
    position: relative;
  }

  .app-underline:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: auto;
    top: auto;
    height: 1px;
    width: 100%;
    background-color: #eee;
    display: block;
    z-index: 15;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
</style>
