<template>
  <v-layout>
    <h1>
      My Account
    </h1>
    <div>
      <table class="table table-striped">
        <thead>
        <tr>
          <th>
            Id
          </th>
          <th>
            Username
          </th>
          <th>
            Email
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            {{$store.state.account.id}}
          </td>
          <td>
            {{$store.state.account.username}}
          </td>
          <td>
            {{$store.state.account.email}}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Account Index Page
   * ============
   *
   * Page where the user can view the account information.
   */

  export default {
    components: {
      VLayout: require('@/layouts/default.vue'),
    },
  };
</script>
