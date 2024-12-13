import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

// directives
import clickOutside from './directives/click-outside';

import './index.css';

createApp(App)
  .use(store)
  .use(router)
  .use(clickOutside)
  .mount('#app');
