export interface DeviceStateI {
  hash: string | null;
  data: any | null;
  devices: any[];
}

export const state: DeviceStateI = {
  hash: null,
  data: null,
  devices: [],
};
