import { constants } from "../constants/constants"
import { signin, signup, logout } from "../services/service.auth"

export const signupActions = (username, email, password) => async (dispatch) => {
    dispatch(signupStart())
    try {
        const response = await signup(username, email, password)
        dispatch(signupSuccess(response))
        return Promise.resolve(response)
    } catch (error) {
        dispatch(signupError(error))
        return Promise.reject(error)
    }
}
export const signupStart = () => ({
    type: constants.SIGNUP_START,
})
export const signupSuccess = response => ({
    type: constants.SIGNUP_SUCCESS,
    payload: response
})
export const signupError = error => ({
    type: constants.SIGNUP_ERROR,
    payload: error
})

export const signinActions = (username, password) => async (dispatch) => {
    dispatch(signinStart())
    try {
        const response = await signin(username, password)
        dispatch(signinSuccess(response))
        return Promise.resolve(response)
    } catch (error) {
        dispatch(signinError(error))
        return Promise.reject(error)
    }
}
export const signinStart = () => ({
    type: constants.SIGNIN_START,
})
export const signinSuccess = response => ({
    type: constants.SIGNIN_SUCCESS,
    payload: { user: response }
})
export const signinError = error => ({
    type: constants.SIGNIN_ERROR,
    payload: error
})

export const logoutActions = () => (dispatch) => {
  logout()
  dispatch({
    type: constants.LOGOUT,
  })
}

export const refreshTokenActions = (accessToken) => (dispatch) => {
  dispatch({
    type: constants.REFRESH_TOKEN,
    payload: accessToken,
  })
}