import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Featurein from './Featurein'
import Gendercard from './Gendercard,'
import Category from './Category'
import Aboutus from './Aboutus'
const Home=()=>{
  localStorage.clear()
return(
    <div>
      <Header/>
      <Hero/>
      <Featurein/>
     <Gendercard/>
     <Category/>
     <Aboutus/>
    </div>
)
}

export default Home