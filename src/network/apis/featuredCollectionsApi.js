import { axiosInstance } from './index';
let handlerEnabled = true;
const featuredCollections = async params => {
    console.log(axiosInstance)
    return await axiosInstance.get(`/collections/featured`, {
        params,
         headers: {
            Authorization: 'Client-ID PtJVadUoerKJguf5WxlQwRRevCUQPFuW-d5la9CKq_0'
        },
        handlerEnabled
    }
    );
};

export default {
    featuredCollections
};