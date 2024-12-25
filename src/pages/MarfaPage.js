import React from 'react';
import Header from '../components/Header'; // Assuming Header component is consistent across pages
import marfa02 from '../assets/images/SymbolTM_Marfa_02.png';
import marfa03 from '../assets/images/SymbolTM_Marfa_03.png';
import marfa04 from '../assets/images/SymbolTM_Marfa_04.png';
import marfa05 from '../assets/images/SymbolTM_Marfa_05.png';
import marfa06 from '../assets/images/SymbolTM_Marfa_06.png';
import marfa07 from '../assets/images/SymbolTM_Marfa_07.png';
import marfa08 from '../assets/images/SymbolTM_Marfa_08.png';
import marfa09 from '../assets/images/SymbolTM_Marfa_09.png';
import marfa10 from '../assets/images/SymbolTM_Marfa_10.png';

const MarfaPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      <section className="container mx-auto p-6">
        {/* Title and Intro */}
        <h1 className="text-3xl font-bold mb-4">The City of Marfa</h1>
        <p className="text-lg mb-6">Empowering the brand through the community.</p>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          Marfa, Texas, was born in the late 1800s. It was a farm and industry location close to the edge of Mexico. In the 1970s, the artist Donald Judd purchased 340 acres in Marfa, creating the largest minimalism art factory. He brought in thousands of other artists throughout the world, including John Chamberlain, Dan Flavin, and Bridget Riley.
        </p>

        {/* Challenge Section */}
        <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
        <p className="mb-4">
          After Donald Judd passed, his family created the Chinati Foundation. While attracting many visitors, Marfa has slowly declined in community engagement. The city also lacked a brand logo or design system. Marfa needed a way to rejuvenate its identity and bring more visitors and settlers.
        </p>

        {/* Solutions Section */}
        <h2 className="text-2xl font-semibold mb-2">Solutions</h2>
        <p className="mb-4">
          Collaborating with the local community and analyzing data, we developed a range of logo and design options. The new brand direction emphasized minimalism, industrial influences, and a simplistic community-centric design. The solution focused on black, white, gray, and silver tones, with a handmade industrial font family.
        </p>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Logo Design</li>
          <li>Font Family</li>
          <li>Design System</li>
          <li>Communications</li>
          <li>Stationery and Posters</li>
        </ul>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src={marfa02} alt="Marfa Branding Sample" className="rounded-lg shadow-lg" />
          <img src={marfa03} alt="Marfa Logo Variants" className="rounded-lg shadow-lg" />
          <img src={marfa04} alt="Marfa Font Family" className="rounded-lg shadow-lg" />
          <img src={marfa05} alt="Marfa City Marketing Assets" className="rounded-lg shadow-lg" />
          <img src={marfa06} alt="Marfa Industrial Theme Design" className="rounded-lg shadow-lg" />
          <img src={marfa07} alt="Marfa Visitors Center Branding" className="rounded-lg shadow-lg" />
          <img src={marfa08} alt="Marfa Cultural Imagery" className="rounded-lg shadow-lg" />
          <img src={marfa09} alt="Marfa Website Design" className="rounded-lg shadow-lg" />
          <img src={marfa10} alt="Marfa City Signage" className="rounded-lg shadow-lg" />
        </div>

        {/* Learn More Section */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">Learn More</h2>
          <a
            href="https://www.VisitMarfa.org"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.VisitMarfa.org
          </a>
          <p className="mt-4">ROLE: Michael Thibodeau, Creative Director and Brand Designer</p>
        </section>
      </section>
    </div>
  );
};

export default MarfaPage;