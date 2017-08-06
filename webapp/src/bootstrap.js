/* ============
 * Bootstrap File
 * ============
 *
 * Will configure and bootstrap the application.
 */

import Vue from 'vue'
import Axios from 'axios'
// import VuexRouterSync from 'vuex-router-sync'
// import VueRouter from 'vue-router'
// import routes from './router'

/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 *
 * http://rc.vuejs.org/guide/
 */


Vue.config.debug = process.env.NODE_ENV !== 'production'


/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

// import authService from '@/services/auth';

Axios.defaults.baseURL = process.env.API_LOCATION
Axios.defaults.headers.common.Accept = 'application/json'

Axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      // authService.logout();
      console.log('401')
    }
  })

Vue.$http = Axios
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios
  },
})


/* ============
 * Vuex Router Sync
 * ============
 *
 * Effortlessly keep vue-Router and vuex store in sync.
 *
 * https://github.com/vuejs/vuex-router-sync/blob/master/README.md
 */

// import store from './store';

// store.dispatch('auth/check');


/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */


// Vue.use(VueRouter)
//
// export const router = new VueRouter({
//   mode: 'history',
//   routes,
// })

/* eslint-disable */
// VuexRouterSync.sync(store, router)
// Vue.router = router


/* ============
 * Vue i18n
 * ============
 *
 * Internationalization plugin of Vue.js.
 *
 * https://kazupon.github.io/vue-i18n/
 */
import VueI18n from 'vue-i18n'
import messages from './locale'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})


/* ============
 * jQuery
 * ============
 *
 * Require jQuery
 *
 * http://jquery.com/
 */
import jQuery from 'jquery'

window.$ = window.jQuery = jQuery


/* ============
 * Styling
 * ============
 *
 * Require the application styling.
 * Sass is used for this project.
 */
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(BootstrapVue)
// require('./assets/scss/app.scss')


/* ============
 * Validation
 * ============
 *
 * Require Parsley
 *
 */
import 'parsleyjs'
import 'parsleyjs/dist/i18n/fr'

/* ============
 * Time easy to read
 * ============
 *
 * Require Momentjs
 *
 */
window.moment = require('moment')
require('moment/locale/fr')
require('moment-timezone')

export default {
  // router,
  i18n,
}
