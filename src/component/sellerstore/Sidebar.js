import React from 'react'
import { useState } from 'react' 
import"../css/style.css"
import { clickaction } from '../../actions'
import { genderaction } from '../../actions'
import { connect } from 'react-redux'
import { memo } from 'react'

const Sidebar =(props)=>{
    const[getclick,setclick]=useState(0)
    const genderHandler=(e)=>{
        props.genderaction(e.target.value)
   }
    const categoryHandler=(e)=>{
       
         props.clickaction(e.target.value)
    }

    const clickhandlerOne=(value)=>{
       setclick(getclick+1)
           props.onclickOne(getclick)
              
     }
   
     const clickhandlerTwo=(value)=>{
        setclick(getclick+1)
       props.onclickTwo(getclick)
  }
    

     return(
        <div className='sidebar'>
            <h1>
                Refine by
            </h1>
          <form onChange={categoryHandler} className="category_select">
              <h2 className='Category__heading'>Product Type</h2>
              <input type="radio"  id="T-Shirts" name="category" value="T-Shirts"/>
              <label htmlFor="T-Shirts">T-Shirts</label><br/>
              <input type="radio" id="Shirts" name="category" value="Shirts"/>
              <label htmlFor="Shirts">Shirts</label><br/>
              <input type="radio" id="Huddy" name="category" value="Huddy"/>
              <label htmlFor="Huddy">Huddy</label><br/>
              <input type="radio" id="acesssories" name="category" value="acesssories"/>
              <label htmlFor="acesssories">acesssories</label><br/>
              <input type="radio" id="footwear" name="category" value="footwear"/>
              <label htmlFor="footwear">footwear</label>
              <input type="reset" className='reset' onClick={()=>clickhandlerTwo("true")} />
              
          </form>
          <form onChange={genderHandler} className="gender_select">
              <h2 className='gender__heading'> gender</h2>
              <input type="radio"  id="Mens" name="gender" value="Mens"/>
              <label htmlFor="Mens">Mens</label><br/>
              <input type="radio" id="Woman" name="gender" value="Woman"/>
              <label htmlFor="Woman">Woman</label><br/>
              <input type="reset" className='reset' onClick={()=>clickhandlerOne("true")} />
              
          </form>
        </div>
       
     )
}

export default connect(null,{clickaction,genderaction}) (Sidebar) 