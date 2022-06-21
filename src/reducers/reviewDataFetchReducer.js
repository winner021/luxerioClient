const initialState={
    data:[]
}

export default (state= initialState,action)=>{
     switch (action.type) {
         case 'review_data' :
              return{...state,data:action.payload}
         default:
            return state;
     }
}


