import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Featurein from './Featurein'
import Gendercard from './Gendercard,'
import Category from './Category'
import Aboutus from './Aboutus'
import Review from './Review'
import Footer from './Footer'
import { memo } from 'react'


const Home=()=>{

  localStorage.clear()
 

    
   
   
  



 
  

 


return(
    <div>
      <Header/>
      
      <Hero/>
      <Featurein/>
     <Gendercard/>
     <Category/>
     <Aboutus id="about"/>
     <Review/>
     <Footer/>
    
    </div>
)
}

export default  Home