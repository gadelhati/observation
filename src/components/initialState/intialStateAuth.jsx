export const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null }