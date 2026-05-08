import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

// directives
import clickOutside from './directives/click-outside';

import './index.css';

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
  .component('PolicySidebar', defineAsyncComponent(() => import('./components/global/policy-sidebar.vue')))
  .mount('#app');
