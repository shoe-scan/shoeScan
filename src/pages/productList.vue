<template>
  <div class="height-100">
    <div class="dis-flex height-100-bg-eee flex-wrap">
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
    <div class="load-more" v-show="showLoadMore" @click="loadMore()">加载更多...</div>
    <div class="load-more" v-show="showLoading">数据加载中...</div>
    <div class="load-more" v-show="showLoaded">已加载完所有数据</div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default {
    data(){
      return {
        showLoadMore: false,
        showLoading: false,
        showLoaded: false,
        params: {//请求参数
          pageNo: 1,
          pageSize: 20,
          itemNo: this.$route.query.itemNo,
          brandNo: this.$route.query.brandNo,
          shopNo: this.$route.query.shopNo,
          years: this.$route.query.years,
          categoryNo: this.$route.query.categoryNo,
          season: this.$route.query.season,
          zoneNo: this.$route.query.zoneNo,
          gender: this.$route.query.gender,
          organTypeNo: this.$route.query.organTypeNo,
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
      this.getProductList();
    },
    methods: {
      goIndex(obj){
        this.$router.push({
          name: "index",
          query: obj
        })
        let that = this;
        this.$store.dispatch('getProductInfo', { obj }).then(() => {
          that.$store.dispatch('getImgs');
        }).then(() => {
          that.$store.dispatch('getSize', { obj });
        }).then(() => {
          that.$store.dispatch('getRecommend');
        })
      },
      loadMore() {
        this.showLoadMore = false;
        this.showLoading = true;
        this.params.pageNo++;
        this.getProductList();
      },
      getProductList(){
        let that = this;
        this.$store.dispatch("getProductList", this.params).then(() => {
          console.log(that.params.pageNo * that.params.pageSize + ' ' +
            that.$store.state.productList.total)
          setTimeout(() => {
            this.showLoading = false;
            if (that.params.pageNo * that.params.pageSize < that.$store.state.productList.total) {
              that.showLoadMore = true;
            }else{
              this.showLoaded = true;
            }
          }, 500)
        });
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
  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  .load-more {
    background-color: #efeff4;
    height: 42px;
    line-height: 42px;
    text-align: center;
  }
</style>
