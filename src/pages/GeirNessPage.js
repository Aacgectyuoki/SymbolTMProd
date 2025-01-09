import React from 'react';
import Header from '../components/Header';
import geirness from '../assets/images/Symboltm_Geirness_PRIMARY_IMAGE.jpg';
import geirness01 from '../assets/images/Symboltm_Geirness_01.jpg';
import geirness02 from '../assets/images/Symboltm_Geirness_02.jpg';
import geirness03 from '../assets/images/Symboltm_Geirness_03.jpg';
import geirness04 from '../assets/images/Symboltm_Geirness_04.jpg';
import geirness05 from '../assets/images/Symboltm_Geirness_05.jpg';
import geirness06 from '../assets/images/Symboltm_Geirness_06.jpg';
import geirness07 from '../assets/images/Symboltm_Geirness_07.jpg';
import geirness08 from '../assets/images/Symboltm_Geirness_08.jpg';

const GeirNessPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Geir Ness: Pure Norway Fragrances</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={geirness}
          alt="Geir ess Branding"
          className="w-full shadow-lg"
        />
      </section>

      {/* Content Section */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-700">
          Laila Inc.
          </p>  
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          As it turned out, Laila was just the beginning. Today Laila is one of Nordstrom’s 
          best-selling specialty fragrances, and the flagship product in a full complement of 
          fragrance and body product lines including Geir for Men, Skin of Norway and Frozen in a Bottle, 
          a fragrance that Geir created in partnership with Disney, inspired by the Norwegian nature featured 
          in Disney’s “Frozen.”
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Review the website, blogs and sales. Research other luxury perfume brands. 
          Provide a better digital system, simplifying communications and strengthening relationships. 
          Use Shopify as a supporting solution. Update the Geir Ness logo and clean up all sub-brand logos. 
          The website launch has shown more than 30% more sales since the past.
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
            <img src={geirness01} alt="Geir ness Branding" className="shadow-lg" />
            <img src={geirness02} alt="Geir ness Branding" className="shadow-lg" />
            <img src={geirness03} alt="Geir ness Branding" className="shadow-lg" />
            <img src={geirness04} alt="Geir ness Branding" className="shadow-lg" />
            <img src={geirness05} alt="Geir ness Branding" className="shadow-lg" />
            <img src={geirness06} alt="Geir ness Branding" className="shadow-lg" />
            <img src={geirness07} alt="Geir ness Branding" className="shadow-lg" />
            <img src={geirness08} alt="Geir ness Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.GeirNess.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.GeirNess.com
          </a>
          <br></br>
          ROLE: Michael Thibodeau - creative director and lead designer working with Geir Ness,
          Laila Inc, Hudson Cutler & Be Fun Bully
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

export default GeirNessPage;