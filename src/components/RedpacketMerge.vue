<template>
<div class="hello">
  <div class="wrapperC wrapper_284">
    <div class="textC text_1050 tB"><p class="text-content">红包合体</p></div>
    <i class="iconC icon_175 iconfont icon-more_horiz"></i>
    <i @click="$router.back()" class="iconC icon_193 iconfont icon-chevronleft"></i>
  </div>
  <div class="textC text_1266"><p class="text-content">游戏规则</p></div>
  <div class="textC text_1265"><p class="text-content">常见问题</p></div>
  <div class="boxC box_1264"></div>
  <div class="textC text_1263"><p class="text-content">西安万达one出品</p></div>
  <div class="boxC box_1326"></div>
  <div class="boxC box_1325"></div>
  <div class="textC text_1324"><p class="text-content">ONE</p></div>
  <i class="iconC icon_183 iconfont icon-add"></i>
  <router-link to="MergeSuccess">
      <div class="textC text_1409"><p class="text-content">开始合体</p></div>
  </router-link>
  <router-link to="MyRedpacket">
     <div class="textC text_2056"><p class="text-content">返回首页</p></div>
  </router-link>
  <div class="textC text_3249"><p class="text-content">失败示例1</p></div>
  <div class="textC text_3401"><p class="text-content">终极示例</p></div>
  <div class="textC text_3424"><p class="text-content">失败示例2</p></div>
  <div class="imageC image_697"><img src="http://img.xiaopiu.com/userImages/img37215f85f73e70.png"></img></div>
  <div class="imageC image_700"><img src="http://img.xiaopiu.com/userImages/img37315f85fceb90.png"></img></div>
  <div class="textC text_1323"><p class="text-content">350元<br />
  主红包</p></div>
  <div class="textC text_1362"><p class="text-content">10元 <br />
  合体红包</p></div>
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
@import '../../static/css/redpacketMerge.css';
@import '../../static/icon/iconfont.css';

</style>
