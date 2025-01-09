import React from 'react';
import Header from '../components/Header';
import thecove from '../assets/images/SymbolTM_TheCove_PRIMARY_IMAGE.png';
import thecove01 from '../assets/images/SymbolTM_TheCove_01.jpg';
import thecove02 from '../assets/images/SymbolTM_TheCove_02.png';
import thecove03 from '../assets/images/SymbolTM_TheCove_03.png';
import thecove04 from '../assets/images/SymbolTM_TheCove_04.png';

const TheCovePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">The Cove</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={thecove}
          alt="The Cove Branding"
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
        The Cove, Eleuthera, Bahamas
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Client</h2>
        <p className="text-gray-700">
        Enchantment Group
        </p>
      </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          The Cove is a luxury collection within Enchantment Group.  
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          For more than 4 years, I have worked together for The Cove. 
          I have supported online and print production communications. 
          The Cove is an extreme fantasy resort at the core of the Bahamas.  
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Advertising, both printed and online, customer communications, menus, brochures and online services.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={thecove01} alt="The Cove Branding" className="shadow-lg" />
            <img src={thecove02} alt="The Cove Branding" className="shadow-lg" />
            <img src={thecove03} alt="The Cove Branding" className="shadow-lg" />
            <img src={thecove04} alt="The Cove Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.thecoveeleuthera.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.thecoveeleuthera.com
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

export default TheCovePage;