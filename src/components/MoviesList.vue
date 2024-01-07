<template>
    <section class="movies-list">
        <h3>Films</h3>
        <CardMovie v-for="movie in store.moviesList" :key="movie.id" :singleMovie="movie"/>
    </section>
</template>
<script>
    import { store } from '../js/store';
    import CardMovie from './CardMovie.vue'
    export default {
        data() {
            return {
                store
            }
        },
        components: {
            CardMovie
        }
    }
</script>
<style lang="scss">
    
</style>