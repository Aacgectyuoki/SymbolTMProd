import React from 'react';
import Header from '../components/Header';

const MarriottPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Shared header component */}
      
      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">Marriott: Spirit to Serve</h1>
        <p className="text-lg mb-2">BRANDS: Marriott Hotels & Resorts, Marriott Conference Centers & Marriott Apartments</p>
        <p className="text-lg mb-6">CLIENT: Marriott International</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          Marriott International is a global leader in hospitality, managing a portfolio of over 6900 hotels worldwide. The brand family had lagged in marketing and experience compared to its growth, necessitating a rebranding effort.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          Marriott's rebranding initiative involved aligning various brands, sub-brands, services, and products under a cohesive brand strategy. This included meetings with leadership, brand analysis, and developing a refreshed brand architecture.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Analysis</li>
          <li>Brand Architecture</li>
          <li>Brand Strategy</li>
          <li>Research, Logos and Sub-Logos</li>
          <li>Design, Digital, Design System</li>
          <li>Brand Guidelines, Stationery, Signage, Vehicles</li>
          <li>Marketing Communications</li>
          <li>Launch</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="https://www.marriott.com" className="text-blue-600 hover:underline">www.Marriott.com</a></p>
          <p>ROLE: Michael Thibodeau - Creative Director, Strategist, and Lead Manager working with Marriott International, FutureBrand, McCann-Erickson Worldwide</p>
        </section>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Marriott Brand Elements" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Marriott Brand Strategy Diagram" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Marriott Logo Design" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Marriott Corporate Branding" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Marriott Sub-Brands" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default MarriottPage;
