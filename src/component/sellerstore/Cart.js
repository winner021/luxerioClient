import React from 'react'
import Header from './Header'
import"../css/style.css"
import { connect } from 'react-redux'
import { cartDataFetcher } from '../../actions'
import axios from 'axios'
import { useEffect } from 'react'
import { productQtyAction } from '../../actions'
import { editQuantity } from '../../actions'
import { newQuantityAction } from '../../actions'
import { totalPriceAction } from '../../actions'
import { useState } from 'react'
import { deleteAction } from '../../actions'
import Message from '../helpercomponent/Message'

import { memo } from 'react'

const Cart=(props)=>{
   
  const [getinc,setinc]=useState(0)
  const [getdec,setdec]=useState(0)

  const [getprice,setprice]=useState("fetching")
  const [getqty,setqty]=useState("fetching")

  const [getcartClass,setcartClass]=useState("hide");
  const [getcartmsg,setcartmsg]=useState("null")

  useEffect(()=>{
    props.cartDataFetcher()
  
  },[props.quantityFlag,props.quantity,props.cartDeleteFlag])
  

  useEffect(()=>{
    if(props.data){
if(props.authId){
  
  var totalprice=0;
  var Totalquantity=0
  props.data.map((list)=>{
    if(list.userid==props.authId.sub){
      totalprice=totalprice+((list.Price)*(list.quantity))
    
      Totalquantity=Totalquantity+(list.quantity)

    }
 

   
  })
  setprice( totalprice)
  setqty( Totalquantity)
  props.totalPriceAction(totalprice,Totalquantity)

}
else{
  window.alert("please login")
}
    

    }
   
  
   },[props.data,props.authId])
 

  useEffect(()=>{
 
    if(props.quantity && getinc==1){
        setinc(0)
       var quantity=props.quantity[0].quantity;
       quantity=quantity+1; 
       const newValue={
         id:props.quantity[0].id,
         price:props.quantity[0].price,
         quantity:quantity,
       }
 
       props.newQuantityAction(newValue,props.quantity[0].id)
      
     }
   else if(props.quantity && getdec==1){
 
     setdec(0)
     var quantity=props.quantity[0].quantity;
     quantity=quantity-1; 
     if(quantity>0){
      const newValue={
        id:props.quantity[0].id,
        price:props.quantity[0].price,
        quantity:quantity,
      }
  
      props.newQuantityAction(newValue,props.quantity[0].id)
     }
    
 
   }
 
     
        
     
         
   },[props.quantity])
 
  const quantityIncrease=(id)=>{
  setinc(1)
    props.productQtyAction(id)
 }



 const quantityDecrease=(id)=>{
  setdec(1)
  props.productQtyAction(id)
 }






  

  
  
  


  const deletehandler=(id)=>{
    props.deleteAction(id)
    setcartmsg("item deleted from cart succesfully")
         setcartClass("show");
         setTimeout(()=>{
            setcartmsg("null");
            setcartClass("hide")
         }, 1000)

  }
console.log(props.data.length)
const renderList=props.data.map((item)=>{
  if(props.signInstate.data){
    if(props.data.length!==1){
      if(props.signInstate.data.sub === item.userid){
         
        return  <div key={item.id} className="product_desc">
        <div className="product_image">
             <img src={item.Imageurl} alt="" />
        </div>
            <div className="product_details">
                 <div className="product_Name">
                   {item.category}
                 </div>
                 <div className="product_price">
                    Price:{item.Price} RS
                 </div>
                 <div className="product_Brand">
                    Brand:{item.Brandname}
                 </div>
               <div className="Product_btn">
  
                    <div className="product_quantity" id={`${item.id}`} >
                       Quantity:  {item.quantity}
                    </div>
                 <div className="btn">
                    <div className="btn_increase">
                     <button onClick={()=>{quantityIncrease(item.id)}}  >
                        <i class="fa fa-plus"></i>
                    </button>
                   </div>
                   <div className="product_decrease" >
                     <button onClick={()=>{quantityDecrease(item.id)}} >
                    <i class="fa fa-minus"></i>
                     </button>
                   </div>
                   <div className="product_delete" >
                     <button onClick={()=>{deletehandler(item.id)}} >
                        delete
                     </button>
                   </div>
    </div>
   
   
  </div>
  </div>
  
  
  </div>
        
      }
  
     }
    
  }
   
  
   
        

        
    })


  console.log(props. totalPrice)
   
    return(
        <>
        <Header/>
        <Message msg={getcartmsg} class={getcartClass}/>
        <div className='Cart'>
         <div className="cart_product">
             <p>Cart Items</p>
             
            {renderList}
              
         </div>
         <div className="cart_total">
            <div className="Cart_total_heading">
                <h3>
                    Cart total
                </h3>
            </div>

            <div className="Total_quantity">
                 <div className="name">
                    Total Quantity:{getqty}
                </div>
                <div className="number">
                
                </div>
            </div>


            <div className="SubTotal_price">
                <div className="name">
                SubTotal Price:{getprice}
                </div>
                <div className="number">
               
                </div>
                
            </div>
            <hr />
            <div className="Total_price">
            <div className="name">
                Total Price:{getprice}
                </div>
                <div className="number">
                
                </div>
               
            </div>


           

         </div>
        </div>
        </>
        
    )
}

const mapStateToProps=(state)=>{
    return({
        data:state.cartitems.data,
        quantity:state.quantity.data,
        quantityFlag:state.udatedQuantityflag,
        totalPrice:state.totalPrice.data,
        signInstate:state.Authstate,
        cartDeleteFlag:state.CartDelete.data,
        authId:state.Authstate.data,
        state:state,
      })
}

export default connect(mapStateToProps,{cartDataFetcher,productQtyAction,editQuantity,newQuantityAction,totalPriceAction,deleteAction})(memo(Cart));