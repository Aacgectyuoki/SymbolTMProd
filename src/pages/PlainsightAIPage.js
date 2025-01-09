import React from 'react';
import Header from '../components/Header';
import plainsightai from '../assets/images/PlainsightAI.gif';
import plainsight02 from '../assets/images/SymbolTM_Plainsight_02.png';
import plainsight03 from '../assets/images/SymbolTM_Plainsight_03.png';
import plainsight04 from '../assets/images/SymbolTM_Plainsight_04.png';
import plainsight05 from '../assets/images/SymbolTM_Plainsight_05.png';
import plainsight06 from '../assets/images/SymbolTM_Plainsight_06.png';
import plainsight07 from '../assets/images/SymbolTM_Plainsight_07.png';
import plainsight08 from '../assets/images/SymbolTM_Plainsight_08.png';
import plainsight09 from '../assets/images/SymbolTM_Plainsight_09.png';

const PlainsightAIPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Plainsight.AI</h1>
        <div className="h-2"></div>
        <p className="text-lg text-gray-600 mb-4">A new brand for a future industry</p>
        <img
          src={plainsightai}
          alt="Plainsight.AI Branding"
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
        Plainsight
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Client</h2>
        <p className="text-gray-700">
        Plainsight
        </p>
      </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
            Sixgill was an AI innovation service to market automotive, agriculture, healthcare, supply chain,
            pharmaceuticals, manufacturing, consumer and CPG, construction, transportation, government, and more.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
          <p className="text-gray-700">
            Services are exploding, but the brand name Sixgill was flat. In order to empower the brand, the company
            needed to change the name, identity, and experience.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Solutions</h2>
          <p className="text-gray-700">
            We quickly developed domain name options, created a new brand positioning,
            and selected the new name. Based on the name, we created an emblem symbol,
            "Semore the Elephant," and a bold, simple name. The design system provided
            new colors and textures, icons, and even the new website layout. It felt
            that the company could now strengthen the brand, change the name, and
            deliver desirable customer experiences.
          </p>
        </div>

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
        </blockquote>

        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <img src={plainsight02} alt="Plainsight Branding" className="shadow-lg" />
           <img src={plainsight03} alt="Logo Variants" className="shadow-lg" />
            <img src={plainsight04} alt="Icons" className="shadow-lg" />
            <img src={plainsight05} alt="Images" className="shadow-lg" />
            <img src={plainsight06} alt="Textures" className="shadow-lg" />
            <img src={plainsight07} alt="Color Gradients" className="shadow-lg" />
            <img src={plainsight08} alt="Design System Overview" className="shadow-lg" />
            <img src={plainsight09} alt="Workflow Icons" className="shadow-lg" />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.plainsight.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.plainsight.ai
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

export default PlainsightAIPage;
