<template>
  <div class="padding-0-10 productInfo">
    <div class="app-pro-name">
      <div class="appy-title">{{curProductDetail.name}}</div>
      <div class="cor-666">{{curProductDetail.code}}</div>
    </div>
    <div class="app-underline">
      <span class="app-sale-price">¥{{curProductDetail.tagPrice}}</span>&nbsp;
      <div class="padding-bottom-10">
        <span class="cor-666">价格仅供参考，以门店开单价格为准</span>
      </div>
    </div>
    <div class="app-underline padding-10-0 cor-666">
      <div>当前门店：{{shopName}}</div>
      <div>
        本店<span class="cor-ef0717">{{curSize.availableQty}}</span>件&nbsp;&nbsp;&nbsp;&nbsp;
        邻店<span class="cor-ef0717">{{curSize.neighbourQty}}</span>件
      </div>
    </div>
    <div class="padding-10-0">
      <div v-if="curSize.availableQty<=0">
        <div class="padding-bottom-10 cor-4DC99A size-12">
          本店库存不足，可选择
          <span class="cor-2196f3 padding-2-5 size-14 appy-border">到货通知</span>
        </div>
      </div>
      <div class="table app-pro-attr">
        <div class="table-cell app-title">
          <span>颜色</span>
        </div>
        <div class="table-cell app-item appy-color">
          <span v-for="(item,index) in productDetail" @click="selectColor(item)"
                :class="{active:item.itemNo==isCurItemNo}">{{item.colorName}}</span>
        </div>
      </div>
      <div class="table app-pro-attr">
        <div class="table-cell app-title">
          <span>尺码</span>
        </div>
        <div class="table-cell app-item appy-color">
          <span v-for="item in sizes" @click="selectSize(item)"
                :class="{active:item.barcode == isCurBarCode}">{{item.sizeNo}}</span>
        </div>
      </div>
      <div class="table app-pro-attr app-pro-num">
        <div class="table-cell app-title">
          <span>数量</span>
        </div>
        <div class="table-cell app-item">
          <span class="appy-minus" @click="minus(qty)" :class="{disabled:qty==1}">-</span>
          <span class="appy-qty" data-totalqty="0">{{qty}}</span>
          <span class="appy-add" @click="add(qty)"
                :class="{disabled:qty>=maxQty}">+</span>
        </div>
      </div>
      <mt-cell class="border-top-d9d9d9"
               title="附近门店"
               is-link
               @click.native="goNearShop">
      </mt-cell>
      <template v-if="reCommends.length>0">
        <mt-cell class="border-top-d9d9d9"
                 title="你可能喜欢"
                 is-link
                 @click.native="goProductList">
        </mt-cell>
        <div class="dis-flex">
          <div v-for="item in reCommends" class="width-33 padding-0-5" @click="goIndex(item)">
            <img :src="item.imageUrl" alt="">
            <div class="text-overflow-2 height-26em">
              {{item.name}}
            </div>
            <div class="app-sale-price">
              &yen;{{item.tagPrice}}
            </div>
          </div>
        </div>
        <div class="margin-10-0 text-align-c margin-top-30">
          <span class="appy-hyp" @click="hyp">换一批</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    computed: {
      ...mapGetters(['shopName', 'productDetail', 'AppConfig', 'curProductDetail', 'sizes', 'curSize', 'qty', 'maxQty', 'isCurItemNo', 'isCurBarCode', 'reCommends']),
    },
    methods: {
      goNearShop(){
        this.$router.push({
          name: "nearShop",
          query: {
            shopNo: this.$store.state.productDetail.shopNo,
            itemCode: this.$store.state.productDetail.curProductDetail.code,
            sizeNo: this.$store.state.productDetail.curSize.sizeNo,
            brandNo: this.$store.state.productDetail.curProductDetail.brandNo,
            shardingFlag: this.$store.state.productDetail.productInfo.shardingFlag,
            zoneNo: this.$store.state.productDetail.productInfo.zoneNo
          }
        })
      },
      goProductList(){
        this.$router.push({
          name: "productList",
          query: {
            itemNo: this.$store.state.productDetail.curProductDetail.itemNo,
            brandNo: this.$store.state.productDetail.curProductDetail.brandNo,
            shopNo: this.$store.state.productDetail.shopNo,
            years: this.$store.state.productDetail.curProductDetail.years,
            categoryNo: this.$store.state.productDetail.curProductDetail.categoryNo,
            season: this.$store.state.productDetail.curProductDetail.purchaseSeason,
            zoneNo: this.$store.state.productDetail.productInfo.zoneNo,
            gender: this.$store.state.productDetail.curProductDetail.gender,
            organTypeNo: this.$store.state.productDetail.productInfo.organTypeNo,
          }
        })
      },
      selectColor(item){
        this.$store.commit("isCurItemNo", item.itemNo);
        this.$store.commit("getCurProductDetail", item.itemNo);
        this.$store.dispatch('getImgs');
        this.$store.dispatch('getSize').then(() => {
          this.$store.commit("curSize", this.$store.state.productDetail.sizes[0].barcode);
          this.$store.commit("isCurBarCode", this.$store.state.productDetail.sizes[0].barcode);
        });
        this.$store.dispatch("getRecommend");
        this.$store.dispatch("getFab",item.itemNo);
      },
      selectSize(item){
        this.$store.commit("isCurBarCode", item.barcode);
        this.$store.commit("curSize", item.barcode);
      },
      add(qty){
        this.$store.commit("addQty", qty);
      },
      minus(qty){
        this.$store.commit("minusQty", qty);
      },
      hyp(){//换一批
        if (this.$store.state.productDetail.pageNo * 3 < this.$store.state.productDetail.total) {
          this.$store.commit("addPageNo");
        } else {
          this.$store.commit("addPageNo", 1);
        }
        this.$store.dispatch('getRecommend');
      },
      goIndex(obj){
        this.$router.push({
          name: "index",
          query:{
              id:obj.id
          }
        })
        let that = this;
        this.$store.dispatch('getProductInfo',{obj}).then(() => {
          that.$store.dispatch('getImgs');
        }).then(() => {
          that.$store.dispatch('getSize',{obj});
        }).then(()=>{
          that.$store.dispatch('getRecommend');
        })
      }
    },
  }
