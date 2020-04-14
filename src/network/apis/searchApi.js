import { axiosInstance } from './index';
let handlerEnabled = true;
const searchForPhotos = async params => {
    debugger;
    return await axiosInstance.get(`https://api.unsplash.com/search/photos`, {
        params,
         headers: {
            Authorization: 'Client-ID PtJVadUoerKJguf5WxlQwRRevCUQPFuW-d5la9CKq_0'
        },
        handlerEnabled
    }
    );
};

export default {
    searchForPhotos
};