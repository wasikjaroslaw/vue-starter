<template>
<div class="ui attached stackable menu">
  <div class="ui container">
    <router-link to="/" tag="a" class="item">
      <i class="home icon"></i> Home
    </router-link>
    <router-link to="/profile" tag="a" class="item">
      <i class="grid layout icon"></i> Test auth guard
    </router-link>
    <router-link v-if="!isLoggedIn" to="/login" tag="a" class="item">
      <i class="mail icon"></i> Login
    </router-link>
    <div v-if="isLoggedIn" class="ui simple dropdown item">
      <avatar :username="account.fullName" :src="account.avatar"></avatar> {{account.fullName}}
      <i class="dropdown icon"></i>
      <div class="menu">
        <router-link to="/profile" tag="a" class="item"><i class="edit icon"></i> Profile</router-link>
        <a class="item"><i class="globe icon"></i> Choose Language</a>
        <a class="item"><i class="settings icon"></i> Account Settings</a>
        <a class="item" v-on:click="logout()"><i class="globe icon"></i> Logout</a>
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
    isLoggedIn: 'isLoggedIn',
    account: 'getAccount'
  }),
  methods: {
    logout () {
      this.$router.push('/logout')
    },
    ...mapActions({
    })
  }
}
</script>

<style land="sass" scoped>
</style>