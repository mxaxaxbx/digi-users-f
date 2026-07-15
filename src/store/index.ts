/* eslint-disable import/no-cycle */
import { createStore, Store } from 'vuex';

import auth from './auth';
import notifications from './notifications';
import projects from './projects';
import theme from './theme';
import device from './device';

import { state, RootStateI } from './state';
import { mutations } from './mutations';

const store: Store<RootStateI> = createStore({
  state,
  getters: {
  },
  mutations,
  actions: {
  },
  modules: {
  },
});

store.registerModule('auth', auth);
store.registerModule('notifications', notifications);
store.registerModule('projects', projects);
store.registerModule('theme', theme);
store.registerModule('device', device);

export default store;
