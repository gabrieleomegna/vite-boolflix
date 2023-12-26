import { reactive } from 'vue';
import axios from 'axios';
export const store = reactive ({
    moviesList:[],
    seriesList: [],
    moviesApiURL: 'https://api.themoviedb.org/3/search/movie',
    seriesApiURL: 'https://api.themoviedb.org/3/search/tv',
    
    getMovies(stringSearched) {
        axios.get(this.moviesApiURL, {
            params: {
              api_key: 'ba9e8ec0f12117585cafd5c4471b3e85',
              language: 'it-IT',
              query: stringSearched
            }
          })
          .then((response) => {
            console.log(response.data.results);
            this.moviesList = response.data.results
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    
    getSeries(serieSearched) {
        axios.get(this.seriesApiURL, {
            params: {
              api_key: 'ba9e8ec0f12117585cafd5c4471b3e85',
              language: 'it-IT',
              query: serieSearched
            }
          })
          .then((response) => {
            console.log(response.data.results);
            this.seriesList = response.data.results
          })
          .catch(function (error) {
            console.log(error);
          })
    }
});