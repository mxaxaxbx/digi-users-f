import { ActionTree, ActionContext } from 'vuex';

import { usersClient } from '@/http-client';
import { camelToSnake, snakeToCamel } from '@/utils';

import { RootStateI } from '../state';
import { ProjectStateI } from './state';

export const actions: ActionTree<ProjectStateI, RootStateI> = {
  async create(
    context: ActionContext<ProjectStateI, RootStateI>,
    payload: {
      name: string,
      app: string,
    },
  ) {
    await usersClient.post(`api/projects/create?app=${payload.app}`, payload);
  },
};
