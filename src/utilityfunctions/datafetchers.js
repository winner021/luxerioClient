import axios from "axios"

export const ShowallProduct= async()=>{
  const response= await axios.get("http://localhost:8000/products") ; 
   return response.data;
}
