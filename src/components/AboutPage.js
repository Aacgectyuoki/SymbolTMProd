import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-6">
        <div className="container mx-auto flex justify-between items-center">
          <img src="../assets/images/symboltm-logo.png" alt="SymbolTM" className="h-12" />
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
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-gray-700">
          <h3 className="text-2xl font-semibold mb-6">Services</h3>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Analysis: Provide thorough research through analysis and develops winning solutions.</li>
            <li>Strategy: Orchestrate planning to implementation.</li>
            <li>Creativity: Provide logo options, icons, innovative design and ideation.</li>
            <li>Management: Develop comprehensive plan from conception to launch.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-8">
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

export default AboutPage;
