import React from 'react';
import Header from '../components/Header';

const KRCPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse the shared Header component */}

      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">KRC Research: Our Insights. Your Breakthroughs.</h1>
        <p className="text-lg mb-6">BRAND: KRC Research</p>
        <p className="text-lg mb-6">CLIENT: KRC Research and Weber Shandwick</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          KRC Research is a full-service global public opinion research consultancy and a member of the Interpublic Group (IPG) of companies.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          We assisted KRC Research in reorganizing their brand from the core, transforming their strategy, logo, design system, and marketing communications. The design system simplified the website and introduced new reports, decks, and services.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Brand Strategy, Logo, Sub-Brand Logos</li>
          <li>Design, Digital, Brand Guidelines</li>
          <li>Marketing Communications, Launch</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="http://www.KRCResearch.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.KRCResearch.com</a></p>
          <p>ROLE: Michael Thibodeau - Creative Director and Brand Designer in conjunction with KRC Research and Weber Shandwick.</p>
        </section>

        {/* Image and Branding Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="KRC Branding" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="KRC Brand Images" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Branding Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Sub-Brand Logos" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Marketing Images" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Logo Details" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        {/* Brand Design Explanation */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Brand Design</h2>
          <p className="text-gray-700">
            The arrow in the logo design symbolizes forward-thinking and best action, while the color blue represents the vast ocean and sky, symbolizing a global reach and trust.
          </p>
        </section>
      </section>
    </div>
  );
};

export default KRCPage;
