// components/Navbar.tsx
"use client";

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaShoppingCart,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-900 p-4 fixed w-full z-20 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Menú Hamburguesa para Móviles */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none transition-transform transform hover:scale-110"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Tienda de Bolsos"
              width={150}
              height={50}
              className="transition-transform transform hover:scale-105 md:block md:ml-4"
            />
          </Link>
        </div>

        {/* Carrito de Compras para Móviles */}
        <div className="flex items-center md:hidden">
          <Link
            href="/cart"
            className="text-white text-3xl relative transition-transform transform hover:scale-110"
          >
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full px-2 py-0.5 text-xs">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Menú para Escritorio */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-8">
          <Link
            href="/"
            className="nav-link text-white font-semibold hover:text-gray-300 transition duration-200"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="nav-link text-white font-semibold hover:text-gray-300 transition duration-200"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/productos"
            className="nav-link text-white font-semibold hover:text-gray-300 transition duration-200"
          >
            Productos
          </Link>
          <Link
            href="/contacto"
            className="nav-link text-white font-semibold hover:text-gray-300 transition duration-200"
          >
            Contacto
          </Link>
          {/* Carrito de Compras */}
          <Link
            href="/cart"
            className="text-white text-3xl relative transition-transform transform hover:scale-110"
          >
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full px-2 py-0.5 text-xs">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Menú Móvil */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-60 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
          {/* Menú Lateral */}
          <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 p-6 md:hidden transition-transform transform translate-x-0 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex justify-start mb-6">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="Tienda de Bolsos"
                    width={150}
                    height={50}
                    className="transition-transform transform hover:scale-105"
                  />
                </Link>
              </div>
              {/* Enlaces del Menú */}
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="nav-link text-white text-lg font-medium hover:bg-gray-800 p-2 rounded-md transition duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="nav-link text-white text-lg font-medium hover:bg-gray-800 p-2 rounded-md transition duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/productos"
                    className="nav-link text-white text-lg font-medium hover:bg-gray-800 p-2 rounded-md transition duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="nav-link text-white text-lg font-medium hover:bg-gray-800 p-2 rounded-md transition duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            {/* Redes Sociales */}
            <div className="mt-8 flex justify-around space-x-4">
              <Link href="#">
                <FaFacebookF className="text-white text-2xl hover:text-teal-400 transition duration-200" />
              </Link>
              <Link href="#">
                <FaInstagram className="text-white text-2xl hover:text-teal-400 transition duration-200" />
              </Link>
              <Link href="#">
                <FaTwitter className="text-white text-2xl hover:text-teal-400 transition duration-200" />
              </Link>
              <Link href="#">
                <FaWhatsapp className="text-white text-2xl hover:text-teal-400 transition duration-200" />
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
