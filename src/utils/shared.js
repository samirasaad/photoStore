import History from "./../routes/History";
const getCollectionImages= (collection)=>{
    History.push(`/imagesList/${collection}?page=1`)
}

export {
    getCollectionImages
}