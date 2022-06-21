const initialValue={
    data:[],
   
}

export default (state=initialValue,action)=>{
     switch (action.type) {
            case "cart_add_data":
                return{...state,data:action.payload} 
         default:
           return  state;
     }
} 