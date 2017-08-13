<template>
  <v-layout>
    <h1>
      Login
    </h1>
    <b-form id="js-form-login" v-on:submit.prevent data-parsley-validate novalidate>
      <div class="form-group">
        <div class="input-group">
          <b-form-input
            v-model="user.email"
            id="email"
            type="email"
            placeholder="Email"
            class="form-control"
            required
          ></b-form-input>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <b-form-input
            v-model="user.password"
            id="password"
            type="password"
            placeholder="Password"
            class="form-control"
            required

          ></b-form-input>
        </div>
      </div>

      <div class="form-group">
        <button class="btn btn-primary">
          Login
        </button>
      </div>
    </b-form>
    <div>
      Don't have an account?
      <router-link :to="{ name: 'register.index' }">Register</router-link>
    </div>
  </v-layout>
</template>

<script>
/* eslint-disable */
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */
   /* eslint-disable */
  import authService from '@/services/auth';

  export default {
    data() {
      return {
        user: {
          email: null,
          password: null,
        },
      };
    },

    mounted() {
      window.$('#js-form-login').parsley().on('form:validated', () => {
        const errors = window.$('.parsley-error').length;
        if (!errors) {
          this.onLogin();
        }
      });
    },

    methods: {
      onLogin() {
        this.errors = null
        authService.login({
          email: this.user.email,
          password: this.user.password
        });
      },
    },

    components: {
      VLayout: require('@/layouts/minimal.vue'),
    },
  };
</script>
