import { GetterTree } from 'vuex';
import { AuthStateI } from './state';
import { RootStateI } from '../state';

export const getters: GetterTree<AuthStateI, RootStateI> = {
  isAuthenticated: (state) => {
    const { token } = state;
    return !!token;
  },
};
