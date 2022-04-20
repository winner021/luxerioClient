const initialValue={
    gender:null
}

export default (state=initialValue,action)=>{
    switch (action.type) {
        case "genderclick":
            return{...state,gender:action.payload}
    
        default:
          return  state;
    }
}