import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Thankyou from './components/Thankyou';

const NoScriptFallback = () => (
  
<noscript>
  <img height="1" width="1" 
  style={{ display: "none" }}
  src="https://www.facebook.com/tr?id=604992212362592&ev=PageView&noscript=1"
  alt="Tracking Pixel"/>
</noscript>

);

const App = () => {
  return (
  <>

  <NoScriptFallback />

   <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/thankyou' element={ <div> <Thankyou/> </div> }/>
        </Routes>
    </BrowserRouter>  

  </>
  
  )
}

export default App;