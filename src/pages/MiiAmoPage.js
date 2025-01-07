import React from 'react';
import Header from '../components/Header';
import miiamo from '../assets/images/SymbolTM_MiiAmo_PRIMARY_IMAGE.png';
import miiamo01 from '../assets/images/SymbolTM_MiiAmo_01.png';
import miiamo02 from '../assets/images/SymbolTM_MiiAmo_02.png';
import miiamo03 from '../assets/images/SymbolTM_MiiAmo_03.png';
import miiamo04 from '../assets/images/SymbolTM_MiiAmo_04.png';
import miiamo05 from '../assets/images/SymbolTM_MiiAmo_05.png';
import miiamo06 from '../assets/images/SymbolTM_MiiAmo_06.png';

const MiiAmoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Mii Amo</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={miiamo}
          alt="Mii Amo Branding"
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
          Mii amo is a luxury spa collection within Enchantment Group. It is considered one of the top 10 throughout the country.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          For more than 4 years, I have worked together for Mii amo.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Online advertising and customer communications.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={miiamo01} alt="Mii Amo Branding" className="shadow-lg" />
            <img src={miiamo02} alt="Mii Amo Branding" className="shadow-lg" />
            <img src={miiamo03} alt="Mii Amo Branding" className="shadow-lg" />
            <img src={miiamo04} alt="Mii Amo Branding" className="shadow-lg" />
            <img src={miiamo05} alt="Mii Amo Branding" className="shadow-lg" />
            <img src={miiamo06} alt="Mii Amo Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.miiamo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.miiamo.com
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

export default MiiAmoPage;