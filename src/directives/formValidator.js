import Vue from 'vue'
var $ = require('jquery')

Vue.directive('form-validator', {
  bind: function (el, binding) {
    console.log(binding.value)
    $(function () {
      return $(el).form(binding.value)
    })
  }
})
