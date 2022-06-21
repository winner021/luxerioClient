import React from 'react'
import { Link } from 'react-router-dom'
import "../css/style.css"
import { connect } from 'react-redux'
import {clickaction} from "../../actions"
import { useHistory } from 'react-router-dom'
import { memo } from 'react'
const Hero=(props)=>{
    let history=useHistory();


    /************ This click handler will call the clickaction creator and will send the name of clicked category to be shown inside productlistingpage *************/
    const clickhandler=(value)=>{
      console.log("hello")
      props.clickaction(value)
      history.push('/Productlistingpage')
        

    }
    return(
        <div className="hero">
        <div className="herocontent">
            <div className="hero__heading">
             luxerio
            </div>
            <div className="hero__about">
             DISCOVER THE COLLECTION
            </div>

            
            <div className="hero__primarybtn">
               <button  onClick={()=>clickhandler("All Products")} className='primary'>collections</button>
               
            </div>
           
         </div>
         
        </div>
    )
}

export default connect(null,{clickaction}) (Hero)