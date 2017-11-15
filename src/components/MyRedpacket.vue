<template>
  <div class="hello">
    <div class="boxC box_210"></div>
    <div class="imageC image_717"><img src="~@/assets/4-01.png"></img></div>
    <div class="imageC image_19"><img src="http://img.xiaopiu.com/userImages/img9156799f8280.png"></img></div>
    <div class="wrapperC wrapper_72 w-320">
      <div class="textC hL w-320 text_212" @click="toMyFitRedPacket">
        <p class="text-content">我的合体红包</p>
        <div class="r-icon"><i class="iconC icon_30 iconfont icon-chevron-right"></i></div>
        <div class="textC hR text_208"><p class="text-content">查看红包记录</p></div>
      </div>
    </div>


    <div class="wrapperC wrapper_71 w-320">
      <div class="textC hL text_209" @click="toInstructionMerge"><p class="text-content">红包合体说明</p></div>
      <div class="r-icon2"><i class="iconC icon_30 iconfont icon-chevron-right"></i></div>
      <div class="boxC box_207"></div>
    </div>
    <div class="wrapperC wrapper_70">
      <div class="textC hL text_206"><p class="text-content">兑换说明</p></div>
      <i class="iconC icon_28 material-icons">chevron_right</i>
    </div>
    <div class="textC text_244"><p class="text-content">信用分：100  ></p></div>
    <div class="boxC box_726"></div>
    <div class="textC hL text_725"><p class="text-content">一猫子</p></div>
    <i class="iconC icon_148 material-icons">chevron_right</i>
    <div class="boxC box_724"></div>
    <div class="textC hL text_723"><p class="text-content">13609902706</p></div>
    <div class="wrapperC w-320 h-60 wrapper_206 ">
      <div class="wrapperC h-60 wrapper_209">
        <div class="textC t-35  h-20 text_732"><p class="text-content">主红包</p></div>
        <div class="textC t-9 h-30 text_731"><p class="text-content">{{main_rp.toFixed(2)}}</p></div>
      </div>
      <div class="wrapperC h-60 wrapper_208">
        <div class="textC t-35  h-20 text_730"><p class="text-content">得到红包</p></div>
        <div class="textC  t-9 h-30 text_729"><p class="text-content">{{num_rp}}个</p></div>
      </div>
      <div class="wrapperC h-60 wrapper_207">
        <div class="textC t-35  h-20 text_728"><p class="text-content">合体次数</p></div>
        <div class="textC t-9 h-30 text_727"><p class="text-content">{{total_fit}}次</p></div>
      </div>
    </div>
    <div class="imageC image_63"><img src="http://img.xiaopiu.com/userImages/img9156799f8280.png"></img></div>

    <div class="textC text_832"><p class="text-content">兑换红包</p></div>

    <div class="textC text_835"><p class="text-content">分享红包</p></div>
    <div class="textC hL text_1958"><p class="text-content">通知群成员领取积分</p></div>
    <div class="textC text_1962"><p class="text-content">领取积分</p></div>
    <div class="imageC image_36"><img src="~@/assets/headImg.png"></img></div>
    <div class="textC text_2008"><p class="text-content">{{userName}}</p></div>
    <div class="textC text_2009"><p class="text-content">{{phone}}</p></div>
    <div class="wrapperC wrapper_961">
      <div class="boxC box_2016"></div>
      <div class="boxC box_2015"></div>
      <div class="boxC box_2012"></div>
      <div class="textC text_2011"><p class="text-content">ONE</p></div>
      <div class="textC text_834"><p class="text-content">点我合体</p></div>
    </div>
    <div class="b_myp">
      <div class="imageC image_718" @click="toRedPacketFit"><img src="~@/assets/5-01.png"></img></div>
      <div class="opt_item">
<!--         <div class="imageC image_719" @click="toScanCodeToast"><img src="~@/assets/6-01.png"></img></div>
        <div class="imageB image_720" @click="showShareMenu"><img src="~@/assets/6-02.png"></img></div>  -->
      </div>
