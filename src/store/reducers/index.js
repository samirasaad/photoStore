import { combineReducers } from 'redux'
import search from './search';
import locale from './Lang';

export default combineReducers({
    locale,
    search
})