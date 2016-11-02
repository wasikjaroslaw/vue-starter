const apiTokenKey = 'apiToken'

var localStorage = window.localStorage

export const getToken = function () {
  console.log('get token: ' + localStorage.getItem(apiTokenKey))
  return localStorage.getItem(apiTokenKey) || ''
}

export const setToken = function (token) {
  console.log('set token: ' + token)
  localStorage.setItem(apiTokenKey, token)
}

export const getAuthHeader = function () {
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + getToken()
  }

  return headers
}
