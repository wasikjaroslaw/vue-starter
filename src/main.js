// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VuexRouterSync from 'vuex-router-sync'
import http from 'src/config/http'
import router from 'src/config/router'

import store from 'src/vuex'
import logger from 'src/plugins/logger'

import 'src/config/components'
import App from './App'

Vue.use(logger, {loggin: true})
VuexRouterSync.sync(store, router)

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  http, router, store
}, App))
.$mount('app')
