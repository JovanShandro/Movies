<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">
      Sorry, the page you were searching for does not exist...<strong>(404)</strong>
    </p>
    <router-link to='/' tag="button" class="back">Go Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
