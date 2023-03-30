const TOKEN_KEY = 'Admin-Token'
export const SET_TOKEN = (Token: string) => {
  return window.localStorage.setItem(TOKEN_KEY, Token)
}

export const GET_TOKEN = () => {
  return window.localStorage.getItem(TOKEN_KEY)
}

export function REMOVE_TOKEN() {
  return window.localStorage.removeItem(TOKEN_KEY)
}