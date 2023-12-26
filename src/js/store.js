import { reactive } from 'vue';
import axios from 'axios';
export const store = reactive ({
    moviesList:[],
    apiURL: 'https://api.themoviedb.org/3/search/movie',
    getMovies(stringSearched) {
        axios.get(this.apiURL, {
            params: {
              api_key: 'ba9e8ec0f12117585cafd5c4471b3e85',
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
    }
});