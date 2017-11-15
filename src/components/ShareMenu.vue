<template>
<div v-bind:class="{ show: showShare ,'share-menu' : true} ">
    <div class="wrapperC wrapper_307">
      <div class="boxC box_1126"></div>
      <div class="wrapperC wrapper_308">
        <div class="boxC box_1125"></div>
        <div class="textC text_1124" ><p class="text-content">分享到</p></div>
        <div class="wrapperC wrapper_312">
          <div class="boxC box_1123"></div>
          <div class="imageC image_127"><img src="http://img.xiaopiu.com/userImages/img16015c34f73820.png"></img></div>
        </div>
        <div class="wrapperC wrapper_311">
          <div class="boxC box_1122"></div>
          <div class="imageC image_126"><img src="http://img.xiaopiu.com/userImages/img16315c34f73820.png"></img></div>
        </div>
        <div class="wrapperC wrapper_310">
          <div class="boxC box_1121"></div>
          <div class="imageC image_125"><img src="http://img.xiaopiu.com/userImages/img16115c34f73820.png"></img></div>
        </div>
        <div class="wrapperC wrapper_309">
          <div class="boxC box_1120"></div>
          <div class="imageC image_124"><img src="http://img.xiaopiu.com/userImages/img16215c34f73820.png"></img></div>
        </div>
        <div class="textC text_1119"><p class="text-content">微信</p></div>
        <div class="textC text_1118"><p class="text-content">朋友圈</p></div>
        <div class="textC text_1117"><p class="text-content">QQ</p></div>
        <div class="textC text_1116"><p class="text-content">QQ空间</p></div>
        <div class="boxC box_1115"></div>
        <div class="textC text_1114" v-on:click="hidden"><p class="text-content">取消分享</p></div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: ['showShare'],
  data () {
    return {
    }
  },
  methods: {
    toReceiveRedpacket: function(){
    },
    hidden: function(){
      this.showShare = false
      console.log(this.showShare)
    }
  },
  computed: {
  isShow: function () {
    return this.showShare
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../static/css/common.css';
@import '../../static/css/ShareMenu.css';
@import '../../static/icon/iconfont.css';
div.share-menu.show{
  display: block;
}
div.share-menu{
  display: none;
}

</style>
