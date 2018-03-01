/**
 * createQRCode 创建二维码
 * Author chen.wj
 * Create: 2018/2/28
 */
export default {
  create(data){
    // 创建窗口
    let _outHtml = `
    <div class="qrcode-content">
      <div class="qrcode-scan-content" style="text-align: center">
        <div class="qrcode-scan" id="qrCodeDom" ref="qrCodeDom"></div>
        <div>订单二维码，请出示给店员</div>
      </div>
      <div class="qrcode-footer">
          <span class="qrcode-close" id="qrcodeClose"></span>
        </div>
    </div>`;
    let _div = document.createElement('div');
    _div.id = 'qrCodeModal';
    _div.className = 'qrcode-modal';
    document.body.appendChild(_div);
    document.getElementById('qrCodeModal').innerHTML = _outHtml;
    data['chenwenjin'] = "chenwenjin";

    // 初始化二维码
    let _outData = JSON.stringify(data),
      qrCode = new QRCode("qrCodeDom", {
        width: 220,
        height: 220,
        correctLevel: QRCode.CorrectLevel.H
      });
    qrCode.clear(); // 清除代码
    qrCode.makeCode(_outData); // 生成另外一个二维码

    // 删除事件
    document.getElementById("qrcodeClose").onclick = ()=>{
      document.body.removeChild(document.getElementById('qrCodeModal'));
    }
  }
}
