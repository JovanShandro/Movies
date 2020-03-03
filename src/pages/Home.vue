<template>
  <div>
    <div class="container mt-5">
      <div class="jumbotron">
        <div class="container">
          <h1>
            <i class="fas fa-film mr-3"></i> Find your favourite movie here!
          </h1>
          <p>Use the search bar below</p>
          <input type="text" class="form-control" v-model="search" @keyup="get_movies" />
        </div>
      </div>
      <Movie-List />
    </div>
  </div>
</template>

<script>
import MovieList from "../components/MovieList.vue";

export default {
  components: {
    "Movie-List": MovieList,
  },
  data() {
    return {
      search: ""
    };
  },
  methods: {
    get_movies: function() {
      this.$store.dispatch("movies/load_movies", this.search);
    }
  }
};
</script>

<style>
</style>
