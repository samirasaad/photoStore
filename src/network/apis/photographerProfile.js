import { axiosInstance } from './index';
let handlerEnabled = true;
const photographerProfile = async ({username}) => {
    console.log(axiosInstance)
    return await axiosInstance.get(`/users/${username}/photos`, {
        handlerEnabled
    }
    );
};

export default {
    photographerProfile
};