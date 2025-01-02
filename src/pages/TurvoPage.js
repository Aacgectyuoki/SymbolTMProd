import React from 'react';
import Header from '../components/Header';
// import turvoMainImage from '../assets/images/turvo-main.jpg';
// import turvoIsometricIcons from '../assets/images/turvo-isometric-icons.jpg';
// import turvoCollaborativeCloud from '../assets/images/turvo-collaborative-cloud.jpg';
// import turvoLogisticsIcons from '../assets/images/turvo-logistics-icons.jpg';

const TurvoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Shared header component */}

      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">Turvo</h1>
        <h2 className="text-xl font-semibold mb-2">Collaborative Logistics Platform</h2>
        <p className="text-lg mb-2"><strong>CLIENT:</strong> Turvo Inc.</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          Turvo is the world’s first multi-enterprise collaborative platform specifically designed for the global supply chain. 
          The platform connects people and organizations across the supply chain, allowing shippers, logistics providers, and 
          carriers to digitally transform their workflows with cloud-based software and mobile applications.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          Transform the technology platform into a powerful brand and strengthen communication experiences. Create a new brand 
          system, showcase unique isometric images and textures.
        </p>

        {/* Results Section */}
        <h2 className="text-2xl font-semibold mb-2">Results</h2>
        <p className="mb-4">
          Turvo’s brand has increased global customers and empowered business growth.
        </p>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Turvo Main Image" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Turvo Isometric Icons" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Turvo Collaborative Cloud" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Turvo Logistics Icons" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default TurvoPage;
