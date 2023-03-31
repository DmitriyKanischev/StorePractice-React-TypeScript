import { Loader } from '../components/Loader';
import { Product } from '../components/Product';
import { useProducts } from '../hooks/ProductsHooks';
import { ErrorMessage } from '../components/Error';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';
import { useContext } from 'react';


export function ProductsPages() {
    const {products, error, loading, addProduct} = useProducts();
    const {modal, openModal, closeModal} = useContext(ModalContext)
  
    const createHandler = (product: IProduct) => {
      closeModal()
      addProduct(product)
    }
  
    return (
      <>
        <div className='container mx-auto max-w-2xl pt-5'>
            { loading && <Loader/> }
            { error && <ErrorMessage error={error} />}
            { products.map(product => <Product product={product} key={product.id}/>) }
  
            {modal && <Modal title="Create new product" onClose={closeModal}>
              <CreateProduct onCreate={createHandler}/>
            </Modal>}
  
        </div>
  
      <button
          className='sticky bottom-[5%] left-[95%] rounded-full bg-yellow-400 text-2xl px-4 py-2 hover:text-slate-100'
          onClick={openModal}
        >+</button>
      </>
    );
  
}