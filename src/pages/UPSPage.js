import React from 'react';
import Header from '../components/Header';

const UPSPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Include the shared header component */}

      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">UPS: Synchronizing The World of Commerce</h1>
        <p className="text-lg mb-2">BRAND: UPS</p>
        <p className="text-lg mb-6">CLIENT: United Parcel Service, Inc.</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          UPS is the global leader in logistics and shipping worldwide. Although the business model had grown, the marketing had stayed the same. A restructuring plan was essential to propel the brand forward.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          We conducted extensive research, pulling back both internally and externally. This led to the simplification of UPS's brand strategy, focusing on one brand, one vision. The new logo, tagline, and touchpoint design system emphasized a powerful and unified brand.
        </p>
        <p className="mb-4">
          The new design added a modern font and color palette. Over 4,300 stores transformed into The UPS Store, aligning with the brand’s evolved identity. The refreshed branding system impacted packages, signage, vehicles, and collateral.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Research</li>
          <li>Brand Strategy</li>
          <li>Brand Architecture</li>
          <li>Logo, Tagline, Design, Digital Assets</li>
          <li>Packages, Signage, Vehicles</li>
          <li>Internal Communications & Launch</li>
        </ul>

        {/* Result Section */}
        <h2 className="text-2xl font-semibold mb-2">Result</h2>
        <p className="mb-4">
          Within a year, UPS reported a 13% earnings increase and a 7% revenue gain across all segments. The rebranding initiative was credited as a significant factor in UPS’s improved performance.
        </p>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="https://www.ups.com" className="text-blue-600 hover:underline">www.UPS.com</a></p>
          <p>ROLE: Michael Thibodeau - Creative Director and Lead Designer, collaborating with FutureBrand, Martin Agency, IPG, McKinsey & Co., Sapient, and United Parcel Service, Inc.</p>
        </section>

        {/* Image and Branding Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="UPS Brand Evolution" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="UPS Packaging and Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Branding Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="UPS Truck" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="UPS Brand Architecture" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="UPS Shield Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default UPSPage;
