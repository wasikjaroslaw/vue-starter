import Vue from 'vue'

Vue.component('Hello', resolve => require(['components/Hello.vue'], resolve))
Vue.component('Navbar', resolve => require(['components/Navbar.vue'], resolve))
