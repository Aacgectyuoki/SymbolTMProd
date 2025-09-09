import React from 'react';
import Header from '../components/Header';
import Seo, { CreativeWorkJsonLd, BreadcrumbsJsonLd } from '../seo/Seo';
import { projectMeta, breadcrumbs } from '../seo/metaTemplates';
import CARE from '../assets/images/Symboltm_Care_01.jpg';
import CARE01 from '../assets/images/Symboltm_Care_02.jpg';
import CARE02 from '../assets/images/Symboltm_Care_03.jpg';
import CARE03 from '../assets/images/Symboltm_Care_05.jpg';
import CARE04 from '../assets/images/Symboltm_Care_06.jpg';
import CARE05 from '../assets/images/Symboltm_Care_07.jpg';
import CARE06 from '../assets/images/Symboltm_Care_08.jpg';
import CARE07 from '../assets/images/Symboltm_Care_10.jpg';
import CARE08 from '../assets/images/Symboltm_Care_11.jpg';

const CAREPage = () => {
  const meta = projectMeta('CARE', 'care');

  return (
    <div className="min-h-screen bg-gray-50">
      <Seo title={meta.title} description={meta.description} url={meta.url}>
        <CreativeWorkJsonLd name="CARE" slug="care" />
        <BreadcrumbsJsonLd items={breadcrumbs(['Home', 'projects', 'care'])} />
      </Seo>
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">CARE: Where The End of Poverty Begins</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={CARE}
          alt="CARE Branding"
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
          CARE
          </p>  
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-700">
          CARE International
          </p>  
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          CARE International is one of the largest private enterprises and non-profit organizations. 
          Throughout the 2000s the mission and vision changed, however, the brand was created 30 years prior.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          We conducted research and found issues between the mission, the vision and marketing communications. 
          CARE needed to update their symbol, experience and identity system. The result was a community-to-community depiction. 
          Created a “Community of Hands” and utilized colors from different religious backgrounds and governments. 
          The identity system included a brand system, fonts, colors, images and textures supporting basic brand guidelines, 
          launch services, stationery and marketing communications.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Research, Brand Strategy, Logo, Tagline, Design, Digital, Vehicles, Uniforms, Marketing Communications, Internal Communications & Launch
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={CARE01} alt="CARE Branding" className="shadow-lg" />
            <img src={CARE02} alt="CARE Branding" className="shadow-lg" />
            <img src={CARE03} alt="CARE Branding" className="shadow-lg" />
            <img src={CARE04} alt="CARE Branding" className="shadow-lg" />
            <img src={CARE05} alt="CARE Branding" className="shadow-lg" />
            <img src={CARE06} alt="CARE Branding" className="shadow-lg" />
            <img src={CARE07} alt="CARE Branding" className="shadow-lg" />
            <img src={CARE08} alt="CARE Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.CARE.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.CARE.org
          </a>
          <br></br>
          ROLE: Michael Thibodeau - creative director and leader designer, working directly with CARE’s CMO, CARE International, 
          FutureBrand and McCann-Erickson Worldwide.
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

export default CAREPage;