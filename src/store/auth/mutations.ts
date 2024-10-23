import { MutationTree } from 'vuex';

import { encode } from '@/utils/custom-enc-dec';

import {
  AuthStateI,
  BusinessI,
  PermissionI,
  UserI,
} from './state';

export const mutations: MutationTree<AuthStateI> = {
  setBusinesses(state: AuthStateI, payload: BusinessI[]) {
    if (payload.length === 0) {
      localStorage.removeItem('businesses');
      state.businesses = [];
      return;
    }
    const businesses = encode(payload);
    localStorage.setItem('businesses', businesses);
    state.businesses = payload;
  },
  setPermissions(state: AuthStateI, payload: PermissionI[]) {
    if (payload.length === 0) {
      localStorage.removeItem('permissions');
      state.permissions = [];
      return;
    }
    const permissions = encode(payload);
    localStorage.setItem('permissions', permissions);
    state.permissions = payload;
  },
  setToken(state: AuthStateI, payload: string) {
    if (!payload) {
      localStorage.removeItem('token');
      state.token = '';
      return;
    }
    const token = encode(payload);
    localStorage.setItem('token', token);
    state.token = payload;
  },
  setUser(state: AuthStateI, payload: UserI) {
    if (!payload) {
      localStorage.removeItem('user');
      state.user = undefined;
      return;
    }
    const user = encode(payload);
    localStorage.setItem('user', user);
    state.user = payload;
  },
};
