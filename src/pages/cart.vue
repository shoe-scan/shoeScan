<template>
  <div>
    <div class="list-block margin-bottom-10">
      <div class="item-bar">沈阳中兴TT</div>
      <div class="mint-cell-wrapper padding-0">
        <mt-cell-swipe
          class="app-cell-swipe"
          :right="[
          {
            content: 'Delete',
            style: { background: 'red', color: '#fff' }
          }
        ]">
          <div class="mint-cell-title">
            <label class="mint-checklist-label item-content padding-0">
              <div class="item-media">
                <span class="mint-checkbox">
                  <input type="checkbox" class="mint-checkbox-input" value="选项B">
                  <span class="mint-checkbox-core app-checkbox-core"></span>
                </span>
              </div>
              <div class="item-media padding-left-10">
                <img src="https://i1.ygimg.cn/pics/tata/2017/100552778/100552778_01_mb.jpg?3" width="70">
              </div>
              <div class="item-inner">
                <div class="item-title-row ">
                  <div class="cor-000"><span class="app-ld">邻店</span>滴胶/纺织物/牛皮革男休闲鞋</div>
                </div>
                <div class="item-title-row cor-999">
                  <div class="item-title">AA3T3537DU1CM7</div>
                  <div class="item-after app-sale-price">&yen;999</div>
                </div>
                <div class="item-title-row cor-999">
                  <div class="item-title">245 黑色</div>
                  <div class="item-after">x1</div>
                </div>
              </div>
            </label>
          </div>
        </mt-cell-swipe>
      </div>
      <div class="mint-cell-wrapper padding-0">
        <mt-cell-swipe
          class="app-cell-swipe"
          :right="[
          {
            content: 'Delete',
            style: { background: 'red', color: '#fff' }
          }
        ]">
          <div class="mint-cell-title">
            <label class="mint-checklist-label item-content padding-0">
              <div class="item-media">
                <span class="mint-checkbox">
                  <input type="checkbox" class="mint-checkbox-input" value="选项B">
                  <span class="mint-checkbox-core app-checkbox-core"></span>
                </span>
              </div>
              <div class="item-media padding-left-10">
                <img src="https://i1.ygimg.cn/pics/tata/2017/100552778/100552778_01_mb.jpg?3" width="70">
              </div>
              <div class="item-inner">
                <div class="item-title-row ">
                  <div class="cor-000"><span class="app-ld">邻店</span>滴胶/纺织物/牛皮革男休闲鞋</div>
                </div>
                <div class="item-title-row cor-999">
                  <div class="item-title">AA3T3537DU1CM7</div>
                  <div class="item-after app-sale-price">&yen;999</div>
                </div>
                <div class="item-title-row cor-999">
                  <div class="item-title">245 黑色</div>
                  <div class="item-after">x1</div>
                </div>
              </div>
            </label>
          </div>
        </mt-cell-swipe>
      </div>
      <div class="item-bar">
        <div class="item-title-row">
          <div class="item-title">
            <label class="mint-checklist-label item-content padding-left-0">
              <div class="item-media">
                <span class="mint-checkbox">
                  <input type="checkbox" class="mint-checkbox-input" value="选项B">
                  <span class="mint-checkbox-core app-checkbox-core"></span>
                </span>
              </div>
            </label>
          </div>
          <div class="item-title line-height-44">
            数量：<span class="app-sale-price">1</span>&nbsp;
            金额：<span class="app-sale-price">&yen;9999</span>
          </div>
          <div class="item-after">
            <button class="mint-button app-buy-btn" disabled>
              <label class="mint-button-text">立即购买</label>
            </button>
          </div>
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
    }
  }
</script>

<style scoped>
  .item-bar {
    position: relative;
    margin-top: -1px;
    background-color: #eee;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    padding-left: 10px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .list-block .item-content {
    box-sizing: border-box;
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
    position: relative;
    width: 100%;
    padding: 10px;
    min-height: 44px;
    box-sizing: border-box;
    display: block;
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
    transform-origin: 50% 100%;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }

  .list-block .item-title-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    line-height: 1.4;
  }

  .list-block .item-title {
    -webkit-flex-shrink: 1;
    -ms-flex: 0 1 auto;
    flex-shrink: 1;
    min-width: 0;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .list-block .item-after {
    white-space: nowrap;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    margin-left: auto;
    padding-left: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    max-height: 28px;
  }

  .app-ld {
    padding: 0 2px;
    background-color: #f06955;
    border-radius: 2px;
    color: #FFF;
  }

  .app-sale-price {
    color: #ef0717;
    font-size: 16px;
    font-weight: 600;
  }

  .app-buy-btn {
    padding: 0 15px;
    height: 46px;
    margin-top: -1px;
    display: inline-block;
    background-color: #f40;
    color: #fff;
    border-radius: 0;
  }

  .app-buy-btn:disabled {
    opacity: .6;
  }

  .list-block .swipeout {
    overflow: hidden;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d
  }

  .list-block .swipeout.deleting {
    -webkit-transition-duration: .3s;
    transition-duration: .3s
  }

  .list-block .swipeout.deleting .swipeout-content {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%)
  }

  .list-block .swipeout.transitioning .swipeout-actions-left a, .list-block .swipeout.transitioning .swipeout-actions-right a, .list-block .swipeout.transitioning .swipeout-content, .list-block .swipeout.transitioning .swipeout-overswipe {
    -webkit-transition: .3s;
    transition: .3s
  }

  .list-block .swipeout-content {
    position: relative;
    z-index: 10
  }

  .list-block .swipeout-overswipe {
    -webkit-transition: .2s left;
    transition: .2s left
  }

  .list-block .swipeout-actions-left, .list-block .swipeout-actions-right {
    position: absolute;
    top: 0;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex
  }

  .list-block .swipeout-actions-left a, .list-block .swipeout-actions-right a {
    padding: 0 30px;
    color: #fff;
    background: #c7c7cc;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    position: relative;
    left: 0
  }

  .list-block .swipeout-actions-left a:after, .list-block .swipeout-actions-right a:after {
    content: '';
    position: absolute;
    top: 0;
    width: 600%;
    height: 100%;
    background: inherit;
    z-index: -1
  }

  .list-block .swipeout-actions-left a.swipeout-delete, .list-block .swipeout-actions-right a.swipeout-delete {
    background: #ff3b30
  }

  .list-block .swipeout-actions-right {
    right: 0;
    -webkit-transform: translateX(100%);
    transform: translateX(100%)
  }

  .list-block .swipeout-actions-right a:after {
    left: 100%;
    margin-left: -1px
  }

  .list-block .swipeout-actions-left {
    left: 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%)
  }

  .list-block .swipeout-actions-left a:after {
    right: 100%;
    margin-right: -1px
  }

</style>
