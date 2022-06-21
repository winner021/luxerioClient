const initial_state={
  data:null
 }
 
 export default(state=initial_state,action)=>{
     switch (action.type) {
         case "sign_In" :
            return{...state,data:action.payload} 
 
         default:
             return state
           
     }
 }