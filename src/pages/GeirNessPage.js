import React from 'react';
import Header from '../components/Header';

const GeirNessPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Shared header component */}

      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">Geir Ness: Pure Norway Fragrances</h1>
        <p className="text-lg mb-2"><strong>BRAND:</strong> Geir Ness</p>
        <p className="text-lg mb-6"><strong>CLIENT:</strong> Laila Inc.</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          As it turned out, Laila was just the beginning. Today, Laila is one of Nordstrom's best-selling specialty fragrances 
          and the flagship product in a complete line of fragrance and body products, including Geir for Men, Skin of Norway, 
          and Frozen in a Bottle, a fragrance created in partnership with Disney, inspired by the Norwegian nature featured in 
          Disney’s "Frozen."
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          Review the website, blogs, and sales. Research other luxury perfume brands. Provide a better digital system, 
          simplifying communications and strengthening relationships. Use Shopify as a supporting solution. Update the Geir Ness 
          logo and clean up all sub-brand logos.
        </p>
        <p className="mb-4">
          The website launch has shown more than 30% more sales since the past.
        </p>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Geir Ness Main Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Geir Ness Website Image 1" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Geir Ness Website Image 2" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default GeirNessPage;