// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/css/bootstrap.css'
//
// import App from './App'
//
// import router from './router'
//
// Vue.use(BootstrapVue)
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App },
// })
/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue'
import * as App from './App'

require('./bootstrap')

new Vue(App).$mount('#app')
