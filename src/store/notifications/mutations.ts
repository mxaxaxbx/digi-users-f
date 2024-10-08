import { MutationTree } from 'vuex';

import { NotificationStateI } from './state';

export const mutations: MutationTree<NotificationStateI> = {
  addNotification(state, notification) {
    state.notifications.push(notification);
  },
  removeNotification(state, notification) {
    state.notifications = state.notifications.filter((n) => n !== notification);
  },
  clearNotifications(state) {
    state.notifications = [];
  },
};
