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

export const genderaction=(value)=>{
  
    return{type:"genderclick",payload:value}
    
    }


export const dataStoreAction=(data)=>{
    return{type:"data_store",payload:data}
}


export const categoryFetchAction=(value)=>{
    return async (dispatch)=>{
     const response= await axios.get(`http://localhost:8000/products?category=${value}`)
     dispatch({type:"Category_items",payload:response.data});
 
    }
    
 }

 export const genderFetchAction=(value)=>{
    return async (dispatch)=>{
     const response= await axios.get(`http://localhost:8000/products?For Gender=${value}`)
     dispatch({type:"Gender_items",payload:response.data});
 
    }
    
 }

 export const multiplecategoryAction=(value1,value2)=>{
    return async (dispatch)=>{
     const response= await axios.get(`http://localhost:8000/products?category=${value1}&For Gender=${value2}`)
     dispatch({type:"specific_items",payload:response.data});
 
    }
    
 }


 