import axios from "axios";

export const Allitemaction=()=>{
   return async (dispatch)=>{
    const response= await axios.get("http://localhost:8000/products")
    dispatch({type:"all_item",payload:response.data});

   }
   
}

/*****This action creator will only store which category has been clicked ie{All categorie ,T-Shirts,Shirts Etc} and will give it to the product listing page So That It can be known which Category has to be initially rendered by the us effect of product listing page******/
export const clickaction=(value)=>{
  
return{type:"categoryclick",payload:value}

}


export const dataStoreAction=(data)=>{
    return{type:"data_store",payload:data}
}