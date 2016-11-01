const apiTokenKey = 'apiToken'

var localStorage = window.localStorage

export const getToken = function () {
  return JSON.parse(localStorage.getItem(apiTokenKey)) || ''
}

export const setToken = function (token) {
  localStorage.setItem(apiTokenKey, token)
}

export const getAuthHeader = function () {
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + getToken()
  }

  return headers
}
