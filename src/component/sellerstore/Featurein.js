import React from 'react'
import "../css/style.css"
const Featurein=()=>{
    return(
        
         <div className="feature ">
             <div className="grid-4-col">
             <div className="feature__card">
              <div className="feature__icon">  
                <i class='fas fa-shipping-fast'></i>
              </div>
              <div className="feature__desc">
              FREE SHIPPING
              </div>
           </div>
           <div className="feature__card">
              <div className="feature__icon">  
              <i class="fas fa-money-check"></i>
              </div>
              <div className="feature__desc">
             Easy CheckOut
              </div>
           </div>
           <div className="feature__card">
              <div className="feature__icon">  
              <i class="fas fa-check"></i>
              </div>
              <div className="feature__desc">
              High Quality material
              </div>
           </div>
           <div className="feature__card">
              <div className="feature__icon">  
              <i class='fas fa-store-alt'></i>
              </div>
              <div className="feature__desc">
              Fell the Luxury
              </div>
           </div>
             </div>
           
        
         </div>
    )
}

export default Featurein
