const initialValue={ 
    data:null,
}
export default (state=initialValue,action)=>{
   
    switch (action.type) {
        case "wishlist_delete":
        return {...state,data:action.payload}
    
        default:
            return state;
    }
}