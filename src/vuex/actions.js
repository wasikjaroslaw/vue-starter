import * as API from 'src/api'
import * as types from 'src/vuex/types'

/* auth store */
export function login ({commit}, params) {
  return API.Auth.login(params)
  .then((response) => {
    commit(types.AUTH_LOGIN_SUCCESS, response.body)
    return response
  })
  .catch((response) => {
    commit(types.AUTH_LOGIN_FAIL, response.body)
    return Promise.reject(response)
  })
}

export function logout ({commit}, params) {
  commit(types.AUTH_LOGOUT)
}

/* app store */
export function initAppVersion ({commit}) {
  commit(types.GET_APP_VERSION, process.env.VERSION)
}
