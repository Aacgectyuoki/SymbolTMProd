import React from 'react';
import Header from '../components/Header';

const EnchantmentResortPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse the shared header */}

      <section className="container mx-auto p-6">
        {/* Page Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">Enchantment Resort</h1>
        <p className="text-lg mb-6">BRAND: Enchantment Resort, Sedona, AZ</p>
        <p className="text-lg mb-6">CLIENT: Enchantment Group</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          Enchantment Resort is a luxury collection within Enchantment Group, set in the stunning red rocks of Sedona, Arizona.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          For over four years, I have collaborated with Enchantment Resort to enhance its brand identity and marketing materials.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Advertising, both printed and online</li>
          <li>Customer communications</li>
          <li>Online services</li>
          <li>Video content</li>
        </ul>

        {/* Multimedia Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Enchantment Resort on mobile and tablet" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Enchantment Resort scenic video" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Trail meeting point advertisement" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Enchantment Resort brochure covers" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">Learn More</h2>
          <a href="https://www.enchantmentresort.com" className="text-blue-600 hover:underline">
            www.enchantmentresort.com
          </a>
          <p>ROLE: Michael Thibodeau - Creative Director and Brand Designer</p>
        </section>
      </section>
    </div>
  );
};

export default EnchantmentResortPage;
