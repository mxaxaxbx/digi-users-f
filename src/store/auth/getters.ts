import { GetterTree } from 'vuex';

import { decode } from '@/utils/custom-enc-dec';

import { AuthStateI, UserI } from './state';
import { RootStateI } from '../state';

export const getters: GetterTree<AuthStateI, RootStateI> = {
  isAuthenticated: (state) => {
    const user = localStorage.getItem('user');
    return !!user;
  },
  user: (state) => {
    const encodedUser = localStorage.getItem('user');
    if (!encodedUser) return state.user;
    const u = decode(encodedUser).value as any;
    const user: any = {};
    Object.keys(u).forEach((key) => {
      // convert the first letter of the key to lowercase
      const newKey = key.charAt(0).toLowerCase() + key.slice(1);
      user[newKey] = u[key];
    });
    return user as UserI;
  },
};
