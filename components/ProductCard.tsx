// components/ProductCard.tsx
"use client";

import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  addToCart: (product: { id: string; name: string; price: number }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  addToCart,
}) => {
  return (
    <div className="border rounded-md p-4">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="object-cover"
      />
      <h2 className="text-xl mt-2">{name}</h2>
      <p className="text-gray-700">${price}</p>
      <button
        onClick={() => addToCart({ id, name, price })}
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;

