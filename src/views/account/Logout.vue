<template>
<div id="logout" class="view">
  Logout
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  created () {
    this.callLogout()
  },
  methods: {
    ...mapActions({
      'callLogout': 'logout'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>