import React from 'react';
import Header from '../components/Header';
import bobanddolores from '../assets/images/Symboltm_BobHope_PRIMARY_IMAGE.jpg';
import bobanddolores01 from '../assets/images/Symboltm_BobHope_01.jpg';
import bobanddolores02 from '../assets/images/Symboltm_BobHope_02.jpg';

const BobandDoloresPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Bob & Dolores Hope Foundation</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={bobanddolores}
          alt="Bob & Dolores Branding"
          className="w-full shadow-lg"
        />
      </section>

      {/* Content Section */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >

<       div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Brand</h2>
          <p className="text-gray-700">
          Bob & Dolores Hope Foundation and Bob Hope Legacy
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-700">
          The Hope family
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          The Bob & Dolores Hope Foundation supports organizations that bring “hope” to those in need, and those who served to protect our nation.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Bob Hope took his talents to the center of a crisis and used them to heal by showing his compassion, 
          empathy, uplifting spirit and respect for his country. In order to reach and assure continuation of these goals, 
          Bob & Dolores Hope provided direction and leadership of the Foundation during their lifetime. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Logo, Digital Initiatives and Web Design, Marketing Communications, Launch
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={bobanddolores01} alt="Bob & Dolores Branding" className="shadow-lg" />
            <img src={bobanddolores02} alt="Bob & Dolores Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.BobHope.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.BobHope.org
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

export default BobandDoloresPage;