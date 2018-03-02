<template>
  <div class="height-100">
    <div class="dis-flex height-100-bg-eee flex-wrap"
         v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="0">
      <div v-for="item in productList" class="width-50 padding-0-5 box-sizing" @click="goIndex(item)">
        <img :src="item.imageUrl | noSmallImg" :onerror="noFindSmallImg" alt="">
        <div class="padding-left-20 bg-fff margin-bottom-10">
          <div class="padding-bottom-5 height-26em">
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
        pageSize: 20,
        params: {//请求参数
          pageNo: 1,
          itemNo:this.$route.query.itemNo,
          brandNo:this.$route.query.brandNo,
          shopNo:this.$route.query.shopNo,
          years:this.$route.query.years,
          categoryNo:this.$route.query.categoryNo,
          season:this.$route.query.season,
          zoneNo:this.$route.query.zoneNo,
          gender:this.$route.query.gender,
          organTypeNo:this.$route.query.organTypeNo,
        },
      }
    },
    computed: {
      ...mapGetters(['productList']),
      noFindSmallImg(){
        return this.$store.state.productDetail.noFindSmallImg;
      }
    },
    created(){
    },
    methods: {
      goIndex(obj){
        this.$router.push({
          name: "index",
          query: obj
        })
        let that = this;
        this.$store.dispatch('getProductInfo', {obj}).then(() => {
          that.$store.dispatch('getImgs');
        }).then(() => {
          that.$store.dispatch('getSize', {obj});
        }).then(() => {
          that.$store.dispatch('getRecommend');
        })
      },
      loadMore() {
       /* this.params.pageNo++;*/
        let that = this;
        this.$store.dispatch("getProductList", this.params).then(()=>{
          if (that.params.pageNo * that.params.pageSize >= that.$store.state.productList.total) {
            this.loading = true;
          }
        });
      },
    },
    filters: {
      noSmallImg(value){
        return value ? value : require("./../assets/images/smallshoes.jpg");
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
