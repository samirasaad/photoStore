import { combineReducers } from 'redux'
import search from './search';
import download from './download';
import loader from './Loader';
import photographerProfile from './photographerProfile';

export default combineReducers({
    search,
    download,
    loader,
    photographerProfile
})