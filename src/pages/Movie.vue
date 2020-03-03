<template>
  <div class="movie" v-if="movie!=null">
    <!-- google font link -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"/>
    <!-- if movie is defined -->
    <v-style v-if="movie != undefined">
      body {
        background: #0F2027; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
      .card-body {
        background: url("https://image.tmdb.org/t/p/w600_and_h900_bestv2{{movie.backdrop_path.toString()}}") no-repeat center center;
        background-size: cover;
      }
    </v-style>
    <!-- if movie is not defined -->
    <v-style v-else>
      body {
        background: #343a40;
      }
    </v-style>

    <!-- if movie is defined -->
    <div v-if="movie != undefined" class="card">
      <div class="card-img-body">
        <img
          class="card-img"
          :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+ movie.poster_path"
          alt="Card image cap"
        />
      </div>
      <div class="card-body">
        <h4 class="card-title">{{ movie.original_title }}</h4>
        <p class="card-text mb-auto">{{ movie.overview }}</p>
        <router-link
          href="#"
          class="mt-auto btn btn-outline-light align-self-start mb-1"
          to="/"
          exact
        >Back</router-link>
      </div>
    </div>
    <!-- if undefined -->
    <div v-else class="wrapper">
      <i class="fas fa-exclamation-triangle"></i>
      <br />
      <h5>
        This webpage does not make use of local storage or of a database to save the data,
        so refreshing the page results in a loss of all the information. Click the button
        below to return to the home page.
      </h5>
      <router-link class="btn btn-outline-danger" to="/">
        <strong>Go Back</strong>
      </router-link>
    </div>
  </div>
  <div v-else>
    {{ redirect() }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
      movie: null
    };
  },
  computed: {
      ...mapGetters('movies', ['get_by_id']),
  },
  created() {
    this.movie = this.get_by_id(this.id);
  },
  methods: {
      redirect() {
          this.$router.push('/pagenotfound');
      }
  }
};
</script>

<style>
</style>