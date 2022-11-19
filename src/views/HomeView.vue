<template>
  <div class="home">
    <PfKey/>
    <HelloWorld msg="営業店WEB"/>
    <SubMenu/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import PfKey from '@/components/PfKey.vue'
import SubMenu from '@/components/SubMenuContainer.vue'

export default {
  name: 'HomeView',
  components: {
    PfKey,
    HelloWorld,
    SubMenu
  }
}
</script>
