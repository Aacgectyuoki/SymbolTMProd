import React from 'react';

const projects = [
  { name: 'Marriott Hotels', img: '/path/to/marriott.png' },
  { name: 'UPS', img: '/path/to/ups.png' },
  { name: 'KRC Research', img: '/path/to/krc.png' },
  // Add all other project images similarly
];

const DefaultPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-6">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/path/to/symboltm-logo.png" alt="SymbolTM" className="h-12" />
          <nav className="space-x-4">
            <a href="#all" className="text-gray-600 hover:text-gray-800">All</a>
            <a href="#hospitality" className="text-gray-600 hover:text-gray-800">Hospitality</a>
            <a href="#technology" className="text-gray-600 hover:text-gray-800">Technology</a>
            <a href="#food" className="text-gray-600 hover:text-gray-800">Food & Drinks</a>
            <a href="#industry" className="text-gray-600 hover:text-gray-800">Industry</a>
          </nav>
        </div>
      </header>

      {/* Showcase */}
      <section className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.img} alt={project.name} className="h-40 w-full object-cover" />
            </div>
          ))}
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

      {/* Services Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-gray-700">
          <h3 className="text-2xl font-semibold mb-6">Services</h3>
          <p>
            Our approach is flexible and scalable and designed to add the maximum value – whatever our client’s timescale or budget.
            Ideally, we like to be involved early in the lifecycle of a project, so we can invest time to understand our clients’
            challenges in depth and provide full solutions.
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Analysis: Provide thorough research through analysis and develops winning solutions.</li>
            <li>Strategy: Orchestrate planning to implementation.</li>
            <li>Creativity: Provide logo options, icons, innovative design and ideation.</li>
            <li>Management: Develop comprehensive plan from conception to launch including:</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DefaultPage;
