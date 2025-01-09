import React from 'react';
import Header from '../components/Header';
import theglenrothes from '../assets/images/SymbolTM_TheGlenrothes_Truffles_PRIMARY_IMAGE.png';
import theglenrothes01 from '../assets/images/SymbolTM_TheGlenrothes_Truffles_01.png';
import theglenrothes02 from '../assets/images/SymbolTM_TheGlenrothes_Truffles_02.png';
import theglenrothes03 from '../assets/images/SymbolTM_TheGlenrothes_Truffles_03.png';
import theglenrothes04 from '../assets/images/SymbolTM_TheGlenrothes_Truffles_04.png';

const TheGlenrothesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">The Glenrothes</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={theglenrothes}
          alt="The Glenrothes Branding"
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
        The Glenrothes
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Client</h2>
        <p className="text-gray-700">
        Edrington
        </p>
      </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          The Glenrothes was created in 1879. It is one of the highest luxury whisky sets. 
          The Glenrothes 12 Year Old bottle is $70.00 and The Glenrothes 50 Year Old bottle is $36,000. Very expensive stuff!  
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          In 2021, I and Hudson Cutler (see www.hudsoncutler.com) 
          helped The Glenrothes to increase luxury customers through “Whisky & Truffle Pairings.”
          <br></br> <br></br>
          “Like a rare dram of single malt, coming across the ideal truffle may take patience. 
          The term foraging equally applies to both pursuits. This quite natural connection gives rise to something original for 
          The Glenrothes: its first curated guide to truffle hunting; a roadmap to discovering truffles, whether plated or in the wild, 
          in the U.S. and across the pond, during peak fall and winter seasons.
          <br></br> <br></br>
          Each featured destination – whether an acclaimed restaurant known for truffle mastery on the menu, 
          or a wooded hunt into the wild – promises to reward one’s inner forager.” - The Glenroths.
          <br></br> <br></br>
          We created “The Guide to Truffle Hunting” and new images at The Glenrothes front homepage. 
          A new page provided information and  links for customers to explore. There are follow-up marketing and events. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Marketing Communications, Images & Website.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={theglenrothes01} alt="The Glenrothes Branding" className="shadow-lg" />
            <img src={theglenrothes02} alt="The Glenrothes Branding" className="shadow-lg" />
            <img src={theglenrothes03} alt="The Glenrothes Branding" className="shadow-lg" />
            <img src={theglenrothes04} alt="The Glenrothes Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.theglenrothes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.theglenrothes.com
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

export default TheGlenrothesPage;