<template>
  <div class="container">
    <!-- Content will be placed here -->
    <div class="row h-100">
        <div class="col-sm-12 my-auto">
            <div class="w-50 mx-auto">
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
              <slot></slot>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  /* ============
   * Minimal Layout
   * ============
   *
   * Used for the register and login pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  export default {};
</script>
