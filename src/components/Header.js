import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/images/symboltm-logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [workDropdown, setWorkDropdown] = useState(false); // Work dropdown state
  const [aboutDropdown, setAboutDropdown] = useState(false); // About dropdown state

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle mobile menu
  const toggleWorkDropdown = () => {
    setWorkDropdown(!workDropdown); // Toggle work dropdown
    setAboutDropdown(false); // Close the other dropdown
  };
  const toggleAboutDropdown = () => {
    setAboutDropdown(!aboutDropdown); // Toggle about dropdown
    setWorkDropdown(false); // Close the other dropdown
  };

  const handleCloseDropdowns = () => {
    setWorkDropdown(false);
    setAboutDropdown(false);
  };

  return (
    <header className="bg-white shadow p-6">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="SymbolTM"
          className="h-12 cursor-pointer"
          // onClick={() => (window.location.href = '/#')} // dev mode
          onClick={() => (window.location.href = '/SymbolTMProd/#')} // prod mode
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center" style={{ gap: '5rem', marginRight: '70px' }}>
          {/* Work Dropdown */}
          <div className="relative">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={toggleWorkDropdown}
            >
              Work
            </button>
            {workDropdown && (
              <div className="absolute bg-white shadow-lg rounded mt-2 w-40">
                <HashLink
                  smooth
                  to="/#"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleCloseDropdowns}
                >
                  Top of Page
                </HashLink>
                <HashLink
                  smooth
                  to="/#work"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleCloseDropdowns}
                >
                  Work
                </HashLink>
                <HashLink
                  smooth
                  to="/#services"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleCloseDropdowns}
                >
                  Services
                </HashLink>
                <HashLink
                  smooth
                  to="/#contact"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleCloseDropdowns}
                >
                  Contact
                </HashLink>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div className="relative">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={toggleAboutDropdown}
            >
              Our Brand Story
            </button>
            {aboutDropdown && (
              <div className="absolute bg-white shadow-lg rounded mt-2 w-40">
                <HashLink
                  smooth
                  to="/our-brand-story#top-of-page"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleCloseDropdowns}
                >
                  Top of Page
                </HashLink>
                <HashLink
                  smooth
                  to="/our-brand-story#past-experiences"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleCloseDropdowns}
                >
                  Past Experiences
                </HashLink>
                <HashLink
                  smooth
                  to="/our-brand-story#contact"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleCloseDropdowns}
                >
                  Contact
                </HashLink>
              </div>
            )}
          </div>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 rounded bg-black"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24">
            <path d="M4 6h16" stroke="white" strokeWidth="2" />
            <path d="M4 12h16" stroke="white" strokeWidth="2" />
            <path d="M4 18h16" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white p-4">
          {/* Work Section in Mobile */}
          <div className="mb-4">
            <p className="font-bold text-gray-800">Work</p>
            <HashLink
              smooth
              to="/#"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Top of Page
            </HashLink>
            <HashLink
              smooth
              to="/#work"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Work
            </HashLink>
            <HashLink
              smooth
              to="/#services"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Services
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </HashLink>
          </div>

          {/* About Section in Mobile */}
          <div>
            <p className="font-bold text-gray-800">About</p>
            <HashLink
              smooth
              to="/our-brand-story#top-of-page"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Top of Page
            </HashLink>
            <HashLink
              smooth
              to="/our-brand-story#past-experiences"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Past Experiences
            </HashLink>
            <HashLink
              smooth
              to="/our-brand-story#contact"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </HashLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
