import React from 'react';
import Header from '../components/Header';
import thetidesinn from '../assets/images/SymbolTM_TheTidesInn_PRIMARY_IMAGE.png';
import thetidesinn01 from '../assets/images/SymbolTM_TheTidesInn_01.png';
import thetidesinn02 from '../assets/images/SymbolTM_TheTidesInn_02.png';
import thetidesinn03 from '../assets/images/SymbolTM_TheTidesInn_03.png';
import thetidesinn04 from '../assets/images/SymbolTM_TheTidesInn_04.png';
import thetidesinn05 from '../assets/images/SymbolTM_TheTidesInn_05.png';
import thetidesinn06 from '../assets/images/SymbolTM_TheTidesInn_06.png';
import thetidesinn07 from '../assets/images/SymbolTM_TheTidesInn_07.png';
import thetidesinn08 from '../assets/images/SymbolTM_TheTidesInn_08.png';

const TheTidesInnPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">The Tides Inn</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={thetidesinn}
          alt="The Tides Inn Branding"
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
          The Tides Inn is a luxury collection within Enchantment Group.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          For more than 4 years, I have worked together for The Tides Inn resort. 
          I have supported online and print production communications. 
          The Tides Inn is a unique, historical resort at the coastline center of the Chesapeake.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Advertising, both printed and online, customer communications, online services and online videos.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={thetidesinn01} alt="The Tides Inn Branding" className="shadow-lg" />
            <img src={thetidesinn02} alt="The Tides Inn Branding" className="shadow-lg" />
            <img src={thetidesinn03} alt="The Tides Inn Branding" className="shadow-lg" />
            <img src={thetidesinn04} alt="The Tides Inn Branding" className="shadow-lg" />
            <img src={thetidesinn05} alt="The Tides Inn Branding" className="shadow-lg" />
            <img src={thetidesinn06} alt="The Tides Inn Branding" className="shadow-lg" />
            <img src={thetidesinn07} alt="The Tides Inn Branding" className="shadow-lg" />
            <img src={thetidesinn08} alt="The Tides Inn Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.tidesinn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.tidesinn.com
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

export default TheTidesInnPage;