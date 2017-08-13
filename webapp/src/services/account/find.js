import Vue from 'vue';
import accountTransformer from './../../transformers/account';
import store from './../../store';
/* eslint-disable */
// When the request succeeds
const success = (account) => {
  console.log('account in service');
  console.log(account);
  account = accountTransformer.fetch(account);
  console.log('after accountTransformer in service');
  console.log(account);
  store.dispatch('account/store', account);
};

// When the request fails
const failed = () => {
};

export default () => {
  Vue.$http.get('/auth/profile')
    .then((response) => {
      success(response);
    })
    .catch((error) => {
      failed(error);
    });
};
