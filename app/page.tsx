// app/page.tsx
import React from 'react';
import ProductList from '../components/ProductList';

const products = [
  {
    id: '1',
    name: 'Bolso de cuero clásico',
    price: 150000,
    image: '/images/bolso1.jpg',
  },
  {
    id: '2',
    name: 'Bolso moderno',
    price: 200000,
    image: '/images/bolso2.jpg',
  },

  {
    id: '3',
    name: 'Bolso moderno',
    price: 200000,
    image: '/images/bolso2.jpg',
  },

  {
    id: '4',
    name: 'Bolso moderno',
    price: 200000,
    image: '/images/bolso2.jpg',
  },

  {
    id: '5',
    name: 'Bolso moderno',
    price: 200000,
    image: '/images/bolso2.jpg',
  },

  {
    id: '6',
    name: 'Bolso moderno',
    price: 200000,
    image: '/images/bolso2.jpg',
  },


  {
    id: '7',
    name: 'Bolso moderno',
    price: 200000,
    image: '/images/bolso2.jpg',
  },


  {
    id: '8',
    name: 'Bolso moderno',
    price: 200000,
    image: '/images/bolso2.jpg',
  },

  {
    id: '9',
    name: 'Bolso moderno',
    price: 200000,
    image: '/images/bolso2.jpg',
  },
  {
    id: '10',
    name: 'Bolso moderno',
    price: 200000,
    image: '/images/bolso2.jpg',
  },

  {
    id: '11',
    name: 'Bolso moderno',
    price: 200000,
    image: '/images/bolso2.jpg',
  },
  // Agrega más productos si lo deseas
];

const HomePage = () => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;