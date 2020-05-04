import {loader} from './../../store/actions/Loader';
import store from './../../store';
 
 export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
};

let acess_key = 'PtJVadUoerKJguf5WxlQwRRevCUQPFuW-d5la9CKq_0';

export const requestHandler = request => {
  console.log(request);
  if (isHandlerEnabled(request)) {
     store.dispatch(loader(true));
     request.headers["Authorization"] = `Client-ID ${acess_key}`
  }
  return request;
};

export const successHandler = response => {
  if (isHandlerEnabled(response)) {
    store.dispatch(loader(false));
  }
  return response;
};

export const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    console.log(error);
    store.dispatch(loader(false));
  }
  return Promise.reject({ ...error });
};