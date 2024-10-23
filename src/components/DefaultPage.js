import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wellzyperks from '../assets/images/WellzyPerks.png';
import marfa from '../assets/images/The_City_of_Marfa.png';
import enchantmentresort from '../assets/images/Enchantment_Resort.png';
import plainsightai from '../assets/images/PlainsightAI.png';
import yummy from '../assets/images/Yummy.png';
import ingenio from '../assets/images/Ingenio.png';
import marriott from '../assets/images/Marriott.png';
import ups from '../assets/images/UPS.png';
import krc from '../assets/images/KRC_Research.png';
import climatevictorygardens from '../assets/images/Climate_Victory_Gardens.png';
import arizonabiltmore from '../assets/images/Arizona_Biltmore.png';
import nocuffs from '../assets/images/1800NoCuffs.png';
import bobanddolores from '../assets/images/Bob&Dolores.png';
import upvalley from '../assets/images/UpValley.png';
import fisherprice from '../assets/images/FisherPrice.png';
import thetidesinn from '../assets/images/The_Tides_Inn.png';
import turvo from '../assets/images/Turvo.png';
import miiamo from '../assets/images/Mii_amo.png';
import edx from '../assets/images/edX.png';
import geirness from '../assets/images/Geir_Ness.png';
import logo from '../assets/images/symboltm-logo.png';

// Projects with categories
const projects = [
  { name: 'WellzyPerks', category: 'Food & Drinks', img: wellzyperks },
  { name: 'Marfa', category: 'Hospitality', img: marfa },
  { name: 'Enchantment Resort', category: 'Hospitality', img: enchantmentresort },
  { name: 'PlainsightAI', category: 'Technology', img: plainsightai },
  { name: 'KRC Research', category: 'Technology', img: krc },
  { name: 'Yummy', category: 'Food & Drinks', img: yummy },
  { name: 'UPS', category: 'Industry', img: ups },
  { name: 'Ingenio', category: 'Technology', img: ingenio },
  { name: 'Climate Victory Gardens', category: 'Food & Drinks', img: climatevictorygardens },
  { name: 'Arizona Biltmore', category: 'Hospitality', img: arizonabiltmore },
  { name: '1800NoCuffs', category: 'Industry', img: nocuffs },
  { name: 'Marriott Hotels', category: 'Hospitality', img: marriott },
  { name: 'Bob & Dolores Hope Foundation', category: 'Industry', img: bobanddolores },
  { name: 'UpValley Inn & Hot Springs', category: 'Hospitality', img: upvalley },
  { name: 'Fisher Price', category: 'Industry', img: fisherprice },
  { name: 'The Tides Inn', category: 'Hospitality', img: thetidesinn },
  { name: 'Turvo', category: 'Technology', img: turvo },
  { name: 'Mii Amo', category: 'Hospitality', img: miiamo },
  { name: 'EdX', category: 'Technology', img: edx },
  { name: 'Geir Ness', category: 'Industry', img: geirness },
];

// Category options
const categories = ['All', 'Hospitality', 'Technology', 'Food & Drinks', 'Industry'];

const DefaultPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default is 'All'
  const [workDropdown, setWorkDropdown] = useState(false); // Dropdown state for 'Work'
  const [aboutDropdown, setAboutDropdown] = useState(false); // Dropdown state for 'About'
  const navigate = useNavigate(); // Initialize React Router's navigate function


  
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  const handleNavigateToAbout = (anchor) => navigate(`/about#${anchor}`);
  const handleNavigateToWorkTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-6">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="SymbolTM" className="h-12" />

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4">
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
                    onClick={handleNavigateToWorkTop}
                  >
                    Top of Page
                  </a>
                  <a href="#services" className="block px-4 py-2 hover:bg-gray-200">Services</a>
                  <a href="#contact" className="block px-4 py-2 hover:bg-gray-200">Contact</a>
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
                    onClick={() => handleNavigateToAbout('top')}
                  >
                    Top of Page
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleNavigateToAbout('services')}
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleNavigateToAbout('contact')}
                  >
                    Contact
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
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
          <nav className="md:hidden bg-gray p-4">
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800"
              onClick={handleNavigateToWorkTop}
            >
              Work Top of Page
            </a>
            <a href="#services" className="block text-gray-600 hover:text-gray-800">Work Services</a>
            <a href="#contact" className="block text-gray-600 hover:text-gray-800">Work Contact</a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => handleNavigateToAbout('top')}
            >
              About Top of Page
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => handleNavigateToAbout('services')}
            >
              About Services
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800"
              onClick={() => handleNavigateToAbout('contact')}
            >
              About Contact
            </a>
          </nav>
        )}
      </header>

      {/* Hello Content */}
      <section id="hello" className="bg-gray-100 py-12">
      <div className="container mx-auto text-gray-700">
          {/* About Title - Extra Bold */}
          <h3 className="text-2xl mb-6">
            <span className="font-avenir-bold">Hello:</span>
            <span className="font-avenir-light"> We’re Symbol<span style={{ verticalAlign: 'super', fontSize: '0.6em', position: 'relative', top: '0em' }}>TM</span>,
             a Phoenix based design and branding studio. 
              We work with a range of organizations to define who they are and create compelling communications to help them achieve their ambitions. 
              Underlying all our work is the love of our craft and the belief that design should have a positive impact on the world. 
              View our showreel.</span>
          </h3>
        </div>
      </section>

      {/* Category Selection */}
      <section className="container mx-auto p-6">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="px-4 py-2 rounded border border-gray-300"
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </section>

      {/* Work Showcase */}
      <section id="work" className="container bg-gray mx-auto p-6">
        <h2 className="text-2xl font-avenir-bold mb-6">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-gray shadow-lg rounded-lg overflow-hidden">
              <img src={project.img} alt={project.name} className="h-40 w-full object-cover" />
              {/* <h3 className="text-center mt-2 text-lg font-medium">{project.name}</h3> */}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
    <section id="services" className="bg-gray-100 py-12">
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
      <section id="contact" className="bg-gray py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-avenir-bold mb-6">Get in touch.</h2>
          <p className="inter-bold">Email: <span className="inter-light">Hi@SymbolTM.com</span></p>
          <p className="inter-bold">Mobile: <span className="inter-light">+1 480 717 0449</span></p>
          <p className="inter-bold">Office: <span className="inter-light">7202 North 15th Pl., Phoenix, AZ 85020</span></p>
        </div>
      </section>
    </div>
  );
};

export default DefaultPage;