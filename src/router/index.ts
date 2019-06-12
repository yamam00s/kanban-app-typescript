import Vue from 'vue';
import Router from 'vue-router';
import routes from './router';

Vue.use(Router);

// TSのエラー解消が必要
export default new Router({ routes });