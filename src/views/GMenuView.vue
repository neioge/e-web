<template>
    <div class="Menu">
        <PfKey/>
        <TitleContainer msg="業務メニュー"/>
        <GMenu/>
    </div>
</template>

<script>
import TitleContainer from '@/components/TitleContainer.vue'
import GMenu from '@/components/GuidanceMenuContainer.vue'
import PfKey from '@/components/PfKey.vue'

export default {
    name: 'MenuView',
    components: {
        PfKey,
        TitleContainer,
        GMenu
    }
}
</script>

<style scoped>
</style>