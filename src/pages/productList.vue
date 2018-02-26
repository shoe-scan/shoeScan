<template>
  <div class="height-100-bg-eee">
    <div class="dis-flex flex-wrap"
         v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
      <div v-for="item in productList" class="width-50 padding-0-5 box-sizing">
        <img :src="item.imageUrl" alt="">
        <div class="padding-left-20 bg-fff margin-bottom-10">
          <div class="padding-bottom-5 ">
            {{item.fullName}}
          </div>
          <div class="app-sale-price">
            &yen;{{item.tagPrice}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import {InfiniteScroll} from 'mint-ui';
  Vue.use(InfiniteScroll);
  import {mapGetters} from 'vuex';
  export default {
    data(){
      return {
        query: this.$route.query,
        pageNo: 1,
        pageSize: 20,
        params: {},//请求参数
        loading:true
      }
    },
    computed: {
      ...mapGetters(['productList']),
    },
    created(){
      this.params = this.query;
      this.params.pageNo = this.pageNo;
      this.params.pageSize = this.pageSize;
      this.$store.dispatch("getProductList", this.params);
    },
    methods: {
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
        let that = this;
        this.$store.dispatch('getProductInfo').then(() => {
          that.$store.dispatch('getSize');
        }).then(() => {
          that.$store.dispatch('getRecommend');
        })
      },
      loadMore() {
        this.params = this.query;
        this.params.pageNo = this.pageNo++;;
        this.params.pageSize = this.pageSize;
        this.$store.dispatch("getProductList", this.params);
      }
    },
  }
</script>
<style scoped>
  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
</style>
