<template>
    <div class="GScreen">
        <PfKey/>
        <TitleContainer msg="業務画面"/>
        <GScreen/>
    </div>
</template>

<script>
import TitleContainer from '@/components/TitleContainer.vue'
import GScreen from '@/components/GScreenContainer.vue'
import PfKey from '@/components/PfKey.vue'

export default {
    name: 'GScreenView',
    components: {
        PfKey,
        TitleContainer,
        GScreen
    }
}
</script>

<style scoped>
</style>