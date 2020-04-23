import { put, call } from "redux-saga/effects";
import {loader} from './../../store/actions/Loader';
import store from './../../store';
 
 export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
};

let acess_key = 'PtJVadUoerKJguf5WxlQwRRevCUQPFuW-d5la9CKq_0';

export const requestHandler = request => {
  if (isHandlerEnabled(request)) {
    console.log(request);
     store.dispatch(loader(true));
     request.headers["Authorization"] = `Client-ID ${acess_key}`
    // const token = localStorage.getItem("token");
    // if(token){
    //   console.log(token);
    //   request.headers["Authorization"] = `Bearer ${token}`;
    // }else{
    //   console.log('no token');
    // }
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
    // if (error.response.status === 401) {
    //   // Auth.signOut();
    //   window.location.replace(`https://unsplash.com/oauth/authorize?client_id=${acess_key}&redirect_uri=localhost3000`)
    // }
  }
  return Promise.reject({ ...error });
};