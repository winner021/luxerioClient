import React from 'react'
import { Link } from 'react-router-dom'
import { memo } from 'react'
const Footer=()=>{
    return(
        <div className='footer'>
            <h2>Explore the emblematic styles</h2>
          <div className="footer_items grid-3-col">
          <div className="left">
             <ul className="list">
                 <li className='elements'>
                     <Link> Home</Link>
                 </li>
                 <li className='elements'> <Link> About</Link></li>
                 <li className='elements'>  <Link> Visit Store</Link></li>
                 <li className='elements'>  <Link> Book an Appointment</Link></li>
             </ul>
          </div>
          <div className="middle">
            <ul className="list">
                 <li className='elements'>
                     <Link>t-shirt</Link>
                 </li>
                 <li className='elements'> <Link>shirts</Link></li>
                 <li className='elements'>  <Link>Accessories</Link></li>
                 <li className='elements'>  <Link>footwear</Link></li>
                 <li className='elements'>  <Link>huddy</Link></li>
             </ul>
          </div>
          <div className="right">
                 <p>contact us</p>
          </div>
          </div>    
        </div>
    )
}


export default(Footer)

