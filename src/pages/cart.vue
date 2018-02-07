<template>
  <div>
    <div class="list-block">
      <div class="shop-name">沈阳中兴TT</div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <label class="mint-checklist-label item-content">
              <div class="item-media">
                  <span class="mint-checkbox">
                  <input type="checkbox" class="mint-checkbox-input" value="选项B">
                  <span class="mint-checkbox-core"></span>
                </span>
              </div>
              <div class="item-media">
                <img src="https://i1.ygimg.cn/pics/tata/2017/100552778/100552778_01_mb.jpg?3" width="70">
              </div>
              <div class="item-inner">21321312</div>
            </label>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        aa: ['A']
      }
    },
    watch: {
      aa(n, o){
        console.log(n, o)
      }
    }
  }
</script>

<style scoped>
  .shop-name {
    background-color: #eee;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    padding-left: 15px;
  }
  .list-block .item-content {
    box-sizing: border-box;
    padding-left: 15px;
    min-height: 44px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
  }
  .list-block .item-media {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    -webkit-box-lines: single;
    -moz-box-lines: single;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: none;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    box-sizing: border-box;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding-top: 7px;
    padding-bottom: 8px
  }

  .list-block .item-inner {
    padding-right: 15px;
    position: relative;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 7px;
    min-height: 44px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    overflow: hidden;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -ms-flex-item-align: stretch;
    -webkit-align-self: stretch;
    align-self: stretch
  }

  .list-block .item-inner:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: auto;
    top: auto;
    height: 1px;
    width: 100%;
    background-color: #c8c7cc;
    display: block;
    z-index: 15;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%
  }
</style>
