<template>
    <main class="container text-center">
        <article class="movie-card mb-3" v-for="movie in store.moviesList" :key="movie.id">
            <div>Titolo: {{ movie.title }}</div>
            <div>Titolo originale: {{ movie.original_title }}</div>
            <div>Lingua: {{ movie.original_language }}</div>
            <div>Voto: {{ movie.vote_average }}</div>
        </article>
    </main>
</template>
<script>
    import {store} from '../js/store.js';
    export default {
        data() {
            return {
                store
            }
        },
        created() {
            // this.store.getMovies()
        }
    }
</script>
<style lang="scss" scoped>
    
</style>