<template>
    <main class="container text-center">
        <MoviesList/>
        <SeriesList/>
    </main>
</template>
<script>
    import {store} from '../js/store.js';
    import MoviesList from './MoviesList.vue';
import SeriesList from './SeriesList.vue';
    export default {
        components: {
    MoviesList,
    SeriesList
},
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