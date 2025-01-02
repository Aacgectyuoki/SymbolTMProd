import React from 'react';
import Header from '../components/Header';

const IngenioPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Shared header component */}
      
      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">IngenioRx: Pharmacy Brand Benefits</h1>
        <p className="text-lg mb-2">BRAND: IngenioRx</p>
        <p className="text-lg mb-6">CLIENT: Anthem, Inc.</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          Anthem, one of the nation’s largest health benefits companies, announced it was establishing a new pharmacy benefits service.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          IngenioRx was launched with a new brand and logo, designed to offer a full suite of PBM solutions starting in 2020. IngenioRx serves both Anthem and non-Anthem customers with a seamless, integrated experience.
        </p>
        <blockquote className="bg-gray-100 border-l-4 border-blue-500 italic p-4 mb-4">
          "As a company, we continuously seek bold, innovative solutions that achieve consumer access to high quality, affordable healthcare," said Joseph R. Swedish, Chairman, President and Chief Executive Officer, Anthem.
        </blockquote>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Brand Strategy</li>
          <li>Name</li>
          <li>Logo</li>
          <li>Design</li>
          <li>Digital Assets</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="https://www.ingenio-rx.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.Ingenio-Rx.com</a></p>
          <p>ROLE: Michael Thibodeau - Creative Director and Designer, collaborating with Anthem and Lippincott.</p>
        </section>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="IngenioRx Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="IngenioRx Campaign Image" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="IngenioRx Interface" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="IngenioRx Digital Assets" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default IngenioPage;
