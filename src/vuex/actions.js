import * as types from 'src/vuex/types'

/* app store */
export function initAppVersion ({commit}) {
  commit(types.GET_APP_VERSION, process.env.VERSION)
}
