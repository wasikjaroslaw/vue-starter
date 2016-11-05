// dependencies
import Vue from 'vue'
import Avatar from 'vue-avatar/dist/Avatar'

// external components
Vue.component('Avatar', Avatar)

Vue.component('Hello', resolve => require(['components/Hello.vue'], resolve))
Vue.component('Navbar', resolve => require(['components/Navbar.vue'], resolve))
