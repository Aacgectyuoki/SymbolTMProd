import React from 'react';
import Header from '../components/Header';
import nocuffs from '../assets/images/SymbolTM_NoCuffs_Image_PRIMARY_IMAGE.jpg';
import nocuffs01 from '../assets/images/SymbolTM_NoCuffs_Image_01.jpg';
import nocuffs02 from '../assets/images/SymbolTM_NoCuffs_Image_02.jpg';
import nocuffs03 from '../assets/images/SymbolTM_NoCuffs_Image_03.jpg';
import nocuffs04 from '../assets/images/SymbolTM_NoCuffs_Image_04.jpg';

const NoCuffsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">1-800-NoCuffs</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={nocuffs}
          alt="1-800-NoCuffs Branding"
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
          1-800-NoCuffs is the largest California DUI defense law firm. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Kavinoky Law Firm was growing and adding other services in California. 
          Finding the right defense lawyer within the firm is paramount. As a result, 1-800-NoCuffs wanted to rebrand their services.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Brand Architecture, Logo, Design, Digital, Stationery, Marketing Communications
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={nocuffs01} alt="1-800-NoCuffs Branding" className="shadow-lg" />
            <img src={nocuffs02} alt="1-800-NoCuffs Branding" className="shadow-lg" />
            <img src={nocuffs03} alt="1-800-NoCuffs Branding" className="shadow-lg" />
            <img src={nocuffs04} alt="1-800-NoCuffs Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.nocuffs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.nocuffs.com
            
          </a>
          <br></br>
          <a
            href="https://www.youtube.com/channel/UCkAyB_BYvntBh_IPx1LInXA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.youtube.com/channel/UCkAyB_BYvntBh_IPx1LInXA
            
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

export default NoCuffsPage;