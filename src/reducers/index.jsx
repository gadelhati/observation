import { combineReducers  } from 'redux'
import auth from "./reducer.auth";
import message from "./reducer.message";
import { ShipSynopReducer } from './reducer.shipsynop';
import { ValidationReducer } from './reducer.validation'

export default combineReducers({ 
    auth,
    message,
    itens: ShipSynopReducer,
    error: ValidationReducer
})