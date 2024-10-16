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
    console.log('response', data);
  },
};
