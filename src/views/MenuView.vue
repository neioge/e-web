<template>
    <div class="home">
        <PfKey/>
        <HelloWorld msg="業務メニュー"/>
        <GMenu/>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import GMenu from '@/components/GuidanceMenuContainer.vue'
import PfKey from '@/components/PfKey.vue'

export default {
    name: 'MenuView',
    components: {
        PfKey,
        HelloWorld,
        GMenu
    }
}
</script>