const initialvalue={
    value:null
}

export default (state=initialvalue,action)=>{
    switch (action.type) {
        case "categoryclick":
            return{...state,value:action.payload}
    
        default:
          return  state;
    }
}
