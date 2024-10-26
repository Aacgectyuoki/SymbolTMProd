import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/symboltm-logo.png';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [workDropdown, setWorkDropdown] = useState(false); // Work dropdown state
  const [aboutDropdown, setAboutDropdown] = useState(false); // About dropdown state
  
  const toggleMenu = () => setIsOpen(!isOpen); // Toggle mobile menu
  const toggleWorkDropdown = (e) => {
    e.preventDefault();
    setWorkDropdown(!workDropdown); // Toggle work dropdown
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close the mobile menu on navigation
  };

  return (
    <header className="bg-white shadow p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="SymbolTM"
          className="h-12 cursor-pointer"
          onClick={() => handleNavigate('/')}
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center" style={{ gap: '5rem' }}>
          {/* Work Dropdown */}
          <div className="relative">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800"
              onClick={toggleWorkDropdown}
            >
              Work
            </a>
            {workDropdown && (
              <div className="absolute bg-white shadow-lg rounded mt-2 w-40">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleNavigate('/#top')}
                >
                  Top of Page
                </a>
                <a
                  href="/#services"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleNavigate('/#services')}
                >
                  Services
                </a>
                <a
                  href="/#contact"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleNavigate('/#contact')}
                >
                  Contact
                </a>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div className="relative">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800"
              onClick={(e) => {
                e.preventDefault();
                setAboutDropdown(!aboutDropdown);
              }}
            >
              About
            </a>
            {aboutDropdown && (
              <div className="absolute bg-white shadow-lg rounded mt-2 w-40">
                <a
                  href="/about#top"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Top of Page
                </a>
                <a
                  href="/about#services"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Services
                </a>
                <a
                  href="/about#contact"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white p-4">
          {/* Work Section in Mobile */}
          <div className="mb-4">
            <p className="font-bold text-gray-800">Work</p>
            <a
              href="/work#top"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Top of Page
            </a>
            <a
              href="/work#services"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="/work#contact"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>

          {/* About Section in Mobile */}
          <div>
            <p className="font-bold text-gray-800">About</p>
            <a
              href="/about#top"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Top of Page
            </a>
            <a
              href="/about#services"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="/about#contact"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;