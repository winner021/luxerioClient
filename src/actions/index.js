import axios from "axios";

export const signInAction=(data)=>{
   return{
       type:"sign_In",
       payload:data,
}
}





export const Allitemaction=()=>{
  


   return async (dispatch)=>{
      console.log("hello12")
    const response= await axios.get("https://luxeriobackendmockserver.herokuapp.com/products")
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
     const response= await axios.get(`https://luxeriobackendmockserver.herokuapp.com/products?category=${value}`)
     dispatch({type:"Category_items",payload:response.data});
 
    }
    
 }

 export const genderFetchAction=(value)=>{
   
      return async (dispatch)=>{
         console.log("hello13")
        const response= await axios.get(`https://luxeriobackendmockserver.herokuapp.com/products?For Gender=${value}`)
        dispatch({type:"Gender_items",payload:response.data});
    
       
    }
    
    
 }

 export const multiplecategoryAction=(value1,value2)=>{
    return async (dispatch)=>{
     const response= await axios.get(`https://luxeriobackendmockserver.herokuapp.com/products?category=${value1}&For Gender=${value2}`)
     dispatch({type:"specific_items",payload:response.data});
 
    }
    
 }


 export const cartAddActions=(id,userid)=>{
    return async (dispatch)=>{

       const response=await axios.get(`https://luxeriobackendmockserver.herokuapp.com/products?id=${id}`)
      
       const product=await axios.post('https://luxeriobackendmockserver.herokuapp.com/cart',{...response.data[0],userid:userid,quantity:1});

       dispatch({type:"cart_add_data",payload:product.data})
      
    }
 }


export const initialCartValue=(id,price,quantity)=>{
return async(dispatch)=>{
   const initialValue={
    id:id,
    price:price,
    quantity:quantity,
   }
   const response= axios.post("https://luxeriobackendmockserver.herokuapp.com/quantity",initialValue);
   
}
}

export const  cartDataFetcher=()=>async dispatch =>{
    const response = await axios.get("https://luxeriobackendmockserver.herokuapp.com/cart")
   dispatch({type:"cartDataFetch",payload:response.data})
   
   }

   export const  productQtyAction=(id)=>async dispatch =>{
      const response = await axios.get(`https://luxeriobackendmockserver.herokuapp.com/cart?id=${id}`)
     
     dispatch({type:"edit_quantity",payload:response.data})
     }

     export const editQuantity=(item)=>{
         
      console.log(item)
     }
  
   export const newQuantityAction=(value,id)=>{
      return async(dispatch)=>{
          
          
            const newData = await axios.patch(`https://luxeriobackendmockserver.herokuapp.com/cart/${id}`,value);
            

           dispatch({type:"updated_quantity",payload:newData.data})
          
      }
     
   }
   
   export const totalPriceAction=(price,qty)=>{
      const value={
         price:price,
         qty:qty,
      }
      return({
         type:"total_price",
         payload:value
      })
   } 
      var num=0
   export const deleteAction=(id)=>{
     return async (dispatch)=>{
         const response=axios.delete(`https://luxeriobackendmockserver.herokuapp.com/cart/${id}`);
         const data=axios.delete(`https://luxeriobackendmockserver.herokuapp.com/quantity/${id}`);
         num=num+1
         dispatch({type:"cart_delete",payload:num});
     }
   } 


   export const wishlistActions=(id,userid)=>{
      return async (dispatch)=>{
         const response=await axios.get(`https://luxeriobackendmockserver.herokuapp.com/products?id=${id}`)
      
         const product=await axios.post('https://luxeriobackendmockserver.herokuapp.com/wishlist',{...response.data[0],userid:userid,quantity:1});

         dispatch({type:"wishlist_add",payload:product.data});
   

      }
   }
  


   export const wishListDataFetcher=()=>{
      return async (dispatch)=>{
      
         const product=await axios.get('https://luxeriobackendmockserver.herokuapp.com/wishlist');

         dispatch({type:"wishlist_data_fetch",payload:product.data});
   

      }
   }

   export const wishListdeleteAction=(id)=>{
      return async (dispatch)=>{
          const response=await axios.delete(`https://luxeriobackendmockserver.herokuapp.com/wishlist/${id}`);
          num=num+1;
          dispatch({type:"wishlist_delete",payload:num});
      }
    }

    export const reviewFormAction=(value)=>{
     return async (dispatch)=>{
          const response= await axios.post("https://luxeriobackendmockserver.herokuapp.com/review",value);
         dispatch({type:"data_enter",payload:response.data})
          
      }
     
    }
    export const reviewDatafetcher=()=>{
       return async (dispatch)=>{
          const response= await axios.get("https://luxeriobackendmockserver.herokuapp.com/review?_sort=id&_order=desc")
         
          dispatch({type:"review_data",payload:response.data})
       }
    }
    

 