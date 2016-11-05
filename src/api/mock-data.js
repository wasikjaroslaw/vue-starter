// dependencies
import Vue from 'vue'
import {API_URL} from 'src/config/constants'

// auth
import authLogin from './data/authLogin.json'

// account
import accountMyData from './data/accountMyData.json'

const data = {
  '/account': accountMyData,
  '/auth/login': authLogin
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
