import { MutationTree } from 'vuex';
import { DeviceStateI } from './state';

export const mutations: MutationTree<DeviceStateI> = {
  setFingerprint(state, payload: { hash: string; data: any }) {
    state.hash = payload.hash;
    state.data = payload.data;
  },
};
