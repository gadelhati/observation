import { combineReducers  } from 'redux'
import auth from "./reducer.auth";
import { ShipSynopReducer } from './reducer.shipsynop';

export default combineReducers({ 
    auth,
    itens: ShipSynopReducer,
})