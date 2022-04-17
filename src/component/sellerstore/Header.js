import React from 'react'
import "../css/style.css"
const Header=()=>{
    return(
        <div>
            <div className="header">
                <div className="header__list">
                    <ul>
                       <li className="list">HOME</li>
                       <li className="list">about</li>
                       <li className="list">product</li>
                       <li className="list">pages</li>
                       <li className="list">contact</li>
                    </ul>
                </div>
                <div className="logo">
                    luxerio
                </div>
                <div className="Header_right">
                    <div className="searchicon">
                    <i className='fas fa-search'></i>
                    </div>
                   <input type="text" placeholder='search' />
                   <div className="carticon">
                   <i className='fas fa-cart-arrow-down'></i>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Header