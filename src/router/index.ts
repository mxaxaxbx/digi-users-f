import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  // auth routes
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/auth/index.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/auth/login.vue'),
        meta: {
          title: 'Login',
        },
      },
      {
        path: 'check-code',
        name: 'check-code',
        component: () => import('../views/auth/validatecode.vue'),
        meta: {
          title: 'Verificar código',
        },
      },
      {
        path: 'loginwithgoogle',
        name: 'loginwithgoogle',
        component: () => import('../views/auth/loginwithgoogle.vue'),
        meta: {
          title: 'Login with Google',
        },
      },
    ],
  },
  // app routes
  {
    path: '/app',
    name: 'app',
    component: () => import('../views/app/index.vue'),
    children: [
    ],
    meta: {
      title: 'Home',
      requiresAuth: true,
    },
  },
  // privacy policy
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('../views/privacy-policy.vue'),
    meta: {
      title: 'Privacy Policy',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | digi systems`;
  }

  // redirect to login page if not logged in and trying to access a restricted page
  if (to.meta.requiresAuth) {
    const user = localStorage.getItem('user');
    if (!user) {
      return next({
        name: 'login',
        query: { redirect: to.fullPath },
      });
    }
  }

  return next();
});

export default router;
