import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Thankyou from './components/Thankyou';

const App = () => {
  return (
  <>
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