import React from 'react';
import Header from '../components/Header';
import Seo, { createCreativeWorkData, createBreadcrumbsData } from '../seo/Seo';
import { projectMeta, breadcrumbs } from '../seo/metaTemplates';
import acela from '../assets/images/Symboltm_Acela_02.jpg';
import acela02 from '../assets/images/Symboltm_Acela_01.jpg';
import acela03 from '../assets/images/Symboltm_Acela_04.jpg';
import acela04 from '../assets/images/Symboltm_Acela_05.jpg';
import acela05 from '../assets/images/Symboltm_Acela_06.jpg';
import acela06 from '../assets/images/Symboltm_Acela_07.jpg';
import acela07 from '../assets/images/Symboltm_Acela_08.jpg';
import acela08 from '../assets/images/Symboltm_Acela_09.jpg';
import acela09 from '../assets/images/Symboltm_Acela_10.jpg';
import acela10 from '../assets/images/Symboltm_Acela_11.jpg';
import acela11 from '../assets/images/Symboltm_Acela_12.jpg';
import acela12 from '../assets/images/Symboltm_Acela_13.jpg';
import acela13 from '../assets/images/Symboltm_Acela_14.jpg';
import acela14 from '../assets/images/Symboltm_Acela_15.jpg';
import acela15 from '../assets/images/Symboltm_Acela_18.jpg';


const AcelaPage = () => {
  const meta = projectMeta('Acela', 'acela');
  return (
    <div className="min-h-screen bg-gray-50">
      <Seo 
        title={meta.title} 
        description={meta.description} 
        url={meta.url}
        structuredData={[
          createCreativeWorkData('Acela', 'acela'),
          createBreadcrumbsData(breadcrumbs(['Home', 'projects', 'acela']))
        ]}
      />
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Acela: Travelers Value Their Time</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
       <img
            src={acela}
            alt="Acela Branding"
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
          Acela
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
          Create a branded experience for Amtrak's high-speed rail service that would differentiate it from 
          airlines and automobiles as well as make it compelling and relevant to customers.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Insights were gathered by riding trains, touring stations, interviewing senior management, and 
          analyzing the ways Amtrak distributes and acts upon information. In-depth traveler profiles were 
          developed to highlight to role rail travel could play in people's lives.
          <br /><br />
          A new brand name, "Acela," story and identity were created to reflect consumers' image of the ideal 
          rail provider.
          <br /><br />
          Consumer research identified ten key steps in the passenger's journey, from learning and planning 
          through to arriving at the destination and continuing onward. These steps became the basis for 
          Acela's service strategy. Each step in the journey was seen as part of an integrated whole, allowing 
          for better media planning and touch point design.
          <br /><br />
          Staging included managing the roll-out of the new Acela high speed rail brand – from designing new 
          train exteriors to specifying materials and finished to train interiors. All touch points were designed 
          to reflect the new brand - from tickets to newsletters to website to business cards. By improving the 
          details and consistency at every point of the journey, Amtrak has been able to provide guests a better 
          travel experience.
          <br /><br />
          In its first year of operation, Acela realized a 13% premium and 10% increase in bookings over other train services.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Research, Brand Strategy, Brand Services, Name, Logo, Icons, Sub-Brand logos, Brand Guidelines, Vehicles, Signage, Maps, Stationery, Marketing Communications, Campaign, Launch
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={acela02} alt="Acela Branding" className="shadow-lg" />
            <img src={acela03} alt="Acela Branding" className="shadow-lg" />
            <img src={acela04} alt="Acela Branding" className="shadow-lg" />
            <img src={acela05} alt="Acela Branding" className="shadow-lg" />
            <img src={acela06} alt="Acela Branding" className="shadow-lg" />
            <img src={acela07} alt="Acela Branding" className="shadow-lg" />
            <img src={acela08} alt="Acela Branding" className="shadow-lg" />
            <img src={acela09} alt="Acela Branding" className="shadow-lg" />
            <img src={acela10} alt="Acela Branding" className="shadow-lg" />
            <img src={acela11} alt="Acela Branding" className="shadow-lg" />
            <img src={acela12} alt="Acela Branding" className="shadow-lg" />
            <img src={acela13} alt="Acela Branding" className="shadow-lg" />
            <img src={acela14} alt="Acela Branding" className="shadow-lg" />
            <img src={acela15} alt="Acela Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.amtrak.com/acela-express-train"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.amtrak.com/acela-express-train
          </a>
          <br></br>
          ROLE: Michael Thibodeau - creative director and lead designer with IDEO, OH & Co and National Railroad Passenger Corporation
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

export default AcelaPage;