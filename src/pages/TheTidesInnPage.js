import React from 'react';
import Header from '../components/Header';

const TheTidesInnPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Shared header component */}

      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">The Tides Inn</h1>
        <p className="text-lg mb-2">BRAND: The Tides Inn, Irvington, VA</p>
        <p className="text-lg mb-6">CLIENT: Enchantment Group</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          The Tides Inn is a luxury collection within Enchantment Group, known for its unique, historical location on the coastline of the Chesapeake.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          Over the past 4 years, I have supported both online and print production communications for The Tides Inn, creating materials for customer communications and promotional campaigns.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Advertising (print and online)</li>
          <li>Customer Communications</li>
          <li>Online Services</li>
          <li>Online Videos</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="https://www.tidesinn.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.tidesinn.com</a></p>
          <p>ROLE: Michael Thibodeau - Creative Director and Brand Designer</p>
        </section>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="The Tides Inn Boat Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="The Tides Inn Website Mockup" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="The Tides Inn Chesapeake Ad" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="The Tides Inn Chart Your Path Ad" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="The Tides Inn Daily Tide Newsletter" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default TheTidesInnPage;
