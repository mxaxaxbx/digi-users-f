import { ActionTree } from 'vuex';
import { DeviceSDK } from '@digi-io/device-sdk';
import { RootStateI } from '../state';
import { DeviceStateI } from './state';

export const actions: ActionTree<DeviceStateI, RootStateI> = {
  async generateFingerprint({ commit }) {
    try {
      const SDK = DeviceSDK as any;
      const sdk = new SDK({
        includeCanvas: true,
        includeWebGL: true,
        includeAudio: true,
        includeFonts: true,
        includePlugins: true,
        includeMediaDevices: true,
        detectIncognito: true,
        detectAutomation: true,
        detectHeadless: true,
        detectVM: true,
        detectDevTools: true,
        enableAntiTampering: true,
      });
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
