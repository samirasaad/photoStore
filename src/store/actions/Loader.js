import * as types from '../types';

export const loader = (isShowLoader)=>{
    return isShowLoader ? 
    {
      type: types.SHOW_LOADER,
      data:isShowLoader
    }:
     {
      type: types.HIDE_LOADER,
      data: isShowLoader
    }
}