import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

// 状態`Auth`と状態`Board`をVuexのstateで一元管理できるようにする
const state = {
  auth: { // 状態`Atuh`
    token: null, // `tokenはnullで初期化`
    userId: null // `userIdはnullで初期化`
  },
  board: { // 状態`Board`
    lists: [] // 状態`TaskListは空で初期化`
  }
}
export default new Vuex.Store({
  state, // 定義したstateを`state`オプションに指定
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
