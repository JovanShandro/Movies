<template>
  <div class="container movielist">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4" v-for="(movie, index) in movies" :key="index">
        <div class="card mt-4">
          <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+ movie.poster_path" />
          <div class="card-body">
            <h5 class="card-title text-center">{{ movie.original_title }} {{ movie.release_date }}</h5>
            <p>{{ movie.overview | snippet}}</p>
            <router-link
              v-if="movie.show"
              class="btn btn-outline-success"
              :to="'/show/' + movie.id"
              exact
            >Read More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
      ...mapGetters('movies', ["movies"]),
    // Movies() {
    //   return this.$store.movies.getters.movies;
    // }
  },
  filters: {
    snippet: str => {
      if (str.length > 100) {
        return str.slice(0, 100) + "...";
      } else {
        return str;
      }
    }
  }
};
</script>

<style>
</style>