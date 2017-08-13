/* ============
 * Mutations for the notification module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */
/* eslint-disable */
import { ADD_NOTIF, RM_NOTIF } from './mutation-types';

export default {
  [ADD_NOTIF](state, notification) {
    console.log('ADD_NOTIF Mutations for the notification module: ');
    console.log(notification);
    state.push(notification);
  },

  [RM_NOTIF](state, notification) {
    console.log('RM_NOTIF Mutations for the notification module: ');
    console.log(notification);
    state.$remove(notification);
  },
};
