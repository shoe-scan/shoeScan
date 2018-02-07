<template>
  <div class="padding-0-10 productInfo">
    <div class="app-pro-name">
      <div class="appy-title">考拉绒保暖打底裤</div>
      <div class="cor-666">R9Z00007DA1AJ2</div>
    </div>
    <div class="app-underline">
      <span class="app-sale-price">¥200</span>&nbsp;
      <div>
        <span class="cor-666">价格仅供参考，以门店开单价格为准</span>
      </div>
    </div>
    <div class="app-underline padding-10-0 cor-666">
      <div>当前门店：沈阳兴隆一百BST</div>
      <div>
        本店<span class="cor-ef0717">0</span>件&nbsp;&nbsp;&nbsp;&nbsp;
        邻店<span class="cor-ef0717">0</span>件
      </div>
    </div>
    <div class="padding-10-0">
      <div>
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
          <span class="active">白色</span>
          <span>白色</span>
          <span>白色</span>
          <span>白色</span>
          <span>白色</span>
        </div>
      </div>
      <div class="table app-pro-attr">
        <div class="table-cell app-title">
          <span>尺码</span>
        </div>
        <div class="table-cell app-item appy-color">
          <span class="active">F</span>
        </div>
      </div>
      <div class="table app-pro-attr app-pro-num">
        <div class="table-cell app-title">
          <span>数量</span>
        </div>
        <div class="table-cell app-item">
          <span class="disabled appy-minus">-</span><span class="appy-qty" data-totalqty="0">1</span><span
          class="appy-add disabled">+</span>
        </div>
      </div>
      <mt-cell class="border-top-d9d9d9"
               title="附近门店"
               is-link
               @click.native="goNearShop">
      </mt-cell>
      <mt-cell class="border-top-d9d9d9"
               title="你可能喜欢"
               is-link
               @click.native="goProductList">
      </mt-cell>
      <div class="dis-flex">
        <div class="flex-1 width-33 padding-0-5">
          <img src="https://i1.ygimg.cn/pics/tata/2017/100537031/100537031_01_mb.jpg?2" alt="">
          <div class="padding-bottom-5">
            牛皮革男皮鞋
          </div>
          <div class="app-sale-price">
            &yen;2000
          </div>
        </div>
        <div class="flex-1 width-33 padding-0-5">
          <img src="https://i1.ygimg.cn/pics/tata/2017/100537031/100537031_01_mb.jpg?2" alt="">
          <div class="padding-bottom-5">
            牛皮革男皮鞋
          </div>
          <div class="app-sale-price">
            &yen;2000
          </div>
        </div>
        <div class="flex-1 width-33 padding-0-5">
          <img src="https://i1.ygimg.cn/pics/tata/2017/100537031/100537031_01_mb.jpg?2" alt="">
          <div class="padding-bottom-5">
            牛皮革男皮鞋
          </div>
          <div class="app-sale-price">
            &yen;2000
          </div>
        </div>
      </div>
      <div class="margin-10-0 text-align-c margin-top-30">
        <span class="appy-hyp">换一批</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    methods: {
      goNearShop(){
        this.$router.push({
          name: "nearShop",
          query: {
            shopNo: "CO07TT",
            itemCode: "AA3T3537DU1CM7",
            sizeNo: "240",
            brandNo: "TT01",
            shardingFlag: "U010101_C",
            zoneNo: "C"
          }
        })
      },
      goProductList(){
        this.$router.push({
          name: "productList",
          query: {
            itemNo: "20170606000001",
            brandNo: "TT01",
            shopNo: "CO33TT",
            years: "20160729000001",
            categoryNo: "010102",
            season: "20141017000022",
            zoneNo: "C",
            gender: "20141017000029",
            organTypeNo: "U010101",
          }
        })
      },
    },
  }
</script>
<style scoped>
  .appy-hyp{
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
