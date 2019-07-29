import * as types from './mutation-types';
import { MutationTree } from 'vuex';
import { TodoState } from '../types/state';

const mutations: MutationTree<TodoState> = {
  [types.AUTH_LOGIN] (state: any, payload:any) {
    state.auth = payload
  },

  [types.FETCH_ALL_TASKLIST] (state: any, payload: any) {
    // TODO
    throw new Error('FETCH_ALL_TASKLIST mutation should be implemented');
  },

  [types.ADD_TASK] (state: any, payload:any) {
    // TODO
    throw new Error('ADD_TASK mutation should be implemented');
  },

  [types.UPDATE_TASK] (state: any, payload:any) {
    // TODO
    throw new Error('UPDATE_TASK mutation should be implemented');
  },

  [types.REMOVE_TASK] (state: any, payload:any) {
    // TODO
    throw new Error('REMOVE_TASK mutation should be implemented');
  },

  [types.AUTH_LOGOUT] (state: any, payload:any) {
    // TODO
    throw new Error('AUTH_LOGOUT mutation should be implemented');
  },
}

export default mutations;
