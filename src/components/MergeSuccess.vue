<template>
<div class="hello">
  <div class="wrapperC wrapper_387">
    <div class="textC text_1420 tB"><p class="text-content">红包合体</p></div>
    <i class="iconC icon_185 iconfont icon-more_horiz"></i>

      <i @click="$router.back()" class="iconC icon_194 iconfont icon-chevronleft"></i>
  </div>
  <router-link to="RedpacketMerge">
      <div class="textC text_1433"><p class="text-content">继续合体</p></div>
  </router-link>

  <div class="textC text_1434 tB"><p class="text-content">合体成功！</p></div>
  <div class="textC text_3233"><p class="text-content">游戏规则</p></div>
  <div class="textC text_3234"><p class="text-content">常见问题</p></div>
  <div class="boxC box_3235"></div>
  <div class="textC text_3236"><p class="text-content">西安万达one出品</p></div>
  <router-link to="MyRedpacket">
      <div class="textC text_3237"><p class="text-content">返回首页</p></div>
  </router-link>
  <div class="imageC image_698"><img src="http://img.xiaopiu.com/userImages/img37215f85f73e70.png"></img></div>
  <div class="textC text_1425"><p class="text-content">360元<br />
  主红包</p></div>
  <div class="textC text_3427"><p class="text-content">跟9个好友合体9次，红包面值增加260元</p></div>
  <div class="textC text_3428"><p class="text-content">邀请好友合体红包能变大</p></div>
</div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../static/css/common.css';
@import '../../static/css/mergeSuccess.css';
@import '../../static/icon/iconfont.css';
div.hello{
  height: 100%;
  background-color:#EBEBEB ;
}
</style>
