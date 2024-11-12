import React from 'react'
import AddToCart from './AddToCart';

const ProductCard = () => {
  return (
    <div>
      {/*exemplo: DENTRO DO div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
      padding and vertical margin, bg - Background; hover  - quando passamos o rato por cima muda a cor*/}
        <AddToCart />
    </div>
  )
}

export default ProductCard