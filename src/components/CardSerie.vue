<template>
    <article class="single-serie-card mb-3">
        <img :src="singleSerie.poster_path ? getImage(singleSerie.poster_path) : getImage(singleSerie.backdrop_path)" alt="">
        <div>Titolo: {{ singleSerie.name }}</div>
        <div>Titolo originale: {{ singleSerie.original_name }}</div>
        <div>Lingua: {{ singleSerie.original_language }}</div>
        <div><p>Voto: {{ changeValutationBase(singleSerie.vote_average) }}/5</p></div>
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
        'singleSerie'
    ]
}
</script>
<style lang="scss" scoped>
    
</style>