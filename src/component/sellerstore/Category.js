import React from 'react'
import"../css/style.css"
import { clickaction } from '../../actions'

import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { categoryFetchAction } from '../../actions'
import { genderaction } from '../../actions'


import { memo } from 'react';

const Category=(props)=>{
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

    return(
        <div className='category'>

            <div className="category__about">
                Shop by over finest category
            </div>
            <div className="grid-3-col">
                <div className="product__tshirt">
                     <div className="about" >
                        <button className='category__card' onClick={()=>clickHandler("T-Shirts")} to="#" >T-Shirts</button>
                     </div>
                </div>
                <div className="product__shirt">
                <div className="about">
                        <button onClick={()=>clickHandlershirt("Shirts")} className='category__card' to="#">Shirts</button>
                     </div>
                </div>
                <div className="product__accessories">
                <div className="about">
                        <button onClick={()=>clickHandlerasscessorie("acesssories")} className='category__card' to="#">watch</button>
                     </div>
                </div> 

            </div>
            <div className="grid-2-col">
            <div className="product__shoes">
            <div className="about">
                        <button onClick={()=>clickHandlerfoot("footwear")} className='category__card' to="#">FootWears</button>
                     </div>
                </div>
                <div className="product__trousers trousers-width">
                <div className="about">
                        <button onClick={()=>clickHandlerhuddy("Huddy")} className='category__card' to="#">huddy</button>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null,{clickaction,categoryFetchAction,genderaction})(memo(Category))

