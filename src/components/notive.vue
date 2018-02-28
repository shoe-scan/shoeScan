<template>
  <div class="modal">
    <div class="size-14 padding-left-20 cor-333 font-weight-bold text-align-l">
      商品到货会通过短信通知您
    </div>
    <div class="cor-666 text-align-l  padding-left-20">
      <span class="size-12">颜色:黑色</span>
      <span class="margin-left-15 size-12">尺码:230</span>
    </div>
    <div class="padding-15-0">
      <div class="dis-flex cor-666 padding-left-20 align-item-center">
        <div class="padding-right-15 size-12">数量</div>
        <div class="add-minus">-</div>
        <div class="notive-qty">1</div>
        <div class="add-minus">+</div>
      </div>
      <div class="dis-flex cor-666 padding-left-20 align-item-center">
        <div class="padding-right-15 size-12">手机号码</div>
        <input class="notive-mobile" type="tel" maxlength="11" placeholder="手机号码">
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .modal {
    width: 270px;
    position: absolute;
    z-index: 13500;
    left: 50%;
    margin-left: -135px;
    margin-top: 0;
    top: 50%;
    text-align: center;
    border-radius: 13px;
    background-color: #fff;
    z-index: 1111111;
  }

  .add-minus {
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin: 0 3px 0 0;
    text-align: center;
    background-color: #eee;
    border: 1px solid #d3d3d3;
  }

  .notive-qty {
    width: 60px;
    height: 30px;
    line-height: 30px;
    margin: 0 3px 0 0;
    text-align: center;
    background-color: #eee;
    border: 1px solid #d3d3d3;
  }

  .notive-mobile {
    height: 30px;
    line-height: 30px;
    margin: 0 3px 0 0;
    padding-left: 5px;
    width: 150px;
    font-size: 12px;
  }
</style>
