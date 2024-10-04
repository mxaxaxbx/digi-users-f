import { MutationTree } from 'vuex';

import { AuthStateI } from './state';

export const mutations: MutationTree<AuthStateI> = {
  setToken(state: AuthStateI, payload: string) {
    state.token = payload;
  },
};
