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
    window.location.href = '/app';
  },
};
