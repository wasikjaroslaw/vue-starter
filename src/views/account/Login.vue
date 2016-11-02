<template>
<div id="home" class="view ui raised very padded text container segment">
  <h2 class="ui header">Login</h2>
	<div class="ui form" v-form-validator="formValidationRules">
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
var formValidationRules = {
  on: 'blur',
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
  }
}

/* var formSettings = {
  onSuccess: function () {
    // show alert on validation success
    console.log('Logged in.')
  }
} */

export default {
  data () {
    return {
      formValidationRules
    }
  },
  methods: {
    sendForm: function () {
      console.log('test')
    }
  }
}

</script>

<style lang="scss" scoped>
</style>