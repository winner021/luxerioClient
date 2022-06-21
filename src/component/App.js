import {BrowserRouter,Route } from 'react-router-dom';


import landingPage from './landingPage';
import Home from './sellerstore/Home';
import Productlistingpage from './sellerstore/Productlistingpage';
import Cart from './sellerstore/Cart';
import Wishlist from './sellerstore/Wishlist';
import Aboutus from './sellerstore/Aboutus';
const App=()=>{
    return(
        <div>

            
           <BrowserRouter>
           <Route path='/' exact component={landingPage}/>
           <Route path='/home' exact component={Home}/>
           <Route path='/Productlistingpage' component={Productlistingpage}/>
           <Route path='/cart' component={Cart} />
           <Route path='/wishlist' component={Wishlist} />
         
           </BrowserRouter>
        </div>
    )
}

export default App;