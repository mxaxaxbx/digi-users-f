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
    const { data } = await usersClient.post('api/auth/validatecodev2', payload);
    context.commit('setToken', data);
    // eslint-disable-next-line no-promise-executor-return
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    await context.dispatch('getUserDetails');
    await context.dispatch('getUserProjects');
    await context.dispatch('getUserPermissions');
    if (payload.app) {
      window.location.href = `/app?app=${payload.app}`;
      return;
    }
    window.location.href = '/app';
  },
  async getUserDetails(context: ActionContext<AuthStateI, RootStateI>, token: string) {
    const { data } = await usersClient.get('/api/auth/userdetailsv2');
    context.commit('setUser', data);
  },
  async getUserProjects(context: ActionContext<AuthStateI, RootStateI>) {
    const { data } = await usersClient.get('/api/auth/userbusinesses');
    context.commit('setProjects', data);
  },
  async getUserPermissions(context: ActionContext<AuthStateI, RootStateI>) {
    const { data } = await usersClient.get('/api/auth/userperms');
    context.commit('setPermissions', data);
  },
  logout(context: ActionContext<AuthStateI, RootStateI>) {
    context.commit('setToken', '');
    window.location.href = '/auth/login';
  },
};
