const initialValue={ 
    data:null,
}
export default (state=initialValue,action)=>{
   
    switch (action.type) {
        case "updated_quantity":
        return {...state,data:action.payload}
    
        default:
            return state;
    }
}