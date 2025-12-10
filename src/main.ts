import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

// directives
import clickOutside from './directives/click-outside';

import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.classList.toggle('light', savedTheme === 'light');

store.watch(
  (state) => (state as any).theme.theme,
  (newTheme) => {
    document.documentElement.classList.toggle('light', newTheme === 'light');
  },
  { immediate: true },
);

createApp(App)
  .use(store)
  .use(router)
  .use(clickOutside)
  .mount('#app');
