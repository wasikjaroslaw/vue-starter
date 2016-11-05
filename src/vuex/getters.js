/** auth store **/
export const isLoggedIn = (state) => {
  return !!state.auth.token
}

/** account store **/
export const getAccount = (state) => {
  return state.account.account
}

/* app store */
export const getAppVersion = (state) => {
  return state.app.appVersion
}
