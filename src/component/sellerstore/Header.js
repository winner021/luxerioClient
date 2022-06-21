import React from 'react'
import "../css/style.css"
import Googleauth from '../../Googleauth'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { categoryFetchAction } from '../../actions'
import { genderaction } from '../../actions'
import { clickaction } from '../../actions'
import { memo } from 'react'
const Header=(props)=>{
    const history =useHistory();

    const clickHandler=(value)=>{
      props.clickaction(value)
      props.categoryFetchAction(value)
      props.genderaction(null)
      history.push('/Productlistingpage')

    }

    const clickHandlershirt=(value)=>{
        props.clickaction(value)
        props.categoryFetchAction(value)
        props.genderaction(null)
        history.push('/Productlistingpage')
  
      }
    
      const clickHandlerhuddy=(value)=>{
        props.clickaction(value)
        props.categoryFetchAction(value)
        props.genderaction(null)
        history.push('/Productlistingpage')
  
      }
      const clickHandlerasscessorie=(value)=>{
        props.clickaction(value)
        props.categoryFetchAction(value)
        props.genderaction(null)
        history.push('/Productlistingpage')
  
      }
      const clickHandlerfoot=(value)=>{
        props.clickaction(value)
        props.categoryFetchAction(value)
        props.genderaction(null)
        history.push('/Productlistingpage')
  
      }

    const[getclass,setclass]=useState("hide")
    const[getdrop,setdrop]=useState("categorydrop")
        
    var num=0;
    
    



    const barsclick=()=>{
        

     
       
        if(getclass==="show")
        {
            setclass("hide")
        }
        else{
            setclass("show")
        }
      
      
    }
    const enterMouse=()=>{

         if(getdrop==="categorydrop"){
            setdrop("categoryshow")
         }
         else{
            setdrop("categorydrop")
         }
         
    }
   

    return(
        <div>
            <div className="header">
                <div className="header__list">
                    <button onClick={barsclick}>
                    <i class="fas fa-bars"></i>
                    </button>
               
                    <ul className={`${getclass}`} id='menu'>
                        
                       <li className="list"><Link to="/">HOME</Link></li>
                       <li className="list"> <button onClick={()=>{enterMouse()}}  >Products</button></li>
                       <li className="list" ><a href='about'>About</a></li>
                       <li className="list"><Link>contact</Link></li>
                    </ul>
                    <div className={`dropdown ${getdrop}`}  >
                    <button className='category__card' onClick={()=>clickHandler("T-Shirts")} to="#" >T-Shirts</button>
                    <button onClick={()=>clickHandlershirt("Shirts")} className='category__card' to="#">Shirts</button>
                    <button onClick={()=>clickHandlerasscessorie("acesssories")} className='category__card' to="#">watch</button>
                    <button onClick={()=>clickHandlerfoot("footwear")} className='category__card' to="#">FootWears</button>
                    <button onClick={()=>clickHandlerhuddy("Huddy")} className='category__card' to="#">huddy</button>
                    </div>
                    
                </div>
                <div className="logo">
                    luxerio
                </div>
                <div className="Header_right">
                    <div className="searchicon">
                    <i className='fas fa-search'></i>
                    </div>
                   <input type="text" placeholder='search' />
                   <div className="carticon">
                       <Link to='/cart'>
                       <i className='fas fa-cart-arrow-down'></i>
                       </Link>
                  </div>
                   <div className="Wishlisticon">
                       <Link to='/wishlist'>
                       <i class='fas fa-heart' ></i>
                       </Link>
                   </div>
                   <div className="googleAuth">
                   <Googleauth/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null,{clickaction,categoryFetchAction,genderaction}) (Header)