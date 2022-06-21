const initialState={
    data:[]
}

export default (state= initialState,action)=>{
     switch (action.type) {
         case "data_enter" :
              return{...state,data:action.payload}
         default:
            return state;
     }
}