<template>
  <div class="bg-fff height-100">
    <div v-if="nearShopList.length==0 && showNearShop" class="app-no-data"></div>
    <div v-else-if="nearShopList.length>0 && showNearShop" v-for="item in nearShopList"
         class="padding-10-10-10-15 border-bottom-d9d9d9" @click="goIndex(item.shopNo,item.fullName)">
      <div class="overflow-hidden">
        <div class="float-left">{{item.fullName}}</div>
        <mt-badge class="float-right " size="small" type="primary" color="#2196f3">
          库存{{item.availableQty}}
        </mt-badge>
      </div>
      <div class="dis-flex padding-top-5">
        <img class="padding-top-3" src="../assets/images/icon_postion20.png" width="16" height="16">
        <div class="flex-1 cor-9a9a9a padding-left-10 text-overflow-2">
          {{item.distance}}KM&nbsp;&nbsp;{{item.address}}
        </div>
      </div>
      <div class="dis-flex">
        <img class="padding-top-3" src="../assets/images/icon_tel.png" width="16" height="16">
        <div class="flex-1 cor-9a9a9a padding-left-10">
          {{item.tel}}
        </div>
      </div>
    </div>
    <div v-else>
      <div class="padding-10-10-10-15 border-bottom-d9d9d9">
        <div class="dis-flex content-space-between margin-bottom-5">
          <div class="ss-title"></div>
          <div class="ss-badge"></div>
        </div>
        <div class="ss-width-100 margin-bottom-5"></div>
        <div class="ss-tel"></div>
      </div>
      <div class="padding-10-10-10-15 border-bottom-d9d9d9">
        <div class="dis-flex content-space-between margin-bottom-5">
          <div class="ss-title"></div>
          <div class="ss-badge"></div>
        </div>
        <div class="ss-width-100 margin-bottom-5"></div>
        <div class="ss-tel"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex'
  export default {
    data(){
      return {
        query: this.$route.query
      }
    },
    computed: {
      ...mapGetters(['nearShopList']),
      showNearShop(){
        return this.$store.state.nearShop.showNearShop
      }
    },
    created(){
      this.getNearShop(this.query)
    },
    methods: {
      ...mapActions([
        'getNearShop'
      ]),
      goIndex(shopNo, shopName){
        this.$router.replace({
          name: "index",
          query: {
            shopNo: shopNo,
            shopName: shopName
          }
        })
        this.$store.commit("shopNo", shopNo);
        this.$store.commit("shopName", shopName);
        this.$store.dispatch('getProductInfo').then(() => {
          this.$store.dispatch('getSize').then(() => {
            this.$store.commit("curSize", 0);
            this.$store.commit("isCurSizeIndex", 0);
          });
        }).then(() => {
          this.$store.dispatch('getRecommend');
        })
      }
    },
  }
</script>
