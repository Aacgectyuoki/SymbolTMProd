import React from 'react';
import marriott from '../assets/images/Marriott.png';
import ups from '../assets/images/UPS.png';
import krc from '../assets/images/KRC_Research.png';
import logo from '../assets/images/symboltm-logo.png';

const projects = [
  { name: 'Marriott Hotels', img: marriott },
  { name: 'UPS', img: ups },
  { name: 'KRC Research', img: krc },
];

const DefaultPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-6">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="SymbolTM" className="h-12 object-left" />
          <nav className="space-x-4">
            <a href="#work" className="text-gray-600 hover:text-gray-800">WORK</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800">ABOUT</a>
            <a href="#services" className="text-gray-600 hover:text-gray-800">SERVICES</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Intro Section */}
      <section className="bg-white py-12 text-center" id="about">
        <div className="container mx-auto text-gray-700">
          <h2 className="text-3xl font-semibold mb-6">Hello. We’re SymbolTM</h2>
          <p className="mx-auto max-w-xl">
            A Phoenix based design and branding studio. We work with a range of organizations to define who they are and create
            compelling communications to help them achieve their ambitions.
          </p>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.img} alt={project.name} className="h-40 w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-12" id="about">
        <div className="container mx-auto text-gray-700 text-center">
          <h3 className="text-2xl font-semibold mb-6">About Us</h3>
          <p className="max-w-3xl mx-auto">
            SymbolTM is a boutique studio, providing a range of services. We are truly passionate about turning complex issues into simple solutions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-12" id="services">
        <div className="container mx-auto text-gray-700">
          <h3 className="text-2xl font-semibold mb-6">Services</h3>
          <p className="max-w-3xl mx-auto">
            Our approach is flexible and scalable, designed to add the maximum value for our clients. We like to be involved early in the lifecycle of a project to understand challenges in depth.
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Analysis: Thorough research and winning solutions.</li>
            <li>Strategy: Planning to implementation.</li>
            <li>Creativity: Logos, icons, innovative design.</li>
            <li>Management: Comprehensive plan from concept to launch.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-8" id="contact">
        <div className="container mx-auto text-gray-700 text-center">
          <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
          <p>Email: Hi@SymbolTM.com</p>
          <p>Mobile: +1 480 717 0449</p>
          <p>Office: 7202 North 15th Pl., Phoenix, AZ 85020</p>
        </div>
      </section>
    </div>
  );
};

export default DefaultPage;
