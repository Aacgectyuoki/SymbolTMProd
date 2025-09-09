import React from 'react';
import Header from '../components/Header';
import Seo, { CreativeWorkJsonLd, BreadcrumbsJsonLd } from '../seo/Seo';
import { projectMeta, breadcrumbs } from '../seo/metaTemplates';
import rbc from '../assets/images/Symboltm_RBC_01.jpg';
import rbc02 from '../assets/images/Symboltm_RBC_02.jpg';
import rbc03 from '../assets/images/Symboltm_RBC_03.jpg';
import rbc04 from '../assets/images/Symboltm_RBC_04.jpg';
import rbc05 from '../assets/images/Symboltm_RBC_05.jpg';
import rbc06 from '../assets/images/Symboltm_RBC_06.jpg';
import rbc07 from '../assets/images/Symboltm_RBC_07.jpg';
import rbc08 from '../assets/images/Symboltm_RBC_08.jpg';
import rbc09 from '../assets/images/Symboltm_RBC_09.jpg';

const RBCPage = () => {
  const meta = projectMeta('RBC Financial Group', 'rbc');
  return (
    <div className="min-h-screen bg-gray-50">
      <Seo title={meta.title} description={meta.description} url={meta.url}>
        <CreativeWorkJsonLd name="RBC Financial Group" slug="rbc" />
        <BreadcrumbsJsonLd items={breadcrumbs(['Home', 'projects', 'rbc'])} />
      </Seo>
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">RBC Financial Group</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
            src={rbc}
            alt="RBC Branding"
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
          RBC
          </p>  
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-700">
          Royal Bank of Canada
          </p>  
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          Royal Bank of Canada, the leading banking group in Canada and North America's seventh largest, 
          was finding little latitude for growth in its home market. The executive team had determined the need 
          to lay new foundations for growth in the USA and were making strategic acquisitions there in 
          brokerage, wealth management, insurance, mortgage origination, investment banking and 
          commercial banking. FutureBrand was engaged primarily to assist executive management in defining 
          the best brand architecture and graphic identity for the group going forward.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Our team discovered early on the need to find solutions that could transcend some of the historic ties 
          to a single country of origin and the now distant British Empire. Ultimately, the solution had to 
          balance preferences and hesitancies in the USA with the need to maintain the valuable heritage of the 
          brand in Canada. The work and recommendations of our combined New York and Toronto based 
          teams included the creation of: i) The corporate brand name of RBC Financial Group; ii) A set of 
          RBC branded core competencies/platforms for use in Canada; iii) A set of RBC led co-brands for use 
          in the USA, and; iv) A modernized lion and globe icon, minus the crown. This significant 
          repositioning and brand revitalization program has set the stage for a new era of growth for the group 
          and was appropriately introduced by the new Chairman within the first few weeks of his ascent.
          <br /><br />
          "One of our key strategies is expansion into the U.S. and other niche markets around the world," said 
          Gord Nixon, president and chief executive officer, RBC Financial Group. "We want to be able to use 
          a common brand name and logo wherever we operate in order to build awareness of our total 
          business activities and to leverage our brand's positive attributes with customers, employees and 
          investors globally. Our hope is that with the updated logo, 'Leo' will soon become as recognized 
          around the world as it has been in Canada."
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Brand Name Options, Brand Logo, Design System, Digital Design System, Marketing Communications and Launch
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={rbc02} alt="RBC Branding" className="shadow-lg" />
            <img src={rbc03} alt="RBC Branding" className="shadow-lg" />
            <img src={rbc04} alt="RBC Branding" className="shadow-lg" />
            <img src={rbc05} alt="RBC Branding" className="shadow-lg" />
            <img src={rbc06} alt="RBC Branding" className="shadow-lg" />
            <img src={rbc07} alt="RBC Branding" className="shadow-lg" />
            <img src={rbc08} alt="RBC Branding" className="shadow-lg" />
            <img src={rbc09} alt="RBC Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.rbc.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.RBC.com
          </a>
          <br></br>
          ROLE: Michael Thibodeau - creative director and lead designer working with RBC and FutureBrand.
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

export default RBCPage;