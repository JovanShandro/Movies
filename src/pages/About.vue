<template>
  <div class="slider">
    <link
      href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap"
      rel="stylesheet"
    />
    <link href="https://fonts.googleapis.com/css?family=Alata&display=swap" rel="stylesheet" />
    <h1 class="text-center">About The Project</h1>
    <p>
      <em>This is my first project while learning the Vue js framework.</em> In the home component you can search for movies from the TDMB database based on their title. For movies with a long description you can press read more to be 'redirected' to a page with the full description of the movie if you are interested in it.
    </p>
    <p>
      The packages used include
      <em>vue-router</em>,
      <em>vue-awesome</em>,
      <em>bootstrap-vue</em> and
      <em>vuex</em>,
      <em>axios</em> etc.
      The program does not make use of a database so every time one of the show pages is refreshed
      the data is lost and a warning message is displayes which kindly asks you to return to the
      home page also providing a small explanation to why this happens.
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eligendi. Beatae quod adipisci quaerat vel illum officia doloremque obcaecati. Odit sequi hic et. In saepe, error veritatis id maiores ducimus, illum debitis dolorem labore, assumenda animi rem porro ea consectetur.</p>
  </div>
</template>

<script>
export default {
};
</script>

<style>
</style>