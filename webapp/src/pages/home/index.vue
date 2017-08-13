<template>
  <v-layout>
    <b-form-input
      type="search"
      placeholder="What do you want to listen ? (Track, Artist, Style, ...)"
    ></b-form-input>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */
  export default {
    components: {
      VLayout: require('@/layouts/minimal.vue'),
    },
  };
</script>
