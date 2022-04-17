const initialValue={
    data:null
}

export default (state=initialValue,action)=>{
    switch (action.type) {
        case "all_item":
            return{...state,data:action.payload};
         default:
           return   state;
    }
}