import React from 'react';
import Header from '../components/Header';
import marfa from '../assets/images/SymbolTM_Marfa_PRIMARY_IMAGE.gif';
import marfa01 from '../assets/images/SymbolTM_Marfa_01.png';
import marfa02 from '../assets/images/SymbolTM_Marfa_02.png';
import marfa03 from '../assets/images/SymbolTM_Marfa_03.png';
import marfa04 from '../assets/images/SymbolTM_Marfa_04.png';
import marfa05 from '../assets/images/SymbolTM_Marfa_05.png';
import marfa06 from '../assets/images/SymbolTM_Marfa_06.png';
import marfa07 from '../assets/images/SymbolTM_Marfa_07.png';
import marfa08 from '../assets/images/SymbolTM_Marfa_08.png';

const MarfaPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">The City of Marfa</h1>
        <div className="h-2"></div>
        <p className="text-lg text-gray-600 mb-4">Empowering the brand through the community.</p>
        <img
          src={marfa}
          alt="Marfa Branding"
          className="w-full shadow-lg"
        />
      </section>

      {/* Content Section */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Brand</h2>
          <p className="text-gray-700">
          Marfa
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-700">
          The City of Marfa
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          Marfa, Texas, was born in the late 1800s. It was a farm and industry location close to the edge of Mexico. 
          In the 1970s, the artist Donald Judd purchased 340 acres in Marfa, creating the largest minimalism art factory. 
          He brought in thousands of other artists throughout the world, including John Chamberlain, Dan Flavin, and Bridget Riley.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
          <p className="text-gray-700">
          After Donald Judd passed, his family created the Chinati Foundation. While attracting many visitors, Marfa has slowly declined in community engagement. 
          The city also lacked a brand logo or design system. Marfa needed a way to rejuvenate its identity and bring more visitors and settlers.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Solutions</h2>
          <p className="text-gray-700">
          Collaborating with the local community and analyzing data, we developed a range of logo and design options. 
          The new brand direction emphasized minimalism, industrial influences, and a simplistic community-centric design. 
          The solution focused on black, white, gray, and silver tones, with a handmade industrial font family.
          </p>
        </div>
{/* Blockquote Needed!!!
        <blockquote className="italic bg-gray-100 p-6 shadow-lg mb-8">
          <p>
            “Now as <span className="font-bold">Plainsight</span>, we have
            established ourselves as a power player delivering production-ready
            vision AI solutions. Industry leaders have recognized{' '}
            <span className="font-bold">Plainsight</span> for solving problems where
            others have failed, and for helping customers see and activate the
            potential of their data through smart, simple, and effective use of
            vision AI.”
          </p>
          <p className="text-right mt-4">- Carlos Anchía, CEO of Plainsight</p>
        </blockquote> */}

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={marfa01} alt="Marfa Branding Sample" className="shadow-lg" />
            <img src={marfa02} alt="Marfa Branding Sample" className="shadow-lg" />
            <img src={marfa03} alt="Marfa Logo Variants" className="shadow-lg" />
            <img src={marfa04} alt="Marfa Font Family" className="shadow-lg" />
            <img src={marfa05} alt="Marfa City Marketing Assets" className="shadow-lg" />
            <img src={marfa06} alt="Marfa Industrial Theme Design" className="shadow-lg" />
            <img src={marfa07} alt="Marfa Visitors Center Branding" className="shadow-lg" />
            <img src={marfa08} alt="Marfa Cultural Imagery" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://https://www.cityofmarfa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.cityofmarfa.com
          </a><br></br>
          ROLE: Branding, Design, and Strategy
        </div>

        <br></br>
        <div>
              <h2 className="text-2xl font-avenir-bold mb-6">Get in touch.</h2>
              <p className="inter-bold">Email: <span className="inter-light">Hi@SymbolTM.com</span></p>
              <p className="inter-bold">Mobile: <span className="inter-light">+1 480 717 0449</span></p>
              <p className="inter-bold">Office: <span className="inter-light">7202 North 15th Pl., Phoenix, AZ 85020</span></p>
        </div>
        <br></br>
      </section>

      <br></br>
    </div>
  );
};

export default MarfaPage;