import React from 'react';
import Header from '../components/Header';

const PlainsightAIPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">Plainsight.AI</h1>
        <p className="text-lg mb-6">BRAND: Plainsight</p>
        <p className="text-lg mb-6">CLIENT: Plainsight</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          Siggill is an AI innovation service to various industries, including automotive, agriculture, healthcare, and more. It accelerates services to make data accessible to non-technical leaders.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          With growing AI services, Plainsight needed to reorganize their brand to empower customer relationships. In 2021, Plainsight worked with Hudson Cutler to find a clear brand direction.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Brand positioning, logo, and design system</li>
          <li>Icons and communications</li>
          <li>Website layout pages and launch support</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="https://www.plainsight.ai" target="_blank" className="text-blue-600 hover:underline">www.plainsight.ai</a></p>
          <p><a href="https://plainsight.ai/blog" target="_blank" className="text-blue-600 hover:underline">https://plainsight.ai/blog-the-evolution</a></p>
          <p>ROLE: Michael Thibodeau - Creative Director and Hudson Cutler, NYC</p>
        </section>

        {/* Image and Branding Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Plainsight Branding" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Plainsight Elephant Logo Variants" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Story Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Story</h2>
          <p className="text-gray-700">
            There is a parable about a group of blind men and an elephant. Each makes an assumption about the animal based upon the section they "see." This is the challenge of big data. Plainsight seeks to help businesses make sense of their data by providing complete AI solutions.
          </p>
        </section>

        {/* Design System Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4">Design System</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-300 h-48 flex items-center justify-center">
                <img src="https://via.placeholder.com/150" alt="Icons" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="bg-gray-300 h-48 flex items-center justify-center">
                <img src="https://via.placeholder.com/150" alt="Images" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="bg-gray-300 h-48 flex items-center justify-center">
                <img src="https://via.placeholder.com/150" alt="Textures" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="bg-gray-300 h-48 flex items-center justify-center">
                <img src="https://via.placeholder.com/150" alt="Colors" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="bg-gray-300 h-48 flex items-center justify-center">
                <img src="https://via.placeholder.com/150" alt="Gradients" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="bg-gray-300 h-48 flex items-center justify-center">
                <img src="https://via.placeholder.com/150" alt="Fonts" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default PlainsightAIPage;
