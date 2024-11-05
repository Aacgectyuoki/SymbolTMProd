import React from 'react';
import Header from '../components/Header';

const ClimateVictoryGardensPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Shared header component */}
      
      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">Green America: Climate Victory Gardens</h1>
        <p className="text-lg mb-2">BRAND: Climate Victory Gardens</p>
        <p className="text-lg mb-6">CLIENT: Green America</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          Green America is a nonprofit membership organization based in the United States that promotes environmentally aware and ethical consumerism. It develops events and campaigns to make ethical actions visible and memorable.
        </p>
        <p className="mb-4">
          As a recent climate campaign, Green America developed Climate Victory Gardens. It helps people do their part in addressing the climate crisis by restoring soil health to draw down carbon. Everyone can grow a garden, and everyone can take meaningful action on the climate crisis.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          Develop a campaign for communications and experiences. Includes logo, design system, and branded items.
        </p>

        {/* Results Section */}
        <h2 className="text-2xl font-semibold mb-2">Results</h2>
        <p className="mb-4">
          The campaign has grown new donors and developed more than 8,000 gardens.
        </p>

        {/* Quote */}
        <blockquote className="bg-gray-100 border-l-4 border-green-500 italic p-4 mb-4">
          "Michael was very patient with our feedback and requests. In the end, he gave us a great logo. Thank you!!!" – GreenAmerica.org
        </blockquote>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Logo</li>
          <li>Design System</li>
          <li>Campaign Applications</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="https://www.greenamerica.org/cvg" target="_blank" className="text-blue-600 hover:underline">www.greenamerica.org/cvg</a></p>
          <p>ROLE: Michael Thibodeau - Creative Director and Lead Designer</p>
        </section>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Climate Victory Gardens Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Campaign Visual" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Gardening Promotion" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Campaign Statistics" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Branded Merchandise" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default ClimateVictoryGardensPage;
