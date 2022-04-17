import {BrowserRouter,Route } from 'react-router-dom';


import landingPage from './landingPage';
import Home from './sellerstore/Home';
import Productlistingpage from './sellerstore/Productlistingpage';
const App=()=>{
    return(
        <div>

            
           <BrowserRouter>
           <Route path='/' exact component={landingPage}/>
           <Route path='/home' exact component={Home}/>
           <Route path='/Productlistingpage' component={Productlistingpage}/>
           </BrowserRouter>
        </div>
    )
}

export default App;