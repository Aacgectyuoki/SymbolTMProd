import React from 'react';
import Header from '../components/Header';
import upvalley from '../assets/images/SymbolTM_UpValleyInn_PRIMARY_IMAGE.jpg';
import upvalley01 from '../assets/images/SymbolTM_UpValleyInn_01.jpg';
import upvalley02 from '../assets/images/SymbolTM_UpValleyInn_02.jpg';
import upvalley03 from '../assets/images/SymbolTM_UpValleyInn_03.jpg';
import upvalley04 from '../assets/images/SymbolTM_UpValleyInn_04.jpg';
import upvalley05 from '../assets/images/SymbolTM_UpValleyInn_05.jpg';
import upvalley06 from '../assets/images/SymbolTM_UpValleyInn_06.jpg';
import upvalley07 from '../assets/images/SymbolTM_UpValleyInn_07.jpg';
import upvalley08 from '../assets/images/SymbolTM_UpValleyInn_08.jpg';
import upvalley09 from '../assets/images/SymbolTM_UpValleyInn_09.jpg';
import upvalley10 from '../assets/images/SymbolTM_UpValleyInn_10.jpg';

const FisherPricePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">UpValley Inn & Hot Springs</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={upvalley}
          alt="UpValley Inn & Hot Springs Branding"
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
          Hotel owner wanted to reposition the Calistoga property from a Comfort Inn to a higher-end boutique hotel. 
          Realizing that Napa hotels were growing share and he was beginnning a renovation, 
          the inn needed a brand transformation to elevate every guest and employee experience.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          The new brand yearned for a unique name, one that was simple, memorable and interesting. 
          The hotel was debuting a mid-century modern vibe, using bold colors and textures. 
          Messages and images would tout tongue-in-cheek marketing communications. The project included all touchpoints. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Brand Strategy, Logo, Design, Digital, Signage, Stationery, Brand Guidelines & Marketing Communications 
          </p>
        </div>

        {/* <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Result</h2>
          <p className="text-gray-700">
          Fisher-Price drove 8% growth in 2016.
          </p>
        </div> */}

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={upvalley01} alt="UpValley Inn & Hot Springs Branding" className="shadow-lg" />
            <img src={upvalley02} alt="UpValley Inn & Hot Springs Branding" className="shadow-lg" />
            <img src={upvalley03} alt="UpValley Inn & Hot Springs Branding" className="shadow-lg" />
            <img src={upvalley04} alt="UpValley Inn & Hot Springs Branding" className="shadow-lg" />
            <img src={upvalley05} alt="UpValley Inn & Hot Springs Branding" className="shadow-lg" />
            <img src={upvalley06} alt="UpValley Inn & Hot Springs Branding" className="shadow-lg" />
            <img src={upvalley07} alt="UpValley Inn & Hot Springs Branding" className="shadow-lg" />
            <img src={upvalley08} alt="UpValley Inn & Hot Springs Branding" className="shadow-lg" />
            <img src={upvalley09} alt="UpValley Inn & Hot Springs Branding" className="shadow-lg" />
            <img src={upvalley10} alt="UpValley Inn & Hot Springs Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.upvalleyinn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.upvalleyinn.com
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