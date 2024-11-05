import React from 'react';
import Header from '../components/Header';

const BobAndDoloresPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Shared header component */}

      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">Bob & Dolores Hope Foundation</h1>
        <p className="text-lg mb-2">BRAND: Bob & Dolores Hope Foundation and Bob Hope Legacy</p>
        <p className="text-lg mb-6">CLIENT: The Hope Family</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          The Bob & Dolores Hope Foundation supports organizations that bring "hope" to those in need, especially those who have served to protect the nation.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          Bob Hope used his influence to help those in need through compassion, empathy, and an uplifting spirit. The foundation continues his legacy by providing direction and leadership to various initiatives.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Logo</li>
          <li>Digital Initiatives and Web Design</li>
          <li>Marketing Communications</li>
          <li>Launch</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="https://www.BobHope.org" className="text-blue-600 hover:underline">www.BobHope.org</a></p>
          <p>ROLE: Michael Thibodeau - Creative Director and Lead Designer</p>
        </section>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Bob & Dolores Hope Foundation Logos" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Bob & Dolores Hope Foundation Branding" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Website Design for Bob & Dolores Hope Foundation" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Bob Hope Legacy" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default BobAndDoloresPage;
