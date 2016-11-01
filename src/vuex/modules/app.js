/* eslint-disable no-unused-vars */
import * as types from 'src/vuex/types'

const state = {
  appVersion: 0
}

const mutations = {
  [types.GET_APP_VERSION] (state, version) {
    state.appVersion = version
  }
}

export default {
  state,
  mutations
}
