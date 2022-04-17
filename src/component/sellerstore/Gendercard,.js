import React from 'react'
import"../css/style.css"
import { Link } from 'react-router-dom'
const Gendercard=()=> {
  return (
      
      <div className="gendercard ">
        
        <div className="about">
        Shop For
        </div>
        
        <div className="grid-2-col bottom-marg">

        <div className="mail__card">
            <Link to="#">For Him</Link>
        </div>
        <div className="female__card">
        <Link to="#">For Her</Link>
        </div>
        </div>
        
      </div>
    
  )
}

export default Gendercard