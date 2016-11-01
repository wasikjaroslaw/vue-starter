import * as types from 'src/vuex/types'
import * as authUtils from 'src/utils/auth'

const state = {
  token: authUtils.getToken() || ''
}

const mutations = {
  [types.AUTH_LOGIN_SUCCESS] (state, data) {
    state.token = data.token
    authUtils.setToken(data.token)
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
