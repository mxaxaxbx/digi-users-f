import { createStore, Store } from 'vuex';

import auth from './auth';
import { state, RootStateI } from './state';

const store: Store<RootStateI> = createStore({
  state,
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});

store.registerModule('auth', auth);

export default store;
