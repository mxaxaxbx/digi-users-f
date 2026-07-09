import { Module } from 'vuex';
import { RootStateI } from '../state';
import { DeviceStateI, state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const device: Module<DeviceStateI, RootStateI> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default device;