<!--       <div class="textC text_833"><p class="text-content">分享红包就会得到合体红包，合体越多金额越大！</p></div> -->
    </div>
    <div class="back_shadow" v-show="isShow"></div>
    <div class="share_menu" v-show="isShow">

      <div class="title">分享到</div>

      <div class="btn_share-wrapper">
        <div class="share_item-wrapper weixin">
          <div class="wd-icon-wrapper">
            <img src="../../static/img/weixin_icon.png">
          </div>
          <p class="method_name">微信</p>
        </div>

        <div class="share_item-wrapper friends_circle">
          <div class="wd-icon-wrapper">
            <img src="../../static/img/friends_circle.png">
          </div>
          <p class="method_name">朋友圈</p>
        </div>

        <div class="share_item-wrapper qq">
          <div class="wd-icon-wrapper">
            <img src="../../static/img/qq.png">
          </div>
          <p class="method_name">QQ</p>
        </div>

        <div class="share_item-wrapper qq_zone">
          <div class="wd-icon-wrapper">
            <img src="../../static/img/qq_zone.png">
          </div>
          <p class="method_name">QQ空间</p>
        </div>

      </div>

      <div class="split-bar"></div>
      <div class="cancel-share">
        <span @click="hidden">取消分享</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        isShow: false,
        userName: '???',
        phone: '???????????',
        main_rp: 0,
        num_rp: 0,
        total_fit: 0
      }
    },
    mounted() {
      document.title = '我的红包';
      this.loadData();
      $.get("https://packet.uniteonline.cn/api/luckymoney/share?phone="+localStorage.phone + "&url="+window.location.href.split("#")[0] ,{},function(e){
      var data = e.data
      console.dir(e)
        // wx.config({
        //   debug: false, 
        //   appId: data.param.appId, 
        //   timestamp: data.param.timestamp, 
        //   nonceStr:  data.param.nonceStr, 
        //   signature: data.param.signature,
        //       jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"] // 功能列表，我们要使用JS-SDK的什么功能
        // });
        //         wx.ready(function(){
        //              wx.onMenuShareTimeline({
        //                 title: data.title, // 分享标题
        //                 link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        //                 imgUrl: data.imgUrl, // 分享图标
        //                 success: function () { 
        //                     // 用户确认分享后执行的回调函数
        //                 },
        //                 cancel: function () { 
        //                     // 用户取消分享后执行的回调函数
        //                 }
        //              });
                 


        //            wx.onMenuShareAppMessage({
        //                 title: data.title, // 分享标题
        //                 desc: '', // 分享描述
        //                 link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        //                 imgUrl: data.imgUrl, // 分享图标
        //                 type: '', // 分享类型,music、video或link，不填默认为link
        //                 dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        //                 success: function () { 
        //                 },
        //                 cancel: function () { 
        //                     // 用户取消分享后执行的回调函数
        //                 }
        //             });

        //      });
      });
    },
    methods: {
      showShareMenu: function () {
       // console.log(this.isShow)
     },
     hidden: function (){
    },
    toMyFitRedPacket() {
      this.$router.push('/RedpacketRecord2');
      // document.title = '我得到的红包';
    },
    toRedPacketFit() {
      hts_bus.$emit('openMsg', '分享红包将会获得更多合体红包哦');
      var that = this;
      setTimeout(function(){
          that.$router.push('/RedPacketFit');
      },2000)


      
    },
    toScanCodeToast() {
      this.$router.push('/ScanCodeToast');
    },
    toMiniProgram: function () {
      wx.miniProgram.navigateTo({url: '../brand/brand'})
    },
    shareFriendCircle: function () {
    },
    toInstructionMerge() {
      this.$router.push('/InstructionMerge');
    },
    loadData() {
      let option = {
        url: 'api/luckymoney/mypackets?phone=' + localStorage.phone,
        type: 'GET',
        success: function(result, status, xhr) {
          if(result.status_code === 0) {
            this.main_rp = result.data.main_packet;
            this.num_rp = result.data.packet_awarded_count;
            this.total_fit = result.data.compounded_count;
            this.userName = result.data.name;
            this.phone = result.data.phone;
          }
        }.bind(this),
        error() {
          // hts_bus.$emit('openMsg', '抢红包失败');
        }
      }

      myAjax(option);
    }
  },
}



    
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/common.css';
  @import '../../static/css/myRedpacket.css';
  @import '../../static/icon/iconfont.css';

  div.hello{
    height: 100%;
    background-color:#EBEBEB ;
  }
  div.share-menu.show{
    display: block;
  }
  div.share-menu{
    display: none;
  }
  .h-60{
    height: 6rem!important;
  }
  .h-30{
    height: 3rem!important;
  }
  .h-20{
    height: 2rem!important;
  }
  .t-9{
    top:0.9rem!important;
  }
  .t-35{
    top:3.5rem!important;
  }
  .r-icon{
    position: absolute;
    width:2.4rem;
    height: 2.4rem;
    left:28.9rem;
  }
  .r-icon2{
    position: absolute;
    width:2.4rem;
    height: 2.4rem;
    top: 1.5rem;
    left:29.4rem;
  }
  .opt_item{
    position: absolute;
    width: 25.6rem;
    height: 2.6rem;
    left: 3.1rem;
    top: 3.5rem;
  }
  .imageB img{
    top: 0;
    right: 0;
    word-break: break-all;
    text-align: center;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    transform-origin: 0% 0%;
    -webkit-transform-origin: 0% 0%;
    -webkit-font-smoothing: antialiased;
    z-index: 1;
  }
  .image_720{
    position: absolute;
    width:12.7rem;
    height:2.6rem;
    right: 0px;
  }

  .image_720 image{
    width:149.5px;
    height:30px;
    left:-0.5px;
  }
  .imageB img {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  .r-icon2 .icon_30{
    left:0;
  }
  .b_myp{
    position: absolute;
    top: 42.5rem;
  }
  .image_718{
    width: 25.6rem;
    height: 2.6rem;
    left: 3.1rem;
  }

  .image_719{
    width:12.7rem;
    height:2.6rem;
  }

  .share_item-wrapper.weixin{
    width: 4.5rem;
    height: 7rem;
    left: 3.1rem;
    position: absolute;
  }
  .share_item-wrapper.friends_circle{
    width: 4.5rem;
    height: 7rem;
    left: 9.9rem;
    position: absolute;
  }
  .share_item-wrapper.qq{
    width: 4.5rem;
    height: 7rem;
    left: 17.2rem;
    position: absolute;
  }
  .share_item-wrapper.qq_zone{
    width: 4.5rem;
    height: 7rem;
    left: 24.4rem;
    position: absolute;
  }


  .share_menu{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20rem;
    background: #fff;
    z-index: 999;
  }
  .share_menu .title{
    width: 100%;
    height: 4.8rem;
    line-height: 4.8rem;
    color: rgb(80, 80, 80);
    font-size: 1.3rem;
  }
  .split-bar{
    position: absolute;
    bottom:  5rem;
    width: 100%;
    height: 1px;
    background:rgb(217, 217, 217);
  }
  .cancel-share{
    position: absolute;
    width: 100%;
    height: 4.8rem;
    line-height: 4.8rem;
    color:rgb(153, 153, 153);
    font-size: 1.3rem;
    bottom: 0;
  }

  .wd-icon-wrapper{
    position: absolute;
    width: 4.5rem;
    height: 4.5rem;
    line-height: 4.5rem;
    background: rgb(153, 153, 153);
    border-radius: 50%;
  }
  .wd-icon-wrapper img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 2.5rem;
    height: 2.5rem;
  }
  .share_item-wrapper .method_name{
    position: absolute;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    color: rgb(80,80,80);
    bottom: 0;
    left: 50%;
    margin: 0;
    font-size: 1.2rem;
    transform: translate(-50%,0)   scale(0.92);
  }
  .back_shadow{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0,0.7);
    z-index: 2;
  }
</style>
