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
    <div className="border rounded-md p-4 flex flex-col items-center">
      <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-100 relative">
        <Image
          src={image}
          alt={name}
          layout="fill" // Ocupa todo el contenedor
          objectFit="contain" // Se adapta sin recortar contenido
          className="object-center"
        />
      </div>
      <h2 className="text-xl mt-4 text-center">{name}</h2>
      <p className="text-gray-700 text-center">${price.toLocaleString()}</p>
      <button
        onClick={() => addToCart({ id, name, price })}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md w-full hover:bg-blue-600"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
