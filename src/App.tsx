import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProducts } from './hooks/ProductsHooks';
import { ErrorMessage } from './components/Error';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';

function App() {
  const {products, error, loading} = useProducts();

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {/* { loading && <Loader/> }
      { error && <ErrorMessage error={error} />}
      { products.map(product => <Product product={product} key={product.id}/>) } */}

      <Modal title="Create new product">
        <CreateProduct/>
      </Modal>
    </div>
  );
}

export default App;
