<template>
<div class="ui attached stackable menu">
  <div class="ui container">
    <router-link to="/" tag="a" class="item">
      <i class="home icon"></i> Home
    </router-link>
    <a class="item">
      <i class="grid layout icon"></i> Empty
    </a>
    <router-link v-if="!isLoggedIn" to="/login" tag="a" class="item">
      <i class="mail icon"></i> Login
    </router-link>
    <div v-if="isLoggedIn" class="ui simple dropdown item">
      User
      <i class="dropdown icon"></i>
      <div class="menu">
        <router-link to="/profile" tag="a" class="item"><i class="edit icon"></i> Profile</router-link>
        <a class="item"><i class="globe icon"></i> Choose Language</a>
        <a class="item"><i class="settings icon"></i> Account Settings</a>
        <a class="item" :click="logout()"><i class="globe icon"></i> Logout</a>
      </div>
    </div>
    <div class="right item">
      <div class="ui input"><input type="text" placeholder="Search..."></div>
    </div>
  </div>
</div>>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters({
    isLoggedIn: 'isLoggedIn'
  }),
  methods: {
    ...mapActions({
      'logout': 'logout'
    })
  }
}
</script>

<style land="sass" scoped>
</style>