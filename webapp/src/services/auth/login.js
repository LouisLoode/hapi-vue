/* eslint-disable */

import Vue from 'vue';
import accountService from './../account';
import store from './../../store';

// When the request succeeds
const success = (response) => {
  store.dispatch('auth/login', response.data);
  accountService.find();
  Vue.router.push({
    name: 'account.index',
  });
};

// When the request fails
const failed = (error) => {
  console.log('error ----');
  console.log(error);
  console.log('ça a fail !');
};

export default (user) => {
  Vue.$http.post('/auth/login', user)
  .then((response) => {
    console.log('response in then', response);
    success(response);
  })
  .catch((error) => {
    console.log('error in catch', error);
    failed(error);
  });
};
