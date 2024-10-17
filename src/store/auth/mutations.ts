import { MutationTree } from 'vuex';

import { encode } from '@/utils/custom-enc-dec';

import {
  AuthStateI,
  BusinessI,
} from './state';

export const mutations: MutationTree<AuthStateI> = {
  setBusinesses(state: AuthStateI, payload: BusinessI[]) {
    const businesses = encode(payload);
    localStorage.setItem('businesses', businesses);
    state.businesses = payload;
  },
  setToken(state: AuthStateI, payload: string) {
    state.token = payload;
  },
};
