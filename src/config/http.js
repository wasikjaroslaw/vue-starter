import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (response.status === 401) {
      console.log('Need to login again')
    }
  })
})
