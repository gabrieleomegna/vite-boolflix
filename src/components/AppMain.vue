<template>
    <main class="container text-center">
        <section class="movie-list">
            <h3>Films:</h3>
            <article class="movie-card mb-3" v-for="movie in store.moviesList" :key="movie.id">
                <img :src="getImage(movie.poster_path)" alt="">
                <div>Titolo: {{ movie.title }}</div>
                <div>Titolo originale: {{ movie.original_title }}</div>
                <div>Lingua: {{ movie.original_language }}</div>
                <div><p>Voto: {{ changeValutationBase(movie.vote_average) }}/5</p></div>
            </article>
        </section>
        <section class="tv-series-list">
            <h3>Tv-series:</h3>
            <article class="single-serie-card mb-3"  v-for="singleSerie in store.seriesList" :key="singleSerie.id">
                <img :src="getImage(singleSerie.poster_path)" alt="">
                <div>Titolo: {{ singleSerie.name }}</div>
                <div>Titolo originale: {{ singleSerie.original_name }}</div>
                <div>Lingua: {{ singleSerie.original_language }}</div>
                <div><p>Voto: {{ changeValutationBase(singleSerie.vote_average) }}/5</p></div>
            </article>
        </section>
    </main>
</template>
<script>
    import {store} from '../js/store.js';
    export default {
        data() {
            return {
                store,
                basicImgUrl: 'http://image.tmdb.org/t/p/w342',
            }
        },
        methods: {
            getImage(urlEndPart) {
                return this.basicImgUrl + urlEndPart
            },

            changeValutationBase(voteToBeChanged) {
                return Math.round(voteToBeChanged / 2) 
            }
        },
        created() {
            // this.store.getMovies()
        }
    }
</script>
<style lang="scss" scoped>
    // img {
    //     width: 100px;
    // }
</style>