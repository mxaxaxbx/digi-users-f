export interface NotificationI {
  type: string;
  message: string;
  closeIn: number;
  seconds: number;
}

export interface NotificationStateI {
  notifications: NotificationI[];
}

export const state: NotificationStateI = {
  notifications: [],
};
