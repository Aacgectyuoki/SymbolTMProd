import React, { useState } from 'react';
import marriott from '../assets/images/Marriott.png';
import ups from '../assets/images/UPS.png';
import krc from '../assets/images/KRC_Research.png';
import logo from '../assets/images/symboltm-logo.png';

// Projects with categories
const projects = [
  { name: 'Marriott Hotels', category: 'Hospitality', img: marriott },
  { name: 'UPS', category: 'Industry', img: ups },
  { name: 'KRC Research', category: 'Technology', img: krc },
];

// Category options
const categories = ['All', 'Hospitality', 'Technology', 'Food & Drinks', 'Industry'];

const DefaultPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default is 'All'

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-6">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="SymbolTM" className="h-12" />
          
          {/* Regular Menu */}
          <nav className="hidden md:flex space-x-4">
            <a href="#work" className="text-gray-600 hover:text-gray-800">Work</a>
            <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#services" className="text-gray-600 hover:text-gray-800">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
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
            <a href="#work" className="block text-gray-600 hover:text-gray-800">Work</a>
            <a href="/about" className="block text-gray-600 hover:text-gray-800">About</a>
            <a href="#services" className="block text-gray-600 hover:text-gray-800">Services</a>
            <a href="#contact" className="block text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
        )}
      </header>

      {/* Category Filters */}
      <section className="container mx-auto p-6">
        <div className="flex justify-center space-x-4">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Work Showcase */}
      <section id="work" className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.img} alt={project.name} className="h-40 w-full object-cover" />
              <h3 className="text-center mt-2 text-lg font-medium">{project.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-12">
        <div className="container mx-auto text-gray-700">
          <h3 className="text-2xl font-semibold mb-6">Services</h3>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Analysis: Provide thorough research through analysis and develop winning solutions.</li>
            <li>Strategy: Orchestrate planning to implementation.</li>
            <li>Creativity: Provide logo options, icons, innovative design and ideation.</li>
            <li>Management: Develop comprehensive plan from conception to launch.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Get in touch.</h2>
          <p>Email: Hi@SymbolTM.com</p>
          <p>Mobile: +1 480 717 0449</p>
          <p>Office: 7202 North 15th Pl., Phoenix, AZ 85020</p>
        </div>
      </section>
    </div>
  );
};

export default DefaultPage;
