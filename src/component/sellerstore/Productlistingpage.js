import React from 'react'
import Header from './Header'
import { Allitemaction } from '../../actions'
import { useEffect,useState } from 'react'
import Sidebar from './Sidebar'
import"../css/style.css"
import { connect } from 'react-redux'
import { dataStoreAction } from '../../actions'
import { categoryFetchAction } from '../../actions'
import Errorpage from '../../Errorpage'
import { genderFetchAction } from '../../actions'
import { multiplecategoryAction } from '../../actions'
import { genderaction } from '../../actions'
import { clickaction } from '../../actions'
import { cartAddActions } from '../../actions'
import { initialCartValue } from '../../actions'
import { wishlistActions } from '../../actions'
import Message from '../helpercomponent/Message'
import { memo } from 'react'


const  Productlistingpage =(props)=>{

    const [getcartClass,setcartClass]=useState("hide");
    const [getcartmsg,setcartmsg]=useState("null")
    
    useEffect(()=>{
        console.log("outside")
    if(props.categoryClicked==="All Products" && props.selectedGender !=null){
        console.log("inside")
        props.genderFetchAction(props.selectedGender)
         
    }
    else if(props.selectedGender!=null && props.categoryClicked!=null && props.categoryClicked !="All Products" )
    {   console.log("inside1")
        props.multiplecategoryAction(props.categoryClicked,props.selectedGender)
        
    }
    else if(props.categoryClicked==="All Products" && props.selectedGender=== null)
    {
        console.log("causehello")
      props.Allitemaction()
    }
    else if(props.selectedGender==null && props.categoryClicked!=null && props.categoryClicked !="All Products" ){
        console.log("inside all")
         props.categoryFetchAction(props.categoryClicked)
         
    }
    },[props.categoryClicked,props.selectedGender]) 

    useEffect(()=>{
        if(props.data){
            props.dataStoreAction(props.data)
        }
    },[props.data]) 

    useEffect(()=>{
        if(props.cartdata.id&&props.cartdata.Price&&props.cartdata.quantity){
              props.initialCartValue(props.cartdata.id,props.cartdata.Price,props.cartdata.quantity);
        }
        
        },[props.cartdata])




    
   const cartClickHandler=(value,userid)=>{
         props.cartAddActions(value,userid);
        
         setcartmsg("item added to cart succesfully")
         setcartClass("show");
         setTimeout(()=>{
            setcartmsg("null");
            setcartClass("hide")
         }, 1000)
    }
    
    const wishlistClickHandler=(value,userid)=>{
        props.wishlistActions(value,userid)
        setcartmsg("item added to wishlist succesfully")
         setcartClass("show");
         setTimeout(()=>{
            setcartmsg("null");
            setcartClass("hide")
         }, 1000)
   
   }

 
    const  renderproductcard=()=>props.storedData.map((list)=>{
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
        <button className='cart primary' onClick={()=>cartClickHandler(list.id,props.userid.sub)} >Add To cart</button>
        <button className='wishlist secondary'  onClick={()=>wishlistClickHandler(list.id,props.userid.sub)}>Wishlstst</button>
        </div>
    </div>
    })


   


  
   const onclickOne=(value)=>{
   
       props.clickaction("ALL PRODUCTS")
       props.genderaction(null)
       props.Allitemaction()
   }
   const onclickTwo=(value)=>{
   
    props.clickaction("ALL PRODUCTS")
    props.genderaction(null)
    props.Allitemaction()
    
}
  

    console.log(props.state)
   
    return(
       
        <>

           <Header/>
           <Message msg={getcartmsg} class={getcartClass}/>
             <div className='productlisting'>
            <div className="sidebar">
            <Sidebar onclickOne={onclickOne} onclickTwo={onclickTwo} />
            </div>
           
           <div className="Products_page">
                <div className="productname">
                  {props.categoryClicked}
                </div>
            
                <div className="product__container">
                {props.storedData.length===0?<Errorpage/>:renderproductcard()}
                </div>
               

            </div>
        </div>
        </>
       
    )
    
 }
     
    



const mapStateToProps=(state)=>{
  return({
      data:state.datareducer.data,
      storedData:state.dataStore.datavalue,
      categoryClicked:state.clickreducer.value,
      selectedGender:state.selectedGender.gender,
      userid:state.Authstate.data,
      cartdata:state.cartdata.data,
      state:state
})
}
export default connect(mapStateToProps,{Allitemaction,dataStoreAction,categoryFetchAction,genderFetchAction,multiplecategoryAction,genderaction,clickaction,cartAddActions,initialCartValue,wishlistActions}) (memo(Productlistingpage))