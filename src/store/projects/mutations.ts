import { MutationTree } from 'vuex';

import { decode, encode } from '@/utils/custom-enc-dec';

import {
  ProjectStateI,
} from './state';

export const mutations: MutationTree<ProjectStateI> = {
  setToken(state: ProjectStateI, payload: string) {
    if (!payload) {
      localStorage.removeItem('token');
      state.token = '';
      return;
    }
    const { value } = decode(payload);
    localStorage.setItem('token', payload);
    state.token = value as unknown as string;
  },
};
