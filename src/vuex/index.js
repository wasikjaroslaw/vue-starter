import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from 'src/vuex/actions'
import * as getters from 'src/vuex/getters'

import account from 'src/vuex/modules/account'
import auth from 'src/vuex/modules/auth'
import app from 'src/vuex/modules/app'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    auth,
    account,
    app
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
})

export default store
