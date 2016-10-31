import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: resolve => require(['views/home'], resolve),
    name: 'home'
  },
  {
    path: '/profile',
    auth: true,
    meta: {
      requiresAuth: true
    },
    component: resolve => require(['views/account/Profile.vue'], resolve)
  },
  {
    path: '/login',
    component: resolve => require(['views/account/Login.vue'], resolve)
  },
  { path: '/logout',
    component: resolve => require(['views/account/Logout.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!router.app.isLoggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
