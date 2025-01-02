import React from 'react';
import Header from '../components/Header';

const YummyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Include the shared header component */}

      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">SBE x Umami Burger</h1>
        <p className="text-lg mb-2">BRAND: Umami Burgers</p>
        <p className="text-lg mb-6">CLIENT: SBE / C3</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          Before the COVID-19 pandemic upended the restaurant industry, SBE Entertainment Group began developing chef-driven delivery-only brands to tap into the growing food on-demand segment.
        </p>
        <p className="mb-4">
          SBE Entertainment Group supports their hotels by turning dark restaurant kitchens into “ghost kitchens.” This approach allows them to maintain revenue in an era of increasing demand for delivery.
        </p>
        <blockquote className="italic mb-4">
          "It’s a solution that will generate revenue in a manner that can deal with the demand that we see today during COVID-19 and the demand that we’re going to see post COVID."
        </blockquote>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          Umami Burger is one of SBE’s growing sub-brands. To support the growth, I created menus, billboards, posters, and graphic stickers to bring consistency and appeal to their branding and marketing communications.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Design</li>
          <li>Signage</li>
          <li>Environment</li>
          <li>Marketing Communications</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="https://www.sbe.com/restaurants/umami-burger" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.sbe.com/restaurants/umami-burger</a></p>
          <p>ROLE: Michael Thibodeau - Creative Director and Designer working with SBE / C3.</p>
        </section>

        {/* Image and Branding Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Yummy Branding" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Umami Burger Menu" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Branding Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Signage" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Stickers and Branding" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Brand Poster" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default YummyPage;
