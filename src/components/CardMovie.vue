<template>
    <article class="movie-card mb-3">
        <img :src="singleMovie.poster_path ? getImage(singleMovie.poster_path) : getImage(singleMovie.backdrop_path)" alt="">
        <div>Titolo: {{ singleMovie.title }}</div>
        <div>Titolo originale: {{ singleMovie.original_title }}</div>
        <div>Lingua: {{ singleMovie.original_language }}</div>
        <div><p>Voto: {{ changeValutationBase(singleMovie.vote_average) }}/5</p></div>
    </article>
</template>
<script>
    export default {
        data() {
            return {
                basicImgUrl: 'http://image.tmdb.org/t/p/w342',
            }
        },
        methods:{
            getImage(urlEndPart) {
                return this.basicImgUrl + urlEndPart
            },
            changeValutationBase(voteToBeChanged) {
                return Math.round(voteToBeChanged / 2) 
            }
        },
        props : [
            'singleMovie'
        ]
    }
</script>
<style lang="scss" scoped>
    
</style>