<template>
  <div class="height-100-bg-eee">
    <div class="dis-flex flex-wrap"
         v-infinite-scroll="loadMore"
         infinite-scroll-distance="0">
      <div v-for="item in productList" class="width-50 padding-0-5 box-sizing" @click="goIndex(item)">
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
        pageSize: 10,
        params: {},//请求参数
        loading:false
      }
    },
    computed: {
      ...mapGetters(['productList']),
    },
    created(){
      if(!this.loading){
        this.params = this.query;
        this.params.pageNo = this.pageNo;
        this.params.pageSize = this.pageSize;
        this.$store.dispatch("getProductList", this.params);
      }
    },
    methods: {
      goIndex(obj){
        this.$router.push({
          name: "index",
          query:obj
        })
        let that = this;
        this.$store.dispatch('getProductInfo',{obj}).then(() => {
          that.$store.dispatch('getImgs');
        }).then(() => {
          that.$store.dispatch('getSize',{obj});
        }).then(()=>{
          that.$store.dispatch('getRecommend');
        })
      },
      loadMore() {
          if(!this.loading){
            if(this.params.pageNo*this.pageSize>=this.$store.state.productList.total){
              return;
            }
            this.params.pageNo++;
          }
      },
      getData(){
        this.loading = true;
        this.$store.dispatch("getProductList", this.params).then(function(){
            this.loading = false;
        });
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
