import * as types from 'src/vuex/types'
import * as authUtils from 'src/utils/auth'

const state = {
  token: authUtils.getToken()
}

const mutations = {
  [types.AUTH_LOGIN_SUCCESS] (state, data) {
    var token = data.token
    state.token = token
    authUtils.setToken(token)
  },
  [types.AUTH_LOGIN_FAIL] (state, err) {
    state.token = ''
    authUtils.setToken('')
  },
  [types.AUTH_LOGOUT] (state, err) {
    state.token = ''
    authUtils.setToken('')
  }
}

export default {
  state,
  mutations
}
