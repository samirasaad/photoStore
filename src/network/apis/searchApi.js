import { axiosInstance } from './index';
let handlerEnabled = true;
const searchForPhotos = async params => {
    debugger;
    console.log('test')
    return await axiosInstance.get(`/search/photos`, {
        params,
        //  headers: {
        //     Authorization: 'Client-ID PtJVadUoerKJguf5WxlQwRRevCUQPFuW-d5la9CKq_0'
        // },
        handlerEnabled
    }
    );
};

export default {
    searchForPhotos
};