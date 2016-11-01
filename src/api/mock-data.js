import Vue from 'vue'
import {API_URL} from 'src/config/constants'

import test from './data/test.json'
import auth from './data/auth.json'

const data = {
  '/accounts/test': test,
  '/auth/local': auth
}

Vue.http.interceptors.push((request, next) => {
  var url = request.getUrl()
  var key = url.replace(API_URL, '')
  console.log('request:', url, data[key])
  next(request.respondWith(data[key], {
    status: '200',
    ok: true
  }))
})
