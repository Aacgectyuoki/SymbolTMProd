import React from 'react';
import Header from '../components/Header';

const EdXPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Shared header component */}

      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">edX</h1>
        <p className="text-lg mb-2">BRAND: edX</p>
        <p className="text-lg mb-6">CLIENT: edX Inc.</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          edX is a massive open online course (MOOC) provider founded by Harvard and MIT. It offers high-quality courses from the world's best universities and institutions to learners everywhere.
        </p>

        {/* Action Section */}
        <h2 className="text-2xl font-semibold mb-2">Action</h2>
        <p className="mb-4">
          Develop a comprehensive brand system and digital presence to enhance edX's global reach and impact. Collaborate with Weber Shandwick to create a cohesive brand strategy and communication materials.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Brand Strategy and Guidelines</li>
          <li>Website Design and Development</li>
          <li>Marketing and Promotional Materials</li>
          <li>Video Content and Social Media Campaigns</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p>
            <a href="https://www.edX.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.edX.org</a><br />
            <a href="https://youtube.com/watch?v=7jWpGgKMXuA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">YouTube Video 1</a><br />
            <a href="https://youtube.com/watch?v=MJZN70Y0S0o" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">YouTube Video 2</a>
          </p>
        </section>

        {/* Role Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Role</h2>
          <p>Michael Thibodeau - Creative Director and Brand Designer, in collaboration with Weber Shandwick</p>
        </section>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="edX Main Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400" alt="edX Co-Partners" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Additional Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <img src="https://via.placeholder.com/300x300" alt="edX Brand System" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default EdXPage;