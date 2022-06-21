import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { wishListDataFetcher} from '../../actions';
import { useEffect } from 'react';
import { wishListdeleteAction } from '../../actions';
import { useState } from 'react';
import Message from '../helpercomponent/Message'


 const Wishlist=(props)=>{

    useEffect(()=>{
       props.wishListDataFetcher()
    },[props.Wishlistflag,props.wishListdeleteflag])



    const deletehandler=(id)=>{
         props.wishListdeleteAction(id);
         setcartmsg("item from wishlist deleted succefully")
         setcartClass("show");
         setTimeout(()=>{
            setcartmsg("null");
            setcartClass("hide")
         }, 1000)

    }
    const [getcartClass,setcartClass]=useState("hide");
     const [getcartmsg,setcartmsg]=useState("null")
    

    const renderlist=props.data.map((item)=>{
      console.log("wishlist")
      if(props.signInstate === item.userid){

         return   <div  className="product_desc">
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

                   
                <div className="btn">
                  <div className="product_delete" >
                    <button onClick={()=>{deletehandler(item.id)}}>
                       delete
                    </button>
                  </div>
   </div>
  
  
</div>
</div>


</div>
      }
       
    })

    console.log(props.state)

    return(
        <>
         <Header/>
        <div className='wishlist'>
        <div className="wishlist_product">
            <p> My wishlist </p>
          {props.signInstate? renderlist:"   Please logIn To Get Your Wishlist"}
        </div>
        </div>
        </>
    )
} 

const mapStateToProps=(state)=>{
    return({
        Wishlistflag:state.wishlist.data,
        data:state.wishlistdata.data,
        signInstate:state.Authstate.data.sub,
        wishListdeleteflag:state.wishlistdelete.data,
        state:state
            })
}

export default connect(mapStateToProps,{wishListDataFetcher,wishListdeleteAction}) (Wishlist);





























