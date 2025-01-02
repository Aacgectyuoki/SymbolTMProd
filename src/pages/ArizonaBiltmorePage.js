import React from 'react';
import Header from '../components/Header';

const ArizonaBiltmorePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Shared header component */}
      
      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">Arizona Biltmore: Celebrating 90th Years</h1>
        <p className="text-lg mb-2">BRAND: Arizona Biltmore: Celebrating 90th Years</p>
        <p className="text-lg mb-6">CLIENT: Arizona Biltmore, A Waldorf Astoria Resort</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          Arizona Biltmore, A Waldorf Astoria Resort, is a historical resort inspired by architect Frank Lloyd Wright. Known as the "Jewel of the Desert," it has served as a playground for the rich and famous, hosting every U.S. President, as well as celebrities like Clark Gable and Carole Lombard. Irving Berlin composed "White Christmas" here in 1939.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          In 2019, Arizona Biltmore celebrated its 90th anniversary year.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Logo</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="https://www.arizonabiltmore.com/special-offers/90years/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.arizonabiltmore.com/special-offers/90years/</a></p>
          <p>ROLE: Michael Thibodeau - Graphic Designer</p>
        </section>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default ArizonaBiltmorePage;
