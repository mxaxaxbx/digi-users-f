import { ActionTree } from 'vuex';
import { DeviceSDK, DeviceIdentity, DeviceAPI } from '@digi-io/device-sdk';
import { RootStateI } from '../state';
import { DeviceStateI } from './state';

const deviceApi = new DeviceAPI({
  baseUrl: process.env.VUE_APP_URL_DG_USERS || '',
  getToken: () => localStorage.getItem('token') || '',
});

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

      const identity = new DeviceIdentity();
      await identity.generateKeyPair();

      const signedPayload = await identity.generateSignedDevicePayload(fingerprint, {
        risk_score: fingerprint.integrity?.entropyScore || 0,
        trusted_device: false,
      });

      const fullPayload = {
        fingerprint,
        device_payload: signedPayload.payload,
        signature: signedPayload.signature,
      };

      commit('setFingerprint', {
        hash: fingerprint.hash,
        data: fullPayload,
      });

      console.log('Device Hash:', fingerprint.hash);
      console.log('Device Payload:', fullPayload);
      return fullPayload;
    } catch (error) {
      console.error('Failed to generate device fingerprint:', error);
      throw error;
    }
  },
  async getDevices({ commit }) {
    const devices = await deviceApi.getDevices();
    commit('setDevices', devices);
    return devices;
  },
  async trustDevice(_, id: string) {
    return deviceApi.trustDevice(id);
  },
  async revokeDevice(_, id: string) {
    return deviceApi.revokeDevice(id);
  },
  async removeDevice(_, id: string) {
    return deviceApi.deleteDevice(id);
  },
  async renameDevice(_, payload: { id: string, name: string }) {
    return deviceApi.updateDevice(payload.id, { name: payload.name });
  },
};
