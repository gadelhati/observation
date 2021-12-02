import { constants } from '../types/constants'

export function validateFormActions() {
    return(dispatch) => {
        dispatch( validationStart() )
    }
}

export const validationStart = () => {
    return {
        type: constants.VALIDATE_FORM_START
    }
}

export const validateSuccess = () => {
    return {
        type: constants.VALIDATE_FORM_SUCCESS
    }
}

export const validateError = () => {
    return {
        type: constants.VALIDATE_FORM_ERROR
    }
}