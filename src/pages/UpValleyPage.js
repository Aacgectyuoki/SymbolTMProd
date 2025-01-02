import React from 'react';
import Header from '../components/Header';

const UpValleyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Shared header component */}

      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">UpValley Inn & Hot Springs</h1>
        <p className="text-lg mb-2">BRAND: UpValley Inn & Hot Springs</p>
        <p className="text-lg mb-6">CLIENT: UpValley Inn & Hot Springs</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          The hotel owner aimed to reposition the Calistoga property from a Comfort Inn to a higher-end boutique hotel. The brand transformation was necessary to elevate guest and employee experiences, especially as Napa hotels were gaining market share.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          A new name and brand identity were developed to create a memorable and unique experience with a modern vibe. The brand project covered all touchpoints with bold colors, textures, and unique messaging to attract the target audience.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Brand Strategy</li>
          <li>Logo, Design, Digital</li>
          <li>Signage, Stationery</li>
          <li>Brand Guidelines</li>
          <li>Marketing Communications</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="https://www.upvalleyinn.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.upvalleyinn.com</a></p>
          <p>ROLE: Michael Thibodeau - Creative Director and Brand Designer, working with UpValley Inn & Hot Springs and Andrew Freeman & Co.</p>
        </section>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="UpValley Inn - Exterior and Interior Images" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="UpValley Inn - Guest Experience" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="UpValley Inn Brand Transformation" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="UpValley Inn Brand Guidelines" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="UpValley Inn Marketing Materials" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default UpValleyPage;
