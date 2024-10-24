import { ActionTree, ActionContext } from 'vuex';

import { usersClient } from '@/http-client';
import { snakeToCamel } from '@/utils';

import { RootStateI } from '../state';
import { AuthStateI, SendCodeI } from './state';

export const actions: ActionTree<AuthStateI, RootStateI> = {
  async sendcode(
    context: ActionContext<AuthStateI, RootStateI>,
    payload: SendCodeI,
  ) {
    await usersClient.post('api/auth/sendcode', payload);
  },
  async validatecode(
    context: ActionContext<AuthStateI, RootStateI>,
    payload: SendCodeI,
  ) {
    const { data } = await usersClient.post('api/auth/validatecode', payload);
    const {
      businesses,
      permissions,
      token,
      user,
    } = data;
    context.commit('setBusinesses', snakeToCamel(businesses));
    context.commit('setPermissions', snakeToCamel(permissions));
    context.commit('setToken', token);
    context.commit('setUser', snakeToCamel(user));
    if (payload.app) {
      window.location.href = `/app?app=${payload.app}`;
      return;
    }
    window.location.href = '/app';
  },
  logout(context: ActionContext<AuthStateI, RootStateI>) {
    context.commit('setBusinesses', []);
    context.commit('setPermissions', []);
    context.commit('setToken', '');
    context.commit('setUser', null);
    window.location.href = '/';
  },
};
