/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */
/* eslint-disable */
import { STORE } from './mutation-types';

export default {
  [STORE](state, account) {
    console.log('Mutations for the account module: ');
    console.log(account);
    state.email = account.email;
    state.username = account.username;
    state.id = account.id;
  },
};
