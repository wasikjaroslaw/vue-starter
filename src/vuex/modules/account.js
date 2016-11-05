import * as types from 'src/vuex/types'
import * as accountUtils from 'src/utils/account'

const state = {
  account: accountUtils.getAccount(),
  loggedIn: false
}

const mutations = {
  [types.ACCOUNT_GET_ACCOUNT_SUCCESS] (state, account) {
    accountUtils.setAccount(account)
    state.account = account
    state.loggedIn = true
  },
  [types.ACCOUNT_GET_ACCOUNT_FAIL] (state, err) {
    state.loggedIn = false
    console.log(err)
  }
}

export default {
  state,
  mutations
}
