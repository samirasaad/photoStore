import { axiosInstance } from './index';
let handlerEnabled = true;
const searchForPhotos = async params => {
    return await axiosInstance.get(`https://api.unsplash.com/search/photos`, {
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
};
/** 
//async.....> notify this is an asyncronous operation takes sometimes
//await.....> wait for the response, store it in a variable called response

async, await belongs to axios library to handle .then() as axios rerurns promise
*/