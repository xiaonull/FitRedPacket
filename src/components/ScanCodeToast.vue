<template>
  <div class="toast">
    <div class="close">
      <div class="v_bar"></div>
      <div class="h_bar"></div>
    </div>
    <p class="instruction_adv">跳转说明及广告</p>
    <div class="scan_code">
      <p>扫描二维码进入小程序</p>
      <img src="http://img.xiaopiu.com/images/defaultImg-7ee6105b17.png">
    </div>
  </div>
</template>

<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.0.js"></script>
<script>

  export default {
    name: 'ScanCodeToast',
    data () {
      return {
        msg: ''
      }
    },
    mounted() {
      if(this.$router.history.current.fullPath === '/ScanCodeToast') {
        document.title = '红包兑换';
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/common.css';
  @import '../../static/css/index.css';
  @import '../../static/icon/iconfont.css';
  .toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 25.2rem;
    height: 44.9rem;
    background-image: url(http://img.xiaopiu.com/userImages/img13215f9a2c4b38.png) ;
    background-size: 25.2rem 44.9rem;
    border-radius: 3.1rem;
  }
  .instruction_adv{
    font-size: 18px;
    line-height: 150%;
    color: #fff;
  }
  .close{
    position: absolute;
    width: 4.9rem;
    height: 4.8rem;
    top:0;
    right: 0;
    background-color: rgba(153, 153, 153, 1);
    border-radius: 50%;
    transform: translate(15%,-40%) rotate(225deg);
  }

  .close .v_bar{
    position: absolute;
    left: 50%;
    top: -0.3rem;
    transform: translate(-20%,0);
    background: #fff;
    width: 0.5rem;
    height: 5.1rem;
  }
  .close .h_bar{
    position: absolute;
    top: 50%;
    transform: translate(0,-60%);
    background: #fff;
    width: 4.8rem;
    height: 0.5rem;
  }
  .scan_code{
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    bottom: 1.3rem;
    color: #fff;
    font-size: 1.4rem;
  }
</style>
