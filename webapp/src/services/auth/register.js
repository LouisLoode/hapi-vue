import Vue from 'vue';
import store from './../../store';

// When the request succeeds
const success = (token) => {
  store.dispatch('auth/login', token);
  Vue.router.push({
    name: 'home.index',
  });
};

// When the request fails
const failed = () => {
};

export default (user) => {
  Vue.$http.post('/auth/register', user)
    .then((response) => {
      success(response);
    })
    .catch((error) => {
      failed(error);
    });
};
