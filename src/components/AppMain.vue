<template>
    <main class="container text-center">
        <article class="mb-3" v-for="movie in store.moviesList" :key="movie.id">
            {{ movie.title }}
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