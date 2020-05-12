import { axiosInstance } from './index';
let handlerEnabled = true;
const downloadAPhoto = async ({ id }) => {
    return await axiosInstance.get(`https://api.unsplash.com/photos/${id}/download`, {
        handlerEnabled
    }
  );
};

export default {
    downloadAPhoto
};
