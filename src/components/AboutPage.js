import React from 'react';
import logo from '../assets/images/symboltm-logo.png';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-6">
        <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="SymbolTM" className="h-12" />
          <nav className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-800">Work</a>
            <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#services" className="text-gray-600 hover:text-gray-800">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
        </div>
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
            {/* Services Title - Bold */}
            <h3 className="text-2xl inter-bold mb-6">Services</h3>

            {/* Services Description */}
            <p className="inter-light mb-6">
            Our approach is flexible and scalable and designed to add the maximum value – whatever our client’s timescale or budget. Ideally, we like to be involved early in the lifecycle of a project, so we can invest time to understand our clients’ challenges in depth and provide full solutions. But our modular approach makes it easy for clients to use us for individual services whenever they wish.
            </p>

            {/* List of Services */}
            <ul className="list-decimal pl-4 space-y-4">
            <li className="inter-bold">Analysis: <span className="inter-light">Provide thorough research through analysis and develop winning solutions.</span></li>
            <li className="inter-bold">Strategy: <span className="inter-light">Orchestrate planning to implementation.</span></li>
            <li className="inter-bold">Creativity: <span className="inter-light">Provide logo options, icons, innovative design and ideation.</span></li>
            <li className="inter-bold">Management: <span className="inter-light">Develop comprehensive plan from conception to launch including:</span></li>
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
