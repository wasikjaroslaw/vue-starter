/** auth store **/
export const isLoggedIn = (state) => {
  return !!state.auth.token
}

/** account store **/

/* app store */
export const getAppVersion = (state) => {
  return state.app.appVersion
}
