<template>
    <section class="tv-series-list">
        <h3>Tv-series:</h3>
        <CardSerie v-for="serie in store.seriesList" :key="serie.id" :singleSerie="serie"/>
    </section>
</template>
<script>
    import { store } from '../js/store';
    import CardSerie from './CardSerie.vue';
    export default {
        data() {
            return {
                store
            }
        },
        components: {
            CardSerie
        }
    }
</script>
<style lang="scss" scoped>
    
</style>