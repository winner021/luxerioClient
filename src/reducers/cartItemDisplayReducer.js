const InitialValue={
    data:[],
}

export default (state=InitialValue,action)=>{
    switch (action.type) {
        case "cartDataFetch":
            return {...state,data:action.payload}
    
        default:
            return state;
    }
}