import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import { RootState } from '../types/state';

Vue.use(Vuex);

// 状態`Auth`と状態`Board`をVuexのstateで一元管理できるようにする
const state: RootState = {
  auth: {
    token: null,
    userId: null // `userIdはnullで初期化`
  },
  board: { // 状態`Board`
    lists: [] // 状態`TaskListは空で初期化`
  }
}
export default new Vuex.Store({
  // エラー消す
  state, // 定義したstateを`state`オプションに指定
  getters,
  // エラー消す
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
