const debug = process.env.NODE_ENV !== 'production'

export const apiDomain = debug ? 'http://localhost/api/' : undefined
export const authUrl = apiDomain + 'auth'