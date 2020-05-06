import { axiosInstance } from './index';
let handlerEnabled = true;
const photographerProfile = async (params) => {
    console.log(axiosInstance)
    return await axiosInstance.get(`/users/${params.username}/photos`, {
        params,
        handlerEnabled
    }
    );
}

const photographerLikes = async (params) => {
    return await axiosInstance.get(`/users/${params.username}/likes`, {
        params,
        handlerEnabled
    }
    );
}

const photographerCollections = async (params) => {
    return await axiosInstance.get(`/users/${params.username}/collections`, {
        params,
        handlerEnabled
    }
    );
}

export default {
    photographerProfile,
    photographerLikes,
    photographerCollections
};