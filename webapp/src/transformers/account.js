/* eslint-disable */

/* ============
 * Account Transformer
 * ============
 *
 * The transformer for the account.
 */

import Transformer from './transformer';

export default class AccountTransformer extends Transformer {
  /**
   * Method used to transform a fetched account
   *
   * @param account The fetched account
   *
   * @returns {Object} The transformed account
   */
  static fetch(account) {
    console.log('in fetch');
    console.log(account);
    const user = account.data.data;
    return {
      email: user.email,
      username: user.username,
      id: user.id,
    };
  }

  /**
   * Method used to transform a send account
   *
   * @param account The account to be send
   *
   * @returns {Object} The transformed account
   */
  static send(account) {
    return {
      email: account.email,
      username: account.username,
      id: account.id,
    };
  }
}
