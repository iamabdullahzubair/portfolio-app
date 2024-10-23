'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

type Props = {}

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="container mx-auto px-6 py-3 hidden sm:block">
        <ul className="flex justify-center space-x-8">
          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-lg font-medium hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex items-center justify-between px-6 py-3 bg-white">
        <h1 className="text-2xl font-bold">Your Logo</h1>
        <button onClick={toggleMenu} className="text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Full screen) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8">
          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="text-white text-2xl font-medium hover:text-blue-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
