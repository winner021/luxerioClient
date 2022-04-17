const InitialState={
    datavalue:null
}


export default(state=InitialState,action)=>{
    switch (action.type) {
        case"data_store":
           return{...state,datavalue:action.payload} 
    
        default:
            return state;
    }
}