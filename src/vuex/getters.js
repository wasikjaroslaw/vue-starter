/** auth store **/
export const isLoggedIn = (state) => {
  return state.account.loggedIn
}

/** account store **/

/* app store */
export const getAppVersion = (state) => {
  return state.app.appVersion
}