</script>
<style scoped>
  .appy-hyp {
    padding: 4px 15px;
    border-radius: 20px;
    color: #6cb5f9;
    border: 1px solid #6cb5f9;
  }

  .app-pro-name {
    padding: 10px 0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    flex-basis: auto;
    display: block;
    flex-basis: 1px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
    -webkit-box-pack: center;
    line-height: 1.35em;
    height: 3em;
    font-size: 14px;
  }

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

  .appy-border {
    border: 1px solid #2196f3;
    border-radius: 15px;
  }

  .app-pro-attr {
    padding-bottom: 8px;
  }

  .table {
    display: table;
  }

  .app-pro-attr .app-title {
    width: 50px;
  }

  .table-cell {
    display: table-cell;
  }

  .app-pro-attr .app-item span.active {
    color: #fff;
    background-color: #18b976;
    border-color: #18b976;
  }

  .app-pro-attr .app-item span {
    display: inline-block;
    width: auto;
    margin: 0 9px 9px 0;
    padding: 5px;
    background-color: #eee;
    border: 1px solid #d3d3d3;
    border-radius: 2px;
  }

  .app-pro-attr:last-child {
    padding-bottom: 0;
  }

  .app-pro-num .app-item span.disabled {
    color: #c8c8c8;
  }

  .app-pro-num .app-item span {
    width: 30px !important;
    height: 30px;
    line-height: 30px;
    margin: 0 3px 0 0;
    padding: inherit;
    text-align: center;
  }

  .app-pro-attr .app-item span {
    display: inline-block;
    width: auto;
    margin: 0 9px 9px 0;
    background-color: #eee;
    border: 1px solid #d3d3d3;
  }

  .app-pro-attr .app-item span.active {
    color: #fff;
    background-color: #18b976;
    border-color: #18b976;
  }

  .productInfo .mint-cell-wrapper {
    padding-left: 0 !important;
  }

  .productInfo .mint-cell-allow-right:after {
    right: 15px !important;
    position: absolute;
    width: 10px;
    height: 10px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  .app-sale-price {
    color: #ef0717 !important;
    font-size: 16px;
    font-weight: 700;
  }
</style>
