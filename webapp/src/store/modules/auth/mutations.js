/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */
/* eslint-disable */
import Vue from 'vue';
import {
  CHECK,
  LOGIN,
  LOGOUT,
} from './mutation-types';

export default {
  [CHECK](state) {
    state.authenticated = !!localStorage.getItem('token');
    if (state.authenticated) {
      Vue.$http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
  },

  [LOGIN](state, user) {
    state.authenticated = true;
    localStorage.setItem('token', user.token);
    Vue.$http.defaults.headers.common.Authorization = `Bearer ${user.token}`;
  },

  [LOGOUT](state) {
    state.authenticated = false;
    localStorage.removeItem('token');
    Vue.$http.defaults.headers.common.Authorization = '';
  },
};
