import React from 'react';
import Header from '../components/Header';

const NoCuffsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Shared header component */}
      
      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">1-800-NoCuffs</h1>
        <p className="text-lg mb-2">BRAND: 1-800-NoCuffs</p>
        <p className="text-lg mb-6">CLIENT: Kavinoky Law Firm</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          1-800-NoCuffs is the largest California DUI defense law firm. Kavinoky Law Firm was growing and adding other services in California. To strengthen their brand, they decided to rebrand 1-800-NoCuffs to emphasize their focus on aggressive DUI defense.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          The rebranding included creating a new logo, updating digital presence, and designing marketing communications to support 1-800-NoCuffs’ growth and outreach.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Brand Architecture</li>
          <li>Logo</li>
          <li>Design</li>
          <li>Digital</li>
          <li>Stationery</li>
          <li>Marketing Communications</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="https://www.nocuffs.com" className="text-blue-600 hover:underline">www.nocuffs.com</a></p>
          <p><a href="https://www.youtube.com/channel/UCkAyB_BVynRBh_lPxLtnlXA" className="text-blue-600 hover:underline">YouTube Channel</a></p>
          <p>ROLE: Michael Thibodeau - Creative Director and Lead Designer working with Kavinoky Law Firm and Leonard & Co.</p>
        </section>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="1-800-NoCuffs Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="1-800-NoCuffs Advertisement" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Website View on Multiple Devices" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Aggressive DUI Defense Ad" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="1-800-NoCuffs Promotional Image" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default NoCuffsPage;