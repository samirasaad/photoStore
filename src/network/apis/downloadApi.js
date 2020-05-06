import { axiosInstance } from './index';
let handlerEnabled = true;
const downloadAPhoto = async ({ id }) => {
    console.log(axiosInstance)
    return await axiosInstance.get(`https://api.unsplash.com/photos/${id}/download`, {
        headers: {
            Authorization: 'Client-ID PtJVadUoerKJguf5WxlQwRRevCUQPFuW-d5la9CKq_0'
        },
        handlerEnabled
    }
  );
};

export default {
    downloadAPhoto
};
