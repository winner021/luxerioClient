const initialValue={
    data:null
}

export default (state=initialValue,action)=>{
    switch (action.type) {
        case "total_price":
            return{...state,data:action.payload}
        default:
           return state;
    }
}