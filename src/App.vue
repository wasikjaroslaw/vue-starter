<template>
  <div id="app" class="app">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.$logger('info', 'App.vue created')
  }
}
</script>

<style>
</style>
