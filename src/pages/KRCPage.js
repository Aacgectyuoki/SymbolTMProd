import React from 'react';
import Header from '../components/Header';
import krc from '../assets/images/Symboltm_KRC_PRIMARY_IMAGE.jpg';
import krc01 from '../assets/images/Symboltm_KRC_01.jpg';
import krc02 from '../assets/images/Symboltm_KRC_02.jpg';
import krc03 from '../assets/images/Symboltm_KRC_03.jpg';
import krc04 from '../assets/images/Symboltm_KRC_04.jpg';
import krc05 from '../assets/images/Symboltm_KRC_05.jpg';
import krc06 from '../assets/images/Symboltm_KRC_06.jpg';
import krc07 from '../assets/images/Symboltm_KRC_07.jpg';
import krc08 from '../assets/images/Symboltm_KRC_08.jpg';
import krc09 from '../assets/images/Symboltm_KRC_09.jpg';
import krc10 from '../assets/images/Symboltm_KRC_10.jpg';
import krc11 from '../assets/images/Symboltm_KRC_11.jpg';

const KRCPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">KRC Research: Our Insights. Your Breakthroughs.</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={krc}
          alt="KRC Branding"
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
        KRC Research
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Client</h2>
        <p className="text-gray-700">
        KRC Research and Weber Shandwick
        </p>
      </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          KRC Research is a full service global public opinion research consultancy and a member of the Interpublic Group (IPG) of companies. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          We assisted KRC Research to reorganize the brand from the core, and changed the strategy, 
          logo, design system and marketing communications. The design system simplified the website and new reports, 
          decks and services. Sub-brand services expanded the relationship, making the KRS Research family. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Brand Strategy, Logo, Sub-Brand Logos, Design, Digital, Brand Guidelines, Marketing Communications, Launch 
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
            <img src = {krc01} alt = "KRC Branding" className="w-full shadow-lg" />
            <img src = {krc02} alt = "KRC Branding" className="w-full shadow-lg" />
            <img src = {krc03} alt = "KRC Branding" className="w-full shadow-lg" />
            <img src = {krc04} alt = "KRC Branding" className="w-full shadow-lg" />
            <img src = {krc05} alt = "KRC Branding" className="w-full shadow-lg" />
            <img src = {krc06} alt = "KRC Branding" className="w-full shadow-lg" />
            <img src = {krc07} alt = "KRC Branding" className="w-full shadow-lg" />
            <img src = {krc08} alt = "KRC Branding" className="w-full shadow-lg" />
            <img src = {krc09} alt = "KRC Branding" className="w-full shadow-lg" />
            <img src = {krc10} alt = "KRC Branding" className="w-full shadow-lg" />
            <img src = {krc11} alt = "KRC Branding" className="w-full shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.KRCResearch.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.KRCResearch.com
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

export default KRCPage;