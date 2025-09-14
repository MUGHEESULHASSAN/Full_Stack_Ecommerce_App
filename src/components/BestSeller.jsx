import React from 'react'
import { useContext,useState,useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';

const BestSeller = () => {
    const {products}=useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);
    useEffect(()=>{
        const bestProduct=products.filter((items)=>(items.bestseller));
        setBestSeller(bestProduct.slice(0,5));
        
    },[])
  return (
    <div className="my-10">
        <div className="text-center text-3xl py-8">
            <Title text1={"Best"} text2={"Sellers"}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium, ea neque aspernatur error modi esse, suscipit ex dicta eos fugiat recusandae, quos consectetur delectus impedit voluptates veniam minus sunt!
            </p>

        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                bestSeller.map((items,index)=>(
                    <ProductItems key={index} id={items._id} name={items.name} image={items.image} price={items.price}/>
                ))
            }

        </div>
    </div>
  )
}

export default BestSeller