import { constants } from '../types/constants'

const initialState = {
    error: null
}

export const ValidationReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.VALIDATE_FORM_START:
            return {...state, error: null}
        case constants.VALIDATE_FORM_SUCCESS: 
            return {...state, error: null}
        case constants.VALIDATE_FORM_ERROR:
            return {...state, error: true}
        default:
            return state;
    }
}