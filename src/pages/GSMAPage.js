import React from 'react';
import Header from '../components/Header';
import gsma from '../assets/images/Symboltm_GSMA_PRIMARY_IMAGE.jpg';
import gsma01 from '../assets/images/Symboltm_GSMA_01.jpg';
import gsma02 from '../assets/images/Symboltm_GSMA_02.jpg';
import gsma03 from '../assets/images/Symboltm_GSMA_03.jpg';
import gsma04 from '../assets/images/Symboltm_GSMA_04.jpg';
import gsma05 from '../assets/images/Symboltm_GSMA_05.jpg';

const GSMAPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">GSMA: The Future 5G</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={gsma}
          alt="GSMA Branding"
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
          Make The NetWork
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-700">
          GSMA
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          The Open Internet is critical to the development of society as a whole. 
          The European electronic communications industry is at the forefront of its development and invests 
          heavily in quality networks and services, in the context of highly competitive markets. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          As work on the “Connected Continent Regulation” evolves, 
          we underline the importance of promoting real choice and quality for all customers. To control consumers, 
          we helped GSMA develop Make The NetWork supporting EU consumers and leading telecommunications. 
          As result, it advocates a healthy, thriving digital economy as crucial to social and economic progress in Europe before the 5G. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Brand Strategy, Name, Logo, Design, Digital, Marketing Communications, Launch
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={gsma01} alt="GSMA Branding" className="shadow-lg" />
            <img src={gsma02} alt="GSMA Branding" className="shadow-lg" />
            <img src={gsma03} alt="GSMA Branding" className="shadow-lg" />
            <img src={gsma04} alt="GSMA Branding" className="shadow-lg" />
            <img src={gsma05} alt="GSMA Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          {/* <a
            href="https://www.MakeTheNetwork.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.MakeTheNetwork.eu/
          </a>
          <br></br>
          Twitter: <a
            href="https://x.com/mtnweurope/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            @MTNWEurope
          </a> */}
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

export default GSMAPage;