import {Route, Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { ProductsPages } from './pages/ProductsPage';
import { FeedbackPage } from './pages/FeedbackPage';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<ProductsPages/>}/>
      <Route path='/posts' element={<FeedbackPage/>}/>
      <Route path='*' element={<div>Not found</div>}/>
    </Routes>
  )
}

export default App;
