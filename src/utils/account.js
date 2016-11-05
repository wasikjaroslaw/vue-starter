const accountKey = 'account'

var localStorage = window.localStorage

const emptyAccount = function () {
  return {
    account: {
      id: 0,
      fullName: '',
      avatar: ''
    }
  }
}

export const getAccount = function () {
  var value = localStorage.getItem(accountKey)
  console.log(value)
  return value !== undefined ? JSON.parse(value) : emptyAccount()
}

export const setAccount = function (account) {
  console.log('set account:', account)
  localStorage.setItem(accountKey, JSON.stringify(account))
}
