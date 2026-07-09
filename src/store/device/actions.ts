import { ActionTree } from 'vuex';
import { DeviceSDK } from '@digi-io/device-sdk';
import { RootStateI } from '../state';
import { DeviceStateI } from './state';

export const actions: ActionTree<DeviceStateI, RootStateI> = {
  async generateFingerprint({ commit }) {
    try {
      const sdk = new DeviceSDK();
      const fingerprint = await sdk.generate();
      commit('setFingerprint', {
        hash: fingerprint.hash,
        data: fingerprint,
      });

      console.log('Device Hash:', fingerprint.hash);
      console.log('Device Data:', fingerprint);
      return fingerprint;
    } catch (error) {
      console.error('Failed to generate device fingerprint:', error);
      throw error;
    }
  },
};
