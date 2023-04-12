import {Route, Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { ProductsPages } from './pages/ProductsPage';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<ProductsPages/>}/>
      <Route path='*' element={<div>Not found</div>}/>
    </Routes>
  )
}

export default App;
