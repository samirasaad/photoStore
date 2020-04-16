import { combineReducers } from 'redux'
import search from './search';
import locale from './Lang';
import download from './download';

export default combineReducers({
    locale,
    search,
    download
})