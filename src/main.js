// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import logger from 'src/plugins/logger'

Vue.use(logger, {loggin: true})

/* eslint-disable no-new */
new Vue(App).$mount('app')
