import React from 'react';
import Header from '../components/Header';
import Seo, { CreativeWorkJsonLd, BreadcrumbsJsonLd } from '../seo/Seo';
import { projectMeta, breadcrumbs } from '../seo/metaTemplates';
import msnVideo from '../assets/images/Symboltm_msn_ad_flying.gif';
import msn01 from '../assets/images/Symboltm_MSN_01.jpg';
import msn04 from '../assets/images/Symboltm_MSN_04.jpg';
import msn06 from '../assets/images/Symboltm_MSN_06.jpg';
import msn08 from '../assets/images/Symboltm_MSN_08.jpg';

const MSNPage = () => {
  const meta = projectMeta('MSN', 'msn');
  return (
    <div className="min-h-screen bg-gray-50">
      <Seo title={meta.title} description={meta.description} url={meta.url}>
        <CreativeWorkJsonLd name="MSN" slug="msn" />
        <BreadcrumbsJsonLd items={breadcrumbs(['Home', 'projects', 'msn'])} />
      </Seo>
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with Video */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">MSN: Iconic Branding</h1>
        <div className="h-2"></div>
        {/* Use video if supported, otherwise fallback to image */}
        <img 
          src={msn01} 
          className="w-full shadow-lg"
          // alt="MSN Branding Video"
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
          MSN
          </p>  
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-700">
          Microsoft Corporation
          </p>  
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          In 2000, Microsoft was empowered with business software users, but consumers shield internet 
          personal services. To gain momentum and grow share, Microsoft's MSN Internet service needed a 
          stronger, more distinctive brand that would promote awareness among consumers.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Microsoft was going through a legal battle with the US government at the time and Bill Gates. 
          Consumers did not want to use Microsoft for personal experiences. It was a big issue for Microsoft to 
          grow new consumer internet services. "MSN is Bill Gates; serious, commercial, aggressive" 
          "Microsoft is dominate then annihilate."
          <br /><br />
          The plan created involved massive brand direction, including its largest-ever consumer advertising 
          campaign. The brand needed to separate from Bill Gates and Microsoft Corp. The best direction 
          would include different iconic symbols, but keep within Microsoft family brand.
          <br /><br />
          The visionary direction was a symbol, a butterfly, that is a faraway as a consumer life, but within 
          Microsoft's colors and font. Research confirmed consumers worldwide. MSN become the butterfly.
          <br /><br />
          When launched it recharged the MSN network on the internet. The more than $150 million 
          advertising campaign for MSN used a humorous story line to convey how people can improve their 
          lives by using MSN to take advantage of the web anytime, anywhere and from any type of internet 
          accessable device. At the same time, Microsoft unveiled the new MSN branded logo, a multicolored 
          butterfly that symbolizes the uniqueness, aspiration, freedom and personal empowerment that people 
          experience when using MSN to bring the internet into their everyday lives. The ad campaign and the 
          butterfly logo captured the unique integration of MSN and best-of-breed internet services.
          <br /><br />
          "The new ad campaign delivers a fresh perspective on what people can do with the Web every day using MSN," 
          said Brad Chase, senior vice president in the Consumer Group at Microsoft. "MSN aims not only to make 
          common tasks truly simple on the Web, but also opens up a new world of adventure by connecting people and 
          information around the world. That's why our new butterfly logo is the perfect embodiment of what MSN stands for."
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Research, Brand Strategy, Brand Architecture, Logo, Motion, Design, Digital, Brand Guidelines, Internal Campaign, Marketing Communications, Launch
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <img src={msn01} className="shadow-lg" /> */}
            <img src={msn04} className="shadow-lg" />
            <img src={msn06} className="shadow-lg" />
            <img src={msn08} className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.msn.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.MSN.com
          </a>
          <br></br>
          ROLE: Michael Thibodeau developed the proposal and project. He was the creative director and leader designer. 
          He conducted research, brand strategy, brand architecture and designed the new "MSN" logo. 
          Also supported the tagline, design system, marketing communications, internal communications and helped 
          to launch the entire package working with Microsoft, FutureBrand and McCann-Erickson Worldwide.
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

export default MSNPage;