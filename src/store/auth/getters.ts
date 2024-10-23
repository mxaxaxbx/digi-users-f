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
    if (!encodedUser) return null;
    const { value } = decode(encodedUser);
    return value as UserI;
  },
};
