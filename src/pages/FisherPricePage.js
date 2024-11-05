import React from 'react';
import Header from '../components/Header';

const FisherPricePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Shared header component */}

      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">Fisher-Price: Thought of That</h1>
        <p className="text-lg mb-2">BRAND: Fisher-Price</p>
        <p className="text-lg mb-6">CLIENT: Mattel Inc. and Fisher-Price</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          Fisher-Price promotes educational toys for children and infants. After receiving deep data, Fisher-Price reorganized its focus on cognitive and physical development, as well as social and emotional skills.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          Developed a sub-brand for Fisher Price Baby and created new brand guidelines to enhance online and offline engagement.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>New Brand Strategy</li>
          <li>Sub-Brand Logos, Icons</li>
          <li>Design, Digital, Brand Guidelines</li>
          <li>Marketing Communications, Campaigns</li>
        </ul>

        {/* Result Section */}
        <h2 className="text-2xl font-semibold mb-2">Result</h2>
        <p className="mb-4">
          Fisher-Price drove 8% growth in 2016.
        </p>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p><a href="https://www.fisher-price.com" target="_blank" className="text-blue-600 hover:underline">www.Fisher-Price.com</a></p>
          <p><a href="https://vimeo.com/93183680" target="_blank" className="text-blue-600 hover:underline">Vimeo Link 1</a></p>
          <p><a href="https://vimeo.com/93183557" target="_blank" className="text-blue-600 hover:underline">Vimeo Link 2</a></p>
          <p>ROLE: Michael Thibodeau - Creative Designer with Weber Shandwick and Fisher-Price</p>
        </section>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Fisher-Price Brand Guidelines" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Fisher-Price Baby Sub-Brand" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Fisher-Price Brand Architecture" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Fisher-Price Social Media Content" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="Fisher-Price Campaigns" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default FisherPricePage;
