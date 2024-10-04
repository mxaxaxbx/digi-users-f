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
    try {
      await usersClient.post('api/auth/sendcode', payload);
    } catch (error: any) {
      console.error('auth/sendcode error:', error);
      const data = error.response?.data;
      if (data?.error) {
        context.dispatch(
          'toast/showToast',
          { message: data.error, type: 'error' },
          { root: true },
        );
        throw new Error(data.error);
      }
      context.dispatch(
        'toast/showToast',
        { message: 'Error sending code', type: 'error' },
        { root: true },
      );
      throw new Error('Error sending code');
    }
  },
};
