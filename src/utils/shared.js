import History from '../routes/History'
const PushRouting = (pathname, search)=> {
    History.push({
        pathname:  pathname ,
        search: search ? search : '',
      })
}

export {
 PushRouting
}