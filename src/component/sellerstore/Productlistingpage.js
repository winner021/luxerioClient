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
const  Productlistingpage =(props)=>{
    
    useEffect(()=>{
        console.log("outside")
    if(props.categoryClicked==="All Products" && props.selectedGender !=null){
        props.genderFetchAction(props.selectedGender)
        console.log("inside") 
    }else if(props.selectedGender!=null && props.categoryClicked!=null && props.categoryClicked !="All Products" )
    {
        props.multiplecategoryAction(props.categoryClicked,props.selectedGender)
        console.log("inside1")
    }else if(props.selectedGender!=null){
       props.genderFetchAction(props.selectedGender)
       console.log("inside2")
    }
    else if(props.categoryClicked==="All Products" && props.selectedGender===null)
    {console.log("inside3")
       props.Allitemaction()
    }else{

         props.categoryFetchAction(props.categoryClicked)
         console.log("inside all")
    }
    },[props.categoryClicked,props.selectedGender]) 



    useEffect(()=>{
        if(props.data){
            props.dataStoreAction(props.data)
        }
    },[props.data]) 

    
    

    

 
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
        <button className='cart primary'>Add To cart</button>
        <button className='wishlist secondary'>Wishlstst</button>
        </div>
    </div>
    })

     const[getresetgender,setresetgender]=useState(null)

   useEffect(()=>{
    props.Allitemaction()
   },[getresetgender])

  
   const onclickOne=(value)=>{
    setresetgender(value)
       props.clickaction("ALL PRODUCTS")
       props.genderaction(null)
   }
   const onclickTwo=(value)=>{
    setresetgender(value)
    props.clickaction("ALL PRODUCTS")
    props.genderaction(null)
}
  

console.log(props.state)
   
    return(
       
        <>

           <Header/>
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
      state:state
})
}
export default connect(mapStateToProps,{Allitemaction,dataStoreAction,categoryFetchAction,genderFetchAction,multiplecategoryAction,genderaction,clickaction}) (Productlistingpage)