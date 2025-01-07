import React from 'react';
import Header from '../components/Header';
import cvg from '../assets/images/SymbolTM_CVG_PRIMARY_IMAGE.jpg';
import cvg01 from '../assets/images/SymbolTM_CVG_01.jpg';
import cvg02 from '../assets/images/SymbolTM_CVG_02.jpg';
import cvg03 from '../assets/images/SymbolTM_CVG_03.jpg';
import cvg04 from '../assets/images/SymbolTM_CVG_04.jpg';

const ClimateVictoryGardensPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Green America: Climate Victory Gardens</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={cvg}
          alt="CVG Branding"
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
          Green America is a nonprofit membership organization based in the United States that promotes 
          environmentally aware and ethical consumerism. It develops events and campaigns to make ethical actions visible and memorable.
          <br></br><br></br>
          As a recent climate campaign, Green America developed Climate Victory Gardens. 
          It helps people as their part of the climate solution by restoring soil health to draw down carbon. 
          Everyone can grow a garden, and everyone can take meaningful action on the climate crisis.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Develop a campaign for communications and experiences. Include logo, design system and basic items.
          <br></br><br></br>
          Results: The campaign has grown new donators and developed more than 8,000 gardens. 
          <br></br><br></br>
          “Michael was very patient with our feedback and requests. In the end, he gave us a great logo. Thank you!!!” – GreenAmerica.org 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Logo, Design System, Campaign Applications 
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={cvg01} alt="CVG Branding" className="shadow-lg" />
            <img src={cvg02} alt="CVG Branding" className="shadow-lg" />
            <img src={cvg03} alt="CVG Branding" className="shadow-lg" />
            <img src={cvg04} alt="CVG Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.greenamerica.org/cvg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.greenamerica.org/cvg
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

export default ClimateVictoryGardensPage;