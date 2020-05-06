import { axiosInstance } from './index';
let handlerEnabled = true;
const searchForPhotos = async params => {
    console.log(axiosInstance)
    return await axiosInstance.get(`search/photos`, {
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
}
