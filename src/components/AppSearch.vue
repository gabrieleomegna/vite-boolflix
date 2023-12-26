<template>
    <div class="container py-5 text-center">
        <input type="text" name="input-movies-search" id="input-movies-search" v-model="searchedString" @keyup.enter="store.getMovies(searchedString)">
        <button id="button-movies-search">Invia</button>
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
        }
    }
</script>
<style lang="scss" scoped>
    
</style>