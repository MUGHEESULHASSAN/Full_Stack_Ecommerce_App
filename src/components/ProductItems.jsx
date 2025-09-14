import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItems = ({id,image,name,price}) => {
    const {currency} =useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/products/${id}`}>
        <div className="overflow-hidden">
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
            <p></p>
        </div>
    </Link>
  )
}

export default ProductItems