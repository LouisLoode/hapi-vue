<template>
  <div>
    <ul class="nav navbar-nav">
      <router-link
        :to="{ name: 'home.index' }"
        active-class="active"
        class="nav-item"
        tag="li"
      >
        <a>
          Home
        </a>
      </router-link>
    </ul>
    <ul class="nav navbar-nav">
      <router-link
        :to="{ name: 'account.index' }"
        active-class="active"
        class="nav-item"
        tag="li"
      >
        <a>
          Account
        </a>
      </router-link>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <a href="#" @click.prevent="logout">
          <i class="fa fa-sign-out"></i> Deconnexion
        </a>
      </li>
    </ul>

    <div class="container">
      <!-- Content will be placed here -->
      <slot></slot>
    </div>

  </div>
</template>

<script>
  /* ============
   * Default Layout
   * ============
   *
   * Used for the home and account pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  import authService from '@/services/auth';

  export default {
    methods: {
      logout() {
        authService.logout();
      },
    },
  };

</script>
