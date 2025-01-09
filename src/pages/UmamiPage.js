import React from 'react';
import Header from '../components/Header';
import umami from '../assets/images/Umami_Image_PRIMARY_IMAGE.jpg';
import umami01 from '../assets/images/Umami_Image_01.jpg';
import umami02 from '../assets/images/Umami_Image_02.jpg';
import umami03 from '../assets/images/Umami_Image_03.jpg';
import umami04 from '../assets/images/Umami_Image_04.jpg';
import umami05 from '../assets/images/Umami_Image_05.jpg';
import umami06 from '../assets/images/Umami_Image_06.jpg';

const UmamiPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">SBE x Umami Burger</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={umami}
          alt="Umami Branding"
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
          Umami Burgers
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-700">
          SBE / C3
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          Before the COVID-19 pandemic upended the restaurant industry, 
          SBE Entertainment Group began developing chef-driven delivery-only brands to tap into the growing food on-demand segment. 
          <br></br><br></br>
          SBE Entertainment Group supports their hotels by turning dark restaurant kitchens into “ghost kitchens.” 
          That’s always been part of the company’s strategy. There will be a greater void if more restaurants close 
          permanently due to the pandemic.
          <br></br><br></br>
          “It's a solution that will generate revenue in a manner that can deal with the demand that we see today during 
          COVID-19 and the demand that we're going to see post COVID.” Nazarian said.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Umami Burger is one of SBE’s growing sub-brands. In order for the sub-brand to grow, they were in need of consistent guidelines in their communications.
          <br></br><br></br>
          I created the menus, billboards, posters and graphic stickers.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Design, Signage, Environment, Marketing Communications
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={umami01} alt="Umami Branding" className="shadow-lg" />
            <img src={umami02} alt="Umami Branding" className="shadow-lg" />
            <img src={umami03} alt="Umami Branding" className="shadow-lg" />
            <img src={umami04} alt="Umami Branding" className="shadow-lg" />
            <img src={umami05} alt="Umami Branding" className="shadow-lg" />
            <img src={umami06} alt="Umami Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://gobycitizens.com/umami-burger"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            gobycitizens.com/umami-burger
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

export default UmamiPage;