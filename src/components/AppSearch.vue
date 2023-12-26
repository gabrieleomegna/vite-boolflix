<template>
    <div class="container py-5 text-center">
        <input type="text" name="input-movies-search" id="input-movies-search" v-model="searchedString" @keyup.enter="getCompleteSearch (store.getMovies(searchedString), store.getSeries(searchedString))">
        <button id="button-movies-search" @click="store.getMovies(searchedString)">Invia</button>
    </div>
</template>
<script>
    import { store } from '../js/store';
    export default {
        data() {
            return {
                store,
                searchedString : '',
            }
        },
        methods: {
            getCompleteSearch (firstFunction, secondFunction) {
                firstFunction;
                secondFunction
            }
        }
    }
</script>
<style lang="scss" scoped>
    
</style>