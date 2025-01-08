import React from 'react';
import Header from '../components/Header';
import fisherprice from '../assets/images/Symboltm_Fisher_Price_PRIMARY_IMAGE.jpg';
import fisherprice01 from '../assets/images/Symboltm_Fisher-Price_01.jpg';
import fisherprice02 from '../assets/images/Symboltm_Fisher_Price_02.jpg';
import fisherprice03 from '../assets/images/Symboltm_Fisher-Price_03.jpg';
import fisherprice04 from '../assets/images/Symboltm_Fisher-Price_04.jpg';
import fisherprice05 from '../assets/images/Symboltm_Fisher_Price_05.jpg';
import fisherprice06 from '../assets/images/Symboltm_Fisher_Price_06.jpg';

const FisherPricePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Fisher-Price: Thought of That</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={fisherprice}
          alt="Fisher Price Branding"
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
          Fisher-Price promotes educational toys for children and infants. 
          After receiving deep data, Fisher-Price reorganized, focusing on all things social & emotional, 
          cognitive development and physical development.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Create a sub-brand for Fisher Price Baby and develop new guidelines supporting online services.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          New Brand Strategy, Sub-Brand Logos, Icons, Design, Digital, Brand Guidelines, Marketing Communications, Campaigns
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Result</h2>
          <p className="text-gray-700">
          Fisher-Price drove 8% growth in 2016.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={fisherprice01} alt="Fisher Price Branding" className="shadow-lg" />
            <img src={fisherprice02} alt="Fisher Price Branding" className="shadow-lg" />
            <img src={fisherprice03} alt="Fisher Price Branding" className="shadow-lg" />
            <img src={fisherprice04} alt="Fisher Price Branding" className="shadow-lg" />
            <img src={fisherprice05} alt="Fisher Price Branding" className="shadow-lg" />
            <img src={fisherprice06} alt="Fisher Price Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.Fisher-Price.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.Fisher-Price.com
          </a>
          <br></br>
          <a
            href="https://vimeo.com/93183680"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://vimeo.com/93183680
          </a>
          <br></br>
          <a
            href="https://https://vimeo.com/93183557"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://vimeo.com/93183557
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

export default FisherPricePage;