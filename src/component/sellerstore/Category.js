import React from 'react'
import"../css/style.css"
import { Link } from 'react-router-dom'
const Category=()=>{
    return(
        <div className='category'>

            <div className="category__about">
                Shop by over finest category
            </div>
            <div className="grid-3-col">
                <div className="product__tshirt">
                     <div className="about">
                        <Link to="#">T-Shirts</Link>
                     </div>
                </div>
                <div className="product__shirt">
                <div className="about">
                        <Link to="#">Shirts</Link>
                     </div>
                </div>
                <div className="product__accessories">
                <div className="about">
                        <Link to="#">watch</Link>
                     </div>
                </div> 

            </div>
            <div className="grid-2-col">
            <div className="product__shoes">
            <div className="about">
                        <Link to="#">FootWears</Link>
                     </div>
                </div>
                <div className="product__trousers trousers-width">
                <div className="about">
                        <Link to="#">Trousers</Link>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Category

