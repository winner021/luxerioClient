import React from 'react'
import "./css/style.css"
import { Link } from 'react-router-dom'
const landingPage=()=>{
    return(
        <div className="landingPage">
            <div className="brandName">
            Luxerio
            </div>
            <div className="slogn">
            Because You're Worth It.
            </div>
            <div className="landingPage__login">
                <Link to="/home" className='login_buyer login_btn'>Login As Buyer</Link>
                <a  href=' http://localhost:5000' className='login_seller login_btn'> Login As Seller </a>
            </div>
        </div>
    )
}

export default landingPage