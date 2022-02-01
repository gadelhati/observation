import { constants } from "../constants/constants"

const iniatialState = {
    itens: [],
    error: null,
    loading: false,
    item: {}
}

export const ShipSynopReducer = (state = iniatialState, action) => {
    switch (action.type) {
        case constants.CREATE_START:
            return { ...state, error: null, }
        case constants.CREATE_SUCCESS:
            return { ...state, error: null, itens: [...state.itens, action.payload] }
        case constants.CREATE_ERROR:
            return { ...state, error: true, }

        case constants.RETRIEVE_ALL_START:
            return { ...state, loading: true, item: {} }
        case constants.RETRIEVE_ALL_SUCCESS:
            return { ...state, itens: action.payload, loading: false, error: false, item: {} }
        case constants.RETRIEVE_ALL_ERROR:
            return { ...state, itens: [], error: true, loading: false, item: {} }

        case constants.RETRIEVE_START:
            return { ...state, loading: true, item: {} }
        case constants.RETRIEVE_SUCCESS:
            // return { ...state, itens: action.payload, loading: false, error: false, item: {} }
            return { ...state, itens: [], loading: false, error: false, item: action.payload }
        case constants.RETRIEVE_ERROR:
            return { ...state, itens: [], error: true, loading: false, item: {} }

        case constants.UPDATE_START:
            return { ...state, error: null }
        case constants.UPDATE_SUCCESS:
            return { ...state, error: null, item: action.payload }
        case constants.UPDATE_ERROR:
            return { ...state, error: true }

        case constants.DELETE_START:
            return { ...state, error: null }
        case constants.DELETE_SUCCESS:
            return { ...state, itens: state.itens.filter(item => item._id !== action.payload) }
        case constants.DELETE_ERROR:
            return { ...state, error: true }

        case constants.DELETE_ALL_START:
            return { ...state, error: null }
        case constants.DELETE_ALL_SUCCESS:
            return { ...state, itens: state.itens.filter(item => item._id !== action.payload) }
        case constants.DELETE_ALL_ERROR:
            return { ...state, error: true }

        // case constants.UPDATED_START:
        //     return { ...state, error: null }
        // case constants.UPDATED_SUCCESS:
        //     return { ...state, error: null,
        //         itens: state.itens.map(
        //             item => item._id === action.payload._id ? item = action.payload : item
        //         )
        //     }
        // case constants.UPDATED_ERROR:
        //     return { ...state, error: true }
        default:
            return state
    }
}