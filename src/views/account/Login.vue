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
  data () {
    return {
      'formValidator': {
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
        onSuccess: function (event, fields) {
          console.log(event)
          console.log(fields)
          this.loginSubmit()
        }
      }
    }
  },
  methods: {
    'loginSubmit': function () {
      this.callLogin()
      .then((response) => {
        console.log('LOGGED!')
      })
      .then((response) => {
        this.$router.push(this.redirect)
      })
      .catch(() => {})
    },
    ...mapActions({
      'login': 'login'
    })
  }
}

</script>

<style lang="scss" scoped>
</style>