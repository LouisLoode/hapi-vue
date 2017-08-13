<template>
  <v-layout>
    <h1>
      Register
    </h1>
    <b-form @submit.prevent="register(user)">
      <div class="form-group">
        <div class="input-group">
          <b-form-input
            v-model="user.username"
            type="text"
            placeholder="Username"
            class="form-control"
          ></b-form-input>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <b-form-input
            v-model="user.email"
            type="email"
            placeholder="Email"
            class="form-control"
          ></b-form-input>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <b-form-input
            v-model="user.password"
            type="password"
            placeholder="Password"
            class="form-control"
          ></b-form-input>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <b-form-input
            v-model="user.password2"
            type="password"
            placeholder="Confirm password"
            class="form-control"
          ></b-form-input>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">
          Register
        </button>
      </div>
    </b-form>
    <div>
      Already got an account?
      <router-link :to="{ name: 'login.index' }">Login</router-link>
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Register Index Page
   * ============
   *
   * Page where the user can register.
   */

  import authService from '@/services/auth';

  export default {

    data() {
      return {
        user: {
          username: null,
          email: null,
          password: null,
          password2: null,
        },
      };
    },

    methods: {
      register(user) {
        authService.register(user);
      },
    },

    components: {
      VLayout: require('@/layouts/minimal.vue'),
    },
  };
</script>
