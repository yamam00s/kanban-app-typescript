import * as types from './mutation-types';
import { Auth, List, Task } from '../api/index';
import { ActionTree } from "vuex";
import { TodoState, RootState } from '../types/state';

const actions: ActionTree<TodoState, RootState> = {
  login:  ({ commit }) => {
    // TODO
    throw new Error('login action should be implemented');
  },

  fetchLists: ({ commit }) => {
    // TODO
    throw new Error('fetchLists action should be implemented');
  },

  addTask: ({ commit }) => {
    // TODO
    throw new Error('addTask action should be implemented');
  },

  updateTask: ({ commit }) => {
    // TODO
    throw new Error('updateTask action should be implemented');
  },

  removeTask: ({ commit }) => {
    // TODO
    throw new Error('removeTask action should be implemented');
  },

  logout: ({ commit }) => {
    // TODO
    throw new Error('logout action should be implemented');
  }
}

export default actions;
