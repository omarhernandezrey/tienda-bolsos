// components/Navbar.tsx
"use client";

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Tienda de Bolsos
        </Link>
        <Link href="/cart" className="text-white">
          Carrito
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
