import React from 'react'
import"../css/style.css"


const Errormsg=(props)=>{

    console.log(props)
    return(
        <div className={`error_msg ${props.class}`}>
        
          <div className="content">{props.msg}</div>
        </div>
    )
}

export default Errormsg