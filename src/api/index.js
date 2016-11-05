import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_URL} from 'src/config/constants'
import {getToken} from 'src/utils/auth'

Vue.use(VueResource)

Vue.http.options.root = API_URL
Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next) => {
  request.headers = request.headers || {}
  request.headers.set('Authorization', 'Bearer ' + getToken())
  next((response) => {
    return response
  })
})

// mock data
if (process.env.NODE_ENV !== 'production') {
  require('./mock-data')
}

export const Message = Vue.resource('/messages{/id}')

export const Account = Vue.resource('/account', {}, {
  getAccount: {
    method: 'get',
    url: '/account'
  }
})

export const Auth = Vue.resource('/auth', {}, {
  login: {
    method: 'post',
    url: '/auth/login'
  }
})
