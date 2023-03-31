import {Route, Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { ProductsPages } from './pages/ProductsPage';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<ProductsPages/>}/>
    </Routes>
  )
}

export default App;
