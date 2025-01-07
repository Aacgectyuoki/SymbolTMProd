import React from 'react';
import Header from '../components/Header';
import turvo from '../assets/images/SymbolTM_Turvo_PRIMARY_IMAGE.jpg';
import turvo01 from '../assets/images/SymbolTM_Turvo_01.jpg';
import turvo02 from '../assets/images/SymbolTM_Turvo_02.jpg';
import turvo03 from '../assets/images/SymbolTM_Turvo_03.jpg';
import turvo04 from '../assets/images/SymbolTM_Turvo_04.jpg';
import turvo05 from '../assets/images/SymbolTM_Turvo_05.jpg';
import turvo06 from '../assets/images/SymbolTM_Turvo_06.jpg';
import turvo07 from '../assets/images/SymbolTM_Turvo_07.jpg';
import turvo08 from '../assets/images/SymbolTM_Turvo_08.jpg';

const TurvoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Turvo</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={turvo}
          alt="Turvo Branding"
          className="w-full shadow-lg"
        />
      </section>

      {/* Content Section */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          Turvo is the world’s first multi-enterprise collaborative platform specifically designed for the global supply chain. 
          The platform connects people and organizations across the supply chain, allowing shippers, 
          logistics providers and carriers to digitally transform their workflows with cloud-based software and mobile applications.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Transform the technology platform into a powerful brand and strengthen communication experiences. 
          Create a new brand system, showcase unique isometric images and textures.  
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Results</h2>
          <p className="text-gray-700">
          Turvo’s brand has increased global customers and empowered business growth.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={turvo01} alt="Turvo Branding" className="shadow-lg" />
            <img src={turvo02} alt="Turvo Branding" className="shadow-lg" />
            <img src={turvo03} alt="Turvo Branding" className="shadow-lg" />
            <img src={turvo04} alt="Turvo Branding" className="shadow-lg" />
            <img src={turvo05} alt="Turvo Branding" className="shadow-lg" />
            <img src={turvo06} alt="Turvo Branding" className="shadow-lg" />
            <img src={turvo07} alt="Turvo Branding" className="shadow-lg" />
            <img src={turvo08} alt="Turvo Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.turvo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.turvo.com
          </a>
          <br></br>
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

export default TurvoPage;