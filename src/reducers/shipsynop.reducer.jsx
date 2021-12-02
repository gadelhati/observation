import { constants } from '../types/constants.shipsynop'

const iniatialState = {
    itens: [],
    error: null,
    loading: false,
    item: {}
}

export default function shipsynopReducer(state = iniatialState, action){
    switch (action.type) {
        case constants.SHIPSYNOP_CREATE_START:
            return { ...state, error: null, }
        case constants.SHIPSYNOP_CREATE_SUCCESS:
            return { ...state, error: null, itens: [...state.itens, action.payload] }
        case constants.SHIPSYNOP_CREATE_ERROR:
            return { ...state, error: true, }
        
        case constants.SHIPSYNOP_RETRIEVE_START:
            return { ...state, loading: true, item: {} }
        case constants.SHIPSYNOP_RETRIEVE_SUCCESS:
            return { ...state, itens: action.payload, loading: false, error: false, item: {} }
        case constants.SHIPSYNOP_RETRIEVE_ERROR:
            return { ...state, itens: [], error: true, loading: false, item: {} }

        case constants.SHIPSYNOP_DELETE_RETRIEVE:
            return { ...state, error: null }
        case constants.SHIPSYNOP_DELETE_SUCCESS:
            return { ...state, itens: state.itens.filter( item => item._id !== action.payload ) }
        case constants.SHIPSYNOP_DELETE_ERROR: 
            return { ...state, error: true }

        case constants.SHIPSYNOP_UPDATE_RETRIEVE: 
            return { ...state, error: null }
        case constants.SHIPSYNOP_UPDATE_SUCCESS: 
            return { ...state, error: null, item: action.payload }
        case constants.SHIPSYNOP_UPDATE_ERROR:
            return { ...state, error: true }

        case constants.SHIPSYNOP_UPDATED_START:
            return { ...state, error: null }
        case constants.SHIPSYNOP_UPDATED_SUCCESS:
            return { ...state, error: null,
                itens: state.itens.map(
                    item => item._id === action.payload._id ? item = action.payload : item
                )
            }
        case constants.SHIPSYNOP_UPDATED_ERROR:
            return { ...state, error: true }
        default:
            return state;
    }
}