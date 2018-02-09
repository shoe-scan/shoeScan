<template>
  <div>
    <div class="text-align-c app-underline size-17 height-50p line-height-50 cor-333">
      请选择店铺
    </div>
    <mt-cell v-for="item in productInfoShopList" class="app-underline cor-333"
             :title="item.shortName" @click.native="selectShop(item.shopNo,item.shortName)"></mt-cell>
  </div>
</template>
<script>
  import {Indicator} from 'mint-ui';
  import {mapGetters} from 'vuex';
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
        this.getProductDetail();
      },
      getProductDetail(){//商品资料和价格
        Indicator.open({
          spinnerType: 'fading-circle'
        });
        this.$http.post(this.$store.state.productDetail.AppConfig.basePATH + "app/shopping/queryItemForShopCar", {
            itemNo: this.$store.state.productDetail.productInfo.itemNo,
            shopNo: this.$store.state.productDetail.shopNo,
            styleNo: this.$store.state.productDetail.productInfo.styleNo,
            zoneNo: this.$store.state.productDetail.productInfo.zoneNo,
            brandNo: this.$store.state.productDetail.AppConfig.brandNo
          },
          {
            emulateJSON: true
          }).then(function (res) {
          this.$store.commit("productDetail", res.data.data);
          Indicator.close();
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
