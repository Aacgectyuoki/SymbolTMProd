import React from 'react';
import Header from '../components/Header';
import harvardX from '../assets/images/Symboltm_HarvardX_PRIMARY_IMAGE.jpg';
import harvardx01 from '../assets/images/Symboltm_HarvardX_01.jpg';
import harvardx02 from '../assets/images/Symboltm_HarvardX_02.jpg';
import harvardx03 from '../assets/images/Symboltm_HarvardX_03.jpg';
import harvardx04 from '../assets/images/Symboltm_HarvardX_04.jpg';
import harvardx05 from '../assets/images/Symboltm_HarvardX_05.jpg';
import harvardx06 from '../assets/images/Symboltm_HarvardX_06.jpg';
import harvardx07 from '../assets/images/Symboltm_HarvardX_07.jpg';
import harvardx08 from '../assets/images/Symboltm_HarvardX_08.jpg';

const HarvardXPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">HarvardX</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={harvardX}
          alt="HarvardX Branding"
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
          As edX become a huge success, Harvard University knew that HarvardX could become even a greater power.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Assisted in creating a powerful brand strategy, a new logo for HarvardX, 
          design system and supporting online communications and website. 
          Currently there are more than 1.5M+ enrollments worldwide.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Brand Strategy, Name, Logo, Design, Digital, Brand Guideline, Marketing Communications, Launch 
          </p>
        </div>

        {/* <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Result</h2>
          <p className="text-gray-700">
          In two years, edX has grown more than 3 million worldwide users, 60 universities and over 300 courses online.
          </p>
        </div> */}
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
            <img src={harvardx01} alt="HarvardX Branding" className="shadow-lg" />
            <img src={harvardx02} alt="HarvardX Branding" className="shadow-lg" />
            <img src={harvardx03} alt="HarvardX Branding" className="shadow-lg" />
            <img src={harvardx04} alt="HarvardX Branding" className="shadow-lg" />
            <img src={harvardx05} alt="HarvardX Branding" className="shadow-lg" />
            <img src={harvardx06} alt="HarvardX Branding" className="shadow-lg" />
            <img src={harvardx07} alt="HarvardX Branding" className="shadow-lg" />
            <img src={harvardx08} alt="HarvardX Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://harvardx.harvard.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            harvardx.harvard.edu
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

export default HarvardXPage;