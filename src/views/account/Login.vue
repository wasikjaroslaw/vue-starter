<template>
<div id="home" class="view ui raised very padded text container segment">
  <h2 class="ui header">Login</h2>
	<form class="ui form">
	  <div class="field">
	    <label>Username</label>
	    <input type="text" name="username" placeholder="Username">
	  </div>
	  <div class="field">
	    <label>Password</label>
	    <input type="password" name="password" placeholder="Password">
	  </div>
	  <button class="ui button" type="submit">Log in</button>
	</form>
</div>
</template>

<script>
var jQuery = require('jquery')

export default {
}

var formValidationRules = {
  username: {
    identifier: 'name',
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

var formSettings = {
  onSuccess: function () {
    // show alert on validation success
    console.log('Logged in.')
  }
}(function ($) {
  $('.ui.form').form(formValidationRules, formSettings)
})(jQuery)

</script>

<style lang="scss" scoped>
</style>