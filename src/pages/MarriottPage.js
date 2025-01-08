import React from 'react';
import Header from '../components/Header';
import marriott from '../assets/images/Symboltm_Marriott_PRIMARY_IMAGE.jpg';
import marriott01 from '../assets/images/SymbolTM_Marriott_01.jpg';
import marriott02 from '../assets/images/SymbolTM_Marriott_02.jpg';
import marriott03 from '../assets/images/SymbolTM_Marriott_03.jpg';
import marriott04 from '../assets/images/SymbolTM_Marriott_04.jpg';
import marriott05 from '../assets/images/SymbolTM_Marriott_05.jpg';
import marriott06 from '../assets/images/SymbolTM_Marriott_06.jpg';
import marriott07 from '../assets/images/SymbolTM_Marriott_07.jpg';
import marriott08 from '../assets/images/SymbolTM_Marriott_08.jpg';
import marriott09 from '../assets/images/SymbolTM_Marriott_09.jpg';
import marriott10 from '../assets/images/SymbolTM_Marriott_10.jpg';
import marriott11 from '../assets/images/SymbolTM_Marriott_11.jpg';
import marriott12 from '../assets/images/SymbolTM_Marriott_12.jpg';
import marriott13 from '../assets/images/SymbolTM_Marriott_13.jpg';
import marriott14 from '../assets/images/SymbolTM_Marriott_14.jpg';
import marriott15 from '../assets/images/SymbolTM_Marriott_15.jpg';
import marriott16 from '../assets/images/SymbolTM_Marriott_16.jpg';

const MarriottPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Marriott: Spirit to Serve</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={marriott}
          alt="Marriott Branding"
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
          Marriott International is the leader hospitality worldwide, managing a portfolio of over 6900 hotels.
          <br></br><br></br>
          Marriott was growing quickly, however, the brand family had lagged through marketing and experiences.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Meeting with the Vice President Global Marketing, Global Marketing & Sales and 
          Mr. J.W. Marriott, Jr. and walked through a proposal to relaunch the marketing management. 
          It was an approved development for the Marriott, JW Marriott and C-F-R-S-T brands, 
          Marriott Rewards and support second tier brand services.
          <br></br><br></br>
          This involved many different brands, sub-brands, services and products. The goal was to simplify brand architecture. 
          <br></br><br></br>
          The result would be mindful of Marriott Rewards and support one go-to website for all brands. A massive project creating a big impact.
          </p>
        </div>

        <blockquote className="italic bg-gray-100 p-6 shadow-lg mb-8">
          <p>
            “When anyone, anywhere sees the name ‘Marriott’ and believes it ensures a standard of quality, 
            integrity and dependability, that’s an act of trust. We have built trusted brands over 75 years, 
            and today we earn that trust with everything we do.”
          </p>
          <p className="text-right mt-4">- J.W. Marriott, jr.</p>
        </blockquote>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Analysis, Brand Architecture, Brand Strategy, Research, Logos and Sub-Logos, Design, Digital, Design System, 
          Brand Guidelines, Stationery, Signage, Vehicles, Marketing Communications, Launch
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={marriott01} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott02} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott03} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott04} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott05} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott06} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott07} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott08} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott09} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott10} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott11} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott12} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott13} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott14} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott15} alt="Marriott Branding" className="shadow-lg" />
            <img src={marriott16} alt="Marriott Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.Marriott.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.Marriott.com
            
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

export default MarriottPage;