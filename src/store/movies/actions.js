import { axios } from "boot/axios";

export function load_movies(context, payload) {
  axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=" + process.env.API_KEY + "&query=" +
        payload
    )
    .then(response => {
      var data = response.data.results.filter(
        movie => movie.poster_path !== null && movie.overview.length >= 50
      );
      // add show property to each
      data.forEach(elem => {
        if (elem.overview.length < 100) {
          elem.show = false;
        } else {
          elem.show = true;
        }
      });
      context.commit("set_movies", data);
    })
    .catch(err => {
      console.log("Could not read from api", err);
    });
}
