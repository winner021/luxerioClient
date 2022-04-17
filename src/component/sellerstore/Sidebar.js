import React from 'react'
import { useState } from 'react' 



const Sidebar =({gettxt})=>{
    const[value,setvalue]=useState(null);
    
    const changehandler=(e)=>{
         console.log(e.target.value)
    }

     return(
      /*  <div className='sidebar'>
          <form onChange={changehandler}>
              <input type="radio"  id="T-Shirts" name="category" value="T-Shirts"/>
              <label for="T-Shirts">T-Shirts</label><br/>
              <input type="radio" id="Shirts" name="category" value="Shirts"/>
              <label for="Shirts">Shirts</label><br/>
              <input type="radio" id="Huddy" name="category" value="Huddy"/>
              <label for="Huddy">Huddy</label>
              <input type="radio" id="acesssories" name="category" value="acesssories"/>
              <label for="acesssories">acesssories</label>
              <input type="radio" id="footwear" name="category" value="footwear"/>
              <label for="footwear">footwear</label>
              
          </form>
        </div>*/
        <div>
            Sidebar
        </div>
    )
}

export default Sidebar 