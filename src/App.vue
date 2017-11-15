<template>
  <div id="app">
    <msg></msg>
    <router-view/>
  </div>
</template>

<script>
import Msg from '@/components/Msg.vue';
export default {
  name: 'app',
  components: {
    Msg
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto 0 auto;
  height: 100%;

}
html,body{
  height: 100%;
  margin: 0;
  
}
html{
  font-size: 10px;
}
.w-320{
  width: 32rem!important;
}
.h-568{
  height: 56.8rem!important;
}

</style>
