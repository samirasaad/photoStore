import { axiosInstance } from './index';
let handlerEnabled = true;
const downloadAPhoto = async ({id}) => {
    console.log(axiosInstance)
    // return await axiosInstance.get(`https://api.unsplash.com/photos/${id}/download?force=true`, {
    //      headers: {
    //         Authorization: 'Client-ID PtJVadUoerKJguf5WxlQwRRevCUQPFuW-d5la9CKq_0'
    //     },
    //     handlerEnabled
    // }
    // );
    // return await axiosInstance.put(`/photos/${id}`, {
    //     headers: {
    //         Authorization: 'Client-ID PtJVadUoerKJguf5WxlQwRRevCUQPFuW-d5la9CKq_0'
    //     },
    //     handlerEnabled
    // }
    // );
};

export default {
    downloadAPhoto
};
