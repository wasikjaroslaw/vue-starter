<template>
<div id="home" class="view ui raised very padded text container segment">
  <h2 class="ui header">Login</h2>
	<div class="ui form" v-form-validator="formValidator">
    <div class="two fields">
      <div class="required field">
        <label>Name</label>
        <input type="text" name="username">
      </div>
      <div class="required field">
        <label>Password</label>
        <input type="password" name="password">
      </div>
    </div>
    <div class="ui blue submit button">Submit</div>
    <div class="ui error message"></div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    loginSubmit (event, fields) {
      this.callLogin()
      .then((response) => {
        console.log('LOGGED!')
        this.callGetAccount()
        .catch(() => { console.log('Account not found.') })
      })
      .then((response) => {
        this.$router.push(this.redirect)
      })
      .catch(() => {})
    },
    ...mapActions({
      'callLogin': 'login',
      'callGetAccount': 'getAccount'
    })
  },
  computed: {
    redirect () {
      return this.$route.query.redirect || '/'
    },
    formValidator () {
      return {
        on: 'blur',
        inline: true,
        fields: {
          username: {
            identifier: 'username',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your username'
              }
            ]
          },
          password: {
            identifier: 'password',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter a password'
              },
              {
                type: 'minLength[6]',
                prompt: 'Your password must be at least {ruleValue} characters'
              }
            ]
          }
        },
        onSuccess: this.loginSubmit
      }
    }
  }
}

</script>

<style lang="scss" scoped>
</style>