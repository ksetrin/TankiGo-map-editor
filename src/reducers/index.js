import { combineReducers } from 'redux'
import map from './map.js'
import mapCell from './map-cell.js'

const rootReducer = combineReducers({
    map,
    mapCell
});

export default rootReducer