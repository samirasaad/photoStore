import { axiosInstance } from './index';
let handlerEnabled = true;
const searchForPhotos = async params => {
    return await axiosInstance.get(`search/photos`, {
        params,
        handlerEnabled
    }
    );
};

export default {
    searchForPhotos
}
