import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_URL} from 'src/config/constants'
import {getToken} from 'src/utils/auth'

Vue.use(VueResource)

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

export const Message = Vue.resource(API_URL + '/messages{/id}')

export const Account = Vue.resource(API_URL + '/accounts{/id}')

export const Auth = Vue.resource(API_URL + '/auth', {}, {
  login: {
    method: 'post',
    url: '/auth/local'
  }
})
