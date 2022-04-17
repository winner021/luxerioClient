import React from 'react'
import Header from './Header'
import { Allitemaction } from '../../actions'
import { useEffect } from 'react'
import Sidebar from './Sidebar'
import"../css/style.css"
import { connect } from 'react-redux'
import { useState } from 'react'
import { dataStoreAction } from '../../actions'

const  Productlistingpage =(props)=>{
    useEffect(()=>{
        setState(props.state.clickreducer.value)
    
        props.Allitemaction();
       
       
    },[]) 

    useEffect(()=>{
        if(props.data){
            props.dataStoreAction(props.data)
        }
       
       
    },[]) 
    


    const [datagetter,datasetter]=useState([]);
    const [getState,setState]=useState(null)
    console.log(props.state)
    
 
 const  renderproductcard=()=>datagetter.map((list)=>{
            return   <div className="productdesc">
            <div className="product__image">
                <img src={list.Imageurl} alt="" />
            </div>
            <div className="productprice">
               Price: {list.Price}rs
            </div>
           
            <div className="product__desc">
               {list.Brandname}
            </div>
         
            <div className="product__button">
            <button className='cart primary'>Add To cart</button>
            <button className='wishlist secondary'>Wishlstst</button>
            </div>
        </div>
        })

        
   

   
    return(
       
        <>

           <Header/>
             <div className='productlisting'>
            <div className="sidebar">
            <Sidebar />
            </div>
           
           <div className="Products_page">
                <div className="productname">
                  {getState}
                </div>
            
                <div className="product__container">
                           { renderproductcard()}
                </div>
               

            </div>
        </div>
        </>
       
    )

 }
     
    



const mapStateToProps=(state)=>{
  return({
      data:state.datareducer.data,
      state:state
})
}
export default connect(mapStateToProps,{Allitemaction,dataStoreAction}) (Productlistingpage)