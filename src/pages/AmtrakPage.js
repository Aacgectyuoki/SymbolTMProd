import React from 'react';
import Header from '../components/Header';
import Seo, { createCreativeWorkData, createBreadcrumbsData } from '../seo/Seo';
import { projectMeta, breadcrumbs } from '../seo/metaTemplates';
import amtrak from '../assets/images/Symboltm_Amtrak_05.jpg';
import amtrak01 from '../assets/images/Symboltm_Amtrak_02.jpg';
import amtrak02 from '../assets/images/Symboltm_Amtrak_06.jpg';
import amtrak03 from '../assets/images/Symboltm_Amtrak_16.jpg';
import amtrak04 from '../assets/images/Symboltm_Amtrak_17.jpg';
import amtrak05 from '../assets/images/Symboltm_Amtrak_20.jpg';


const AmtrakPage = () => {
  const meta = projectMeta('Amtrak', 'amtrak');
  return (
    <div className="min-h-screen bg-gray-50">
      <Seo 
        title={meta.title} 
        description={meta.description} 
        url={meta.url}
        structuredData={[
          createCreativeWorkData('Amtrak', 'amtrak'),
          createBreadcrumbsData(breadcrumbs(['Home', 'projects', 'amtrak']))
        ]}
      />
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Amtrak: Travel Train Rebranded</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
            src={amtrak}
            alt="Amtrak Branding"
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
          Amtrak
          </p>  
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-700">
          National Railroad Passenger Corporation
          </p>  
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          Amtrak wanted to provide better products and services across its entire national network.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          We conducted research and provided new insights for employees and customers. 
          We gained knowledge from the business commuter, 
          and long-distance travel segments providing the basis to define types of service with a 
          shared brand proposition. This established the basis for several customer-focused initiatives including: 
          revised service standards, the Amtrak Guest Rewards loyalty program, training, newly designed uniforms, and more. 
          Integrate these operational upgrades with the development of a revised Amtrak brand, 
          enabling the railroad to bring service enhancements to all parts of the customer experience.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Research, Brand Strategy, Brand Service, Brand Architecture. Logo, Design, Digital, Uniforms, Materials, Marketing Communications, Stationery, Vehicles, Signage, Products, Launch
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={amtrak01} alt="Amtrak Branding" className="shadow-lg" />
            <img src={amtrak02} alt="Amtrak Branding" className="shadow-lg" />
            <img src={amtrak03} alt="Amtrak Branding" className="shadow-lg" />
            <img src={amtrak04} alt="Amtrak Branding" className="shadow-lg" />
            <img src={amtrak05} alt="Amtrak Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.amtrak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.amtrak.com
          </a>
          <br></br>
          ROLE: Michael Thibodeau - creative director and brand designer working with 
          National Railroad Passenger Corporation, IDEO and OH & Co.
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

export default AmtrakPage;