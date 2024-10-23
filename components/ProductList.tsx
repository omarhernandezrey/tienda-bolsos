// components/ProductList.tsx
"use client";

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Nuestros Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
