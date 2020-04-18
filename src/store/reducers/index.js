import { combineReducers } from 'redux'
import search from './search';
import locale from './Lang';
import download from './download';
import loader from './Loader';

export default combineReducers({
    locale,
    search,
    download,
    loader
})