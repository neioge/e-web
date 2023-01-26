<template>
  <div class="screen">
    <p v-for="(menu, index) in screenInfo" :key="index">
     画面ID : {{menu.screenId}}
    </p>
  </div>
</template>

<script>
import {readJson} from '@/utils/getScreenInfo.js'

export default{
  name:'GScreen',
  data: function(){
    return{
      path:  this.$route.path,
      splitedURLStrings: [],
      screenInfo:[]
    }
  },
  mounted(){
    this.screenInfo = readJson(this.$route.params.id);
  },
}
</script>

<style>

</style>