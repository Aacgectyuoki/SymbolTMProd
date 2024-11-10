import React from 'react';
import Header from '../components/Header'; // Assuming Header component is consistent across pages

const MarfaPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse header with navigation links */}

      {/* Main content container */}
      <section className="container mx-auto p-6">
        {/* Page Title and Intro */}
        <h1 className="text-3xl font-bold mb-4">The City of Marfa</h1>
        <p className="text-lg mb-6">BRAND: Marfa</p>
        <p className="text-lg mb-6">CLIENT: The City of Marfa</p>
        
        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          Marfa, Texas, was born in the late 1800s. It was a farm and industry location close to the edge of Mexico.
          In the 1970s, the artist Donald Judd purchased 340 acres in Marfa, creating the largest minimalism art factory.
          Over time, many artists have contributed to this community, bringing life and creativity to the small town.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          The City of Marfa was in need of a brand identity that resonates with its unique blend of culture, art, and industrial charm. 
          In 2020, Michael Thibodeau was selected as the creative director to redefine the brand identity.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Logo Design</li>
          <li>Font Family</li>
          <li>Brand Guidelines</li>
          <li>Website Layout</li>
          <li>Supporting Assets</li>
        </ul>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/300" alt="Water tower with Marfa logo" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/300" alt="City of Marfa buildings and landscape" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/300" alt="Marfa branded typography" className="w-full h-full object-cover rounded-lg" />
          </div>
          {/* Add additional images if necessary */}
        </div>

        {/* Font and Branding Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-2">Brand Typography and Logo</h2>
          <div className="flex flex-wrap gap-6">
            <img src="https://via.placeholder.com/150x100" alt="Marfa Font Sample" className="h-auto" />
            <img src="https://via.placeholder.com/150x100" alt="Marfa Logo System" className="h-auto" />
            {/* Add more images as needed to represent typography samples and logo variations */}
          </div>
        </section>

        {/* Learn More Section */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">Learn More</h2>
          <a href="https://www.VisitMarfa.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
            www.VisitMarfa.org
          </a>
          <p>ROLE: Michael Thibodeau - Creative Director and Lead Designer</p>
        </section>
      </section>
    </div>
  );
};

export default MarfaPage;
