import React from 'react';
import { Product } from './components/Product';
import { products } from './data/products';

function App() {
  // function fetchData():void {
  //   const request: any = fetch('https://fakestoreapi.com/products');
  //   request
  //         .then((response: any) => {
  //         if(!response.ok) {
  //           throw new Error(`Error ${response.status}`)
  //         } else {
  //           return response.json()
  //         }
  //       })
  //         .then((data: any[]) => {
  //           data.map(obj => {
              
  //           })
  //         })
  //   console.log(request)
  // }
  // fetchData()
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      <Product product={products[0]}/>
    </div>
  );
}

export default App;
