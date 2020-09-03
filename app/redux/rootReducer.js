import { combineReducers } from 'redux';
import { reducer as dataPokedexReducer } from '../modules/pokedex'

const rootReducer = combineReducers({
    dataPokedexReducer
})

export default rootReducer;