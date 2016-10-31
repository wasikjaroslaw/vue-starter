// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import httpConfig from 'src/config/httpConfig'

import store from 'src/vuex'
import logger from 'src/plugins/logger'

import 'src/config/components'
import App from './App'

Vue.use(logger, {loggin: true})

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  httpConfig, store
}, App))
.$mount('app')
