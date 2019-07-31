import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';
import routes from './router';
import { authorizeToken } from './guards'
Vue.use(Router);

const router = new Router({ routes })
router.beforeEach(authorizeToken)

export default router