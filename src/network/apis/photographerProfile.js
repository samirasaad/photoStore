import { axiosInstance } from './index';
let handlerEnabled = true;
const photographerProfile = async (params) => {
    console.log(axiosInstance)
    return await axiosInstance.get(`/users/${params.username}/photos`, {
        params,
        handlerEnabled
    }
    );
};

export default {
    photographerProfile
};