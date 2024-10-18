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
    const businesses = encode(payload);
    localStorage.setItem('businesses', businesses);
    state.businesses = payload;
  },
  setPermissions(state: AuthStateI, payload: PermissionI[]) {
    const permissions = encode(payload);
    localStorage.setItem('permissions', permissions);
    state.permissions = payload;
  },
  setToken(state: AuthStateI, payload: string) {
    const token = encode(payload);
    localStorage.setItem('token', token);
    state.token = payload;
  },
  setUser(state: AuthStateI, payload: UserI) {
    const user = encode(payload);
    localStorage.setItem('user', user);
    state.user = payload;
  },
};
