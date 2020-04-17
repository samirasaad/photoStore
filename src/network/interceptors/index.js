 export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
};

let acess_key = 'PtJVadUoerKJguf5WxlQwRRevCUQPFuW-d5la9CKq_0';
export const requestHandler = request => {
  if (isHandlerEnabled(request)) {
    console.log(request);
    const token = localStorage.getItem("token");
    if(token){
      console.log(token);
      request.headers["Authorization"] = `Bearer ${token}`;
    }else{
      console.log('no token');
    }
    //  request.headers["Authorization"] = `Client-ID PtJVadUoerKJguf5WxlQwRRevCUQPFuW-d5la9CKq_0`
  }
  return request;
};

export const successHandler = response => {
  if (isHandlerEnabled(response)) {
    // DO SOMETHING
  }
  return response;
};

export const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    console.log(error);
    if (error.response.status === 401) {
      // Auth.signOut();
      window.location.replace(`https://unsplash.com/oauth/authorize?client_id=${acess_key}&redirect_uri=localhost3000`)
    }
  }
  return Promise.reject({ ...error });
};