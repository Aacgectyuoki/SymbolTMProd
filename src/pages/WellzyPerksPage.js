import React from 'react';
import Header from '../components/Header'; // Shared Header Component

const WellzyPerksPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Include the shared header */}

      {/* Header Section */}
      <section className="p-6 shadow bg-white">
        <h1 className="text-4xl font-bold mb-2">WellzyPerks</h1>
        <p className="text-gray-600">BRAND: WellzyPerks.com</p>
        <p className="text-gray-600">CLIENT: Jared Koch, CleanPlates Founder & CEO</p>
      </section>

      {/* Main Content */}
      <section className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Placeholder */}
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="WellzyPerks Placeholder"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Background</h2>
            <p className="text-gray-700">
              Jared and his family’s health challenges inspired him to launch CleanPlates in 2007,
              a brand promoting personalized nutrition and clean living. WellzyPerks was born
              to promote sustainable, ethical wellness choices for healthier living.
            </p>
            <p className="text-gray-700">
              In 2022, Jared envisioned a wellness lifestyle community that helps individuals
              connect with trusted brands through WellzyPerks.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-4">Deliverables</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Brand Positioning, Name, Logo, and Design System</li>
            <li>Brand Guidelines and Website Architecture</li>
            <li>Copywriting, Images, and Short Video</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Oprah.com',
                text: '“Jared Koch and Jill Silverman Hough use healthy ingredients in ingenious ways.”',
                img: 'https://via.placeholder.com/150',
              },
              {
                name: 'Mark Hyman, MD',
                text: '“Jared’s advice makes healthy eating simple and delicious.”',
                img: 'https://via.placeholder.com/150',
              },
              {
                name: 'Deepak Chopra',
                text: '“Jared’s advice transforms health and well-being.”',
                img: 'https://via.placeholder.com/150',
              },
            ].map((testimonial, index) => (
              <div key={index}>
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600">{testimonial.name}</p>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellzyPerksPage;
