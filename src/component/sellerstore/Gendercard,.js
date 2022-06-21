import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { genderFetchAction } from '../../actions'

import"../css/style.css"
import { genderaction } from '../../actions'
import { clickaction } from '../../actions'
import { memo } from 'react'

const Gendercard=(props)=> {

  let history=useHistory()

  const clickhandlerMail=(value)=>{
   
    props.clickaction("All Products")
    props.genderaction(value)
    props.genderFetchAction(value)
    history.push('/Productlistingpage')
    
  }
  const clickhandlerfemale=(value)=>{
    props.genderaction(value)
    props.genderFetchAction(value)
    props.clickaction("All Products")
    history.push('/Productlistingpage')
  }
  console.log(props.state)
  return (
      
      <div className="gendercard ">
        
        <div className="about">
        Shop For
        </div>
        
        <div className="grid-2-col bottom-marg">

        <div className="mail__card">
            <button className='mail__card___btn'onClick={()=>clickhandlerMail("Mens")}  to="#">For Him</button>
        </div>
        <div className="female__card">
        <button className='female__card___btn' onClick={()=>clickhandlerfemale("Woman")} to="#">For Her</button>
        </div>
        </div>
        
      </div>
    
  )
}

const mapStateToProps=(state)=>{
  return {state:state}
}

export default connect(mapStateToProps,{genderaction,clickaction,genderFetchAction}) (Gendercard)