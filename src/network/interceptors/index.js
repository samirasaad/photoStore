import {loader} from './../../store/actions/Loader';
import store from './../../store';
 
 export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
};

let acess_key = 'PtJVadUoerKJguf5WxlQwRRevCUQPFuW-d5la9CKq_0';

export const requestHandler = request => {
  if (isHandlerEnabled(request)) {
     document.getElementById('root').classList.add("loading-indicator");
     store.dispatch(loader(true));
     request.headers["Authorization"] = `Client-ID ${acess_key}`
  }
  return request;
};

export const successHandler = response => {
  if (isHandlerEnabled(response)) {
    document.getElementById('root').classList.remove("loading-indicator");
    store.dispatch(loader(false));
  }
  return response;
};

export const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    document.getElementById('root').classList.remove("loading-indicator");
    store.dispatch(loader(false));
  }
  return Promise.reject({ ...error });
};