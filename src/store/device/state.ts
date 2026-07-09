export interface DeviceStateI {
  hash: string | null;
  data: any | null;
}

export const state: DeviceStateI = {
  hash: null,
  data: null,
};
