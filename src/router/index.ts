import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
  NavigationGuardNext,
} from 'vue-router';

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
      {
        path: 'validategoogletoken',
        name: 'validategoogletoken',
        component: () => import('../views/auth/validategoogletoken.vue'),
        meta: {
          title: 'Validate Google Token',
        },
      },
      {
        path: 'confirmsession',
        name: 'auth-confirmsession',
        component: () => import('@/views/auth/confirmsession.vue'),
        meta: {
          title: 'Validating session...',
        },
      },
    ],
  },
  // app routes
  {
    path: '/app',
    name: 'app',
    component: () => import('../views/app/index.vue'),
    meta: {
      title: 'Home',
      requiresAuth: true,
    },
    children: [
      // redirect
      {
        path: 'redirect',
        name: 'redirect',
        component: () => import('../views/app/redirect.vue'),
        meta: {
          title: 'Redirect',
        },
      },
      // users
      {
        path: 'users',
        name: 'users',
        component: () => import('../views/app/users/index.vue'),
        meta: {
          title: 'Users',
        },
        children: [
          {
            path: 'edit-profile',
            name: 'edit-profile',
            component: () => import('../views/app/users/edit-profile.vue'),
            meta: {
              title: 'Edit Profile',
            },
          },
        ],
      },
      // projects
      {
        path: 'projects',
        name: 'projects',
        component: () => import('../views/app/projects/index.vue'),
        meta: {
          title: 'Projects',
        },
        children: [
          {
            path: 'add',
            name: 'add',
            component: () => import('../views/app/projects/add.vue'),
            meta: {
              title: 'Add new project',
            },
          },
        ],
      },
    ],
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

router.beforeEach((
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
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

  if (to.query.to && !to.path.startsWith('/auth')) {
    return next(typeof to.query.to === 'string' ? to.query.to : '');
  }

  return next();
});

export default router;
