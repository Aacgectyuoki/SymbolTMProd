import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/symboltm-logo.png';

const AboutPage = () => {
  const [workDropdown, setWorkDropdown] = useState(false); // Dropdown state for 'Work'
  const [aboutDropdown, setAboutDropdown] = useState(false); // Dropdown state for 'About'
  const [isOpen, setIsOpen] = useState(false); // Hamburger menu state
  const navigate = useNavigate(); // Initialize React Router's navigate function

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Navigate to Work Page with anchor
  const handleNavigateToWork = (anchor) => navigate(`/#${anchor}`);

  // Scroll to top of About page
  const handleNavigateToAboutTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-6">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="SymbolTM" className="h-12" />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center" style={{ gap: '5rem', marginLeft: '120px' }}>
            {/* Work Dropdown */}
            <div className="relative">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800"
                onClick={(e) => {
                  e.preventDefault();
                  setWorkDropdown(!workDropdown);
                }}
              >
                Work
              </a>
              {workDropdown && (
                <div className="absolute bg-white shadow-lg rounded mt-2 w-40">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleNavigateToWork('top')}
                  >
                    Top of Page
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleNavigateToWork('services')}
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleNavigateToWork('contact')}
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
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleNavigateToAboutTop}
                  >
                    Top of Page
                  </a>
                  <a href="#services" className="block px-4 py-2 hover:bg-gray-200">Services</a>
                  <a href="#contact" className="block px-4 py-2 hover:bg-gray-200">Contact</a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Hamburger Menu */}
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
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => handleNavigateToWork('top')}
            >
              Work Top of Page
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => handleNavigateToWork('services')}
            >
              Work Services
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => handleNavigateToWork('contact')}
            >
              Work Contact
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800"
              onClick={handleNavigateToAboutTop}
            >
              About Top of Page
            </a>
            <a href="#services" className="block text-gray-600 hover:text-gray-800">About Services</a>
            <a href="#contact" className="block text-gray-600 hover:text-gray-800">About Contact</a>
          </nav>
        )}
      </header>

      {/* About Content */}
      <section id="About" className="bg-white-100 py-12">
      <div className="container mx-auto text-gray-700">
          {/* About Title - Extra Bold */}
          <h3 className="text-2xl mb-6">
            <span className="font-avenir-bold">About:</span>
            <span className="font-avenir-light"> Symbol<span style={{ verticalAlign: 'super', fontSize: '0.6em', position: 'relative', top: '0em' }}>TM </span> is 
              a boutique studio, providing a range of services. 
              We are truly passionate about turning complex issues into simple solutions. 
              Our unique experiences bring broad insights around brand symbols, icons and stories, 
              including rich research to ensure proper trademarks, domains and copyright solutions.</span>
          </h3>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white-100 py-12">
        <div className="container mx-auto text-gray-700">
            {/* Services Title - Extra Bold */}
            <h3 className="text-2xl mb-6">
              <span className="font-avenir-bold">Services:</span>
              <span className="font-avenir-light"> Our approach is flexible and scalable and designed
              to add the maximum value – whatever our client’s timescale or budget. 
              Ideally, we like to be involved early in the lifecycle of a project, 
              so we can invest time to understand our clients’ challenges in depth and provide full solutions. 
              But our modular approach makes it easy for clients to use us for individual services whenever they wish.</span>
            </h3>


            {/* List of Services */}
            <ul className="list-decimal pl-6 space-y-4 text-2xl mb-6">
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