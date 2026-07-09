import { GetterTree } from 'vuex';
import { RootStateI } from '../state';
import { DeviceStateI } from './state';

export const getters: GetterTree<DeviceStateI, RootStateI> = {
  getHash(state): string | null {
    return state.hash;
  },
  getData(state): any | null {
    return state.data;
  },
};
