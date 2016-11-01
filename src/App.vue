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
import router from 'src/config/router'
import store from 'src/vuex'
import VuexRouterSync from 'vuex-router-sync'

import 'src/components'
import 'src/validators'

VuexRouterSync.sync(store, router)

export default {
  router,
  store,
  computed: mapGetters({
    appVersion: 'getAppVersion'
  }),
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

<style>
.router-view {
    transition: all .5s ease;
    min-height: 100vh;
  }

.router-enter, .router-leave {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}
</style>
