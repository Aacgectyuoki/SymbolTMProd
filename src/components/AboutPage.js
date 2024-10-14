import React, { useState } from 'react';
import logo from '../assets/images/symboltm-logo.png';

const AboutPage = () => {
  const [workDropdown, setWorkDropdown] = useState(false); // Dropdown state for 'Work'
  const [aboutDropdown, setAboutDropdown] = useState(false); // Dropdown state for 'About'
  const [isOpen, setIsOpen] = useState(false); // Hamburger menu state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-6">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="SymbolTM" className="h-12" />
          <nav className="hidden md:flex space-x-4">
            <div
              className="relative"
              onMouseEnter={() => setWorkDropdown(true)}
              onMouseLeave={() => setWorkDropdown(false)}
            >
              <a href="/" className="text-gray-600 hover:text-gray-800">Work</a>
              {workDropdown && (
                <div className="absolute bg-white shadow-lg rounded mt-2 w-40">
                  <a href="#services" className="block px-4 py-2 hover:bg-gray-200">Services</a>
                  <a href="#contact" className="block px-4 py-2 hover:bg-gray-200">Contact</a>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>
              {aboutDropdown && (
                <div className="absolute bg-white shadow-lg rounded mt-2 w-40">
                  <a href="#services" className="block px-4 py-2 hover:bg-gray-200">Services</a>
                  <a href="#contact" className="block px-4 py-2 hover:bg-gray-200">Contact</a>
                </div>
              )}
            </div>
            {/* <a href="#services" className="text-gray-600 hover:text-gray-800">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a> */}
          </nav>

          {/* Hamburger Menu Button */}
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
          <nav className="md:hidden bg-white space-y-4 p-4">
            <div>
              <a href="/" className="block text-gray-600 hover:text-gray-800">Work</a>
              <div className="pl-4">
                <a href="#services" className="block text-gray-600 hover:text-gray-800">Services</a>
                <a href="#contact" className="block text-gray-600 hover:text-gray-800">Contact</a>
              </div>
            </div>
            <div>
              <a href="/about" className="block text-gray-600 hover:text-gray-800">About</a>
              <div className="pl-4">
                <a href="#services" className="block text-gray-600 hover:text-gray-800">Services</a>
                <a href="#contact" className="block text-gray-600 hover:text-gray-800">Contact</a>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* About Content */}
      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p className="mb-4">
          SymbolTM is a boutique studio, providing a range of services. We are passionate about turning complex issues into simple solutions. 
          Our experiences bring broad insights around brand symbols, icons, and stories, including research to ensure trademarks, domains, and copyright solutions.
        </p>
        <p className="mb-4">
          Michael Thibodeau, a stroke survivor and brand strategist, has worked on world-class campaigns and developed iconic brands, including the MSN butterfly logo, Marriott International's identity, 
          and much more.
        </p>
      </section>

        {/* Services Section */}
    <section id="services" className="bg-gray-100 py-12">
      <div className="container mx-auto text-gray-700">
          {/* Services Title - Extra Bold */}
          <h3 className="text-2xl mb-6">
            <span className="font-avenir-bold">Services:</span>
            <span className="font-avenir-light"> Our approach is flexible and scalable...</span>
          </h3>


          {/* List of Services */}
          <ul className="list-decimal pl-4 space-y-4">
            <li className="font-avenir-light">Analysis: <span className="font-avenir-light">Provide thorough research through analysis and develop winning solutions.</span></li>
            <li className="font-avenir-light">Strategy: <span className="font-avenir-light">Orchestrate planning to implementation.</span></li>
            <li className="font-avenir-light">Creativity: <span className="font-avenir-light">Provide logo options, icons, innovative design and ideation.</span></li>
            <li className="font-avenir-light">Management: <span className="font-avenir-light">Develop comprehensive plan from conception to launch including:</span></li>
          </ul>
      </div>
    </section>


      {/* Contact Section */}
      <section id="contact" className="bg-white py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Get in touch.</h2>
          <p className="inter-bold">Email: <span className="inter-light">Hi@SymbolTM.com</span></p>
          <p className="inter-bold">Mobile: <span className="inter-light">+1 480 717 0449</span></p>
          <p className="inter-bold">Office: <span className="inter-light">7202 North 15th Pl., Phoenix, AZ 85020</span></p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
