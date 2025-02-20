import { ActionTree, ActionContext } from 'vuex';

import { usersClient } from '@/http-client';
import { camelToSnake, snakeToCamel } from '@/utils';

import { RootStateI } from '../state';
import { AuthStateI, SendCodeI, UserI } from './state';

export const actions: ActionTree<AuthStateI, RootStateI> = {
  async sendcode(
    context: ActionContext<AuthStateI, RootStateI>,
    payload: SendCodeI,
  ) {
    await usersClient.post('api/auth/sendcode', payload);
    context.commit('setToken', '');
    context.commit('setUser', '');
  },
  async validatecode(
    context: ActionContext<AuthStateI, RootStateI>,
    payload: SendCodeI,
  ) {
    const { data } = await usersClient.post('api/auth/validatecodev2', payload);
    context.commit('setToken', data);
    // eslint-disable-next-line no-promise-executor-return
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    await context.dispatch('getUserDetails', payload);
    await context.dispatch('getUserProjects');
    await context.dispatch('getUserPermissions');
    if (payload.app) {
      window.location.href = `/app/redirect?app=${payload.app}&redirect=${payload.redirect}`;
      return;
    }
    window.location.href = '/app';
  },
  async getUserDetails(
    context: ActionContext<AuthStateI, RootStateI>,
    payload: {
      app: string,
      redirect: string,
    },
  ) {
    const { data } = await usersClient.get('/api/auth/userdetailsv2');
    context.commit('setUser', data);
    // get user details from getters
    const { user } = context.getters;
    if (user?.firstName === '') {
      window.location.href = `/app/users/edit-profile?app=${payload.app ?? ''}&redirect=${payload.redirect ?? ''}`;
    }
  },
  async getUser(
    context: ActionContext<AuthStateI, RootStateI>,
  ) {
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
  async updateuserdata(
    context: ActionContext<AuthStateI, RootStateI>,
    payload: UserI,
  ) {
    await usersClient.patch('/api/auth/updateuserdata', camelToSnake(payload));
  },
  logout(context: ActionContext<AuthStateI, RootStateI>) {
    context.commit('setToken', '');
    context.commit('setUser', '');
    window.location.href = '/auth/login';
  },
};
