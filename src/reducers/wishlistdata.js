const initialValue={ 
    data:[],
}
export default (state=initialValue,action)=>{
   
    switch (action.type) {
        case "wishlist_data_fetch":
        return {...state,data:action.payload}
    
        default:
            return state;
    }
}