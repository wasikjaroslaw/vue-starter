<template>
  <div id="app" class="app">
    <Navbar></Navbar>
    <transition name="router" mode="out-in">
      <router-view class="view router-view"></router-view>
    </transition>
    {{appVersion}}
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import http from 'src/config/http'
import router from 'src/config/router'
import store from 'src/vuex'
import VuexRouterSync from 'vuex-router-sync'

import 'static/semantic.min.js'
import 'src/components'
import 'src/validators'
import formValidator from 'src/directives/formValidator'

VuexRouterSync.sync(store, router)

export default {
  http,
  router,
  store,
  computed: mapGetters({
    appVersion: 'getAppVersion',
    isLoggedIn: 'isLoggedIn'
  }),
  directives: {
    formValidator
  },
  methods: {
    ...mapActions({
      'initAppVersion': 'initAppVersion'
    })
  },
  created () {
    this.initAppVersion()
    this.$logger('info', 'Version: ' + this.appVersion)
    this.$logger('info', 'App.vue created')
  }
}
</script>

<style lang="less">
@import 'assets/variables.less';

html,
body {
  height: 100%;
}

.app {
  min-height: 100%;
}

.router-view {
    transition: all .5s ease;
    min-height: 100vh;
    color: @test;
  }

.router-enter, .router-leave {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

</style>
