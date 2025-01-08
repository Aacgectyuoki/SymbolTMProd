import React from 'react';
import Header from '../components/Header';
import ups from '../assets/images/Symboltm_UPS_PRIMARY_IMAGE.jpg';
import ups01 from '../assets/images/Symboltm_UPS_01.jpg';
import ups02 from '../assets/images/Symboltm_UPS_02.jpg';
import ups03 from '../assets/images/Symboltm_UPS_03.jpg';
import ups04 from '../assets/images/Symboltm_UPS_04.jpg';
import ups05 from '../assets/images/Symboltm_UPS_05.jpg';
import ups06 from '../assets/images/Symboltm_UPS_06.jpg';
import ups07 from '../assets/images/Symboltm_UPS_07.jpg';
import ups08 from '../assets/images/Symboltm_UPS_08.jpg';
import ups09 from '../assets/images/Symboltm_UPS_09.jpg';
// import ups10 from '../assets/images/Symboltm_UPS_10.jpg';
import ups11 from '../assets/images/Symboltm_UPS_11.jpg';
import ups12 from '../assets/images/Symboltm_UPS_12.jpg';
import ups13 from '../assets/images/Symboltm_UPS_13.jpg';

const UPSPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">UPS: Synchronizing The World of Commerce</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={ups}
          alt="UPS Branding"
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
          UPS is the global leader in logistics and shipping worldwide. 
          Although the business model had grown, the marketing had stayed the same. 
          In order to move the marketing and brand forward, a plan was necessary to restructure 
          the brand strategy. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          We pulled back and provided internal and external research. 
          The conclusive result was that change was needed, including the brand name 
          (United Parcel Service vs. UPS), logo (from 1961) and brand architecture. 
          We conducted focus groups with consumers and business owners to review simple marketing experiences and communications. 
          The decision was to simplify and create a clear and powerful brand look for UPS, making communications simple for future global solutions. 
          </p>
          <br></br>
          <p className="text-gray-700">
          This included establishing a new brand strategy, positioning, messaging and a new tagline, 
          “Synchronizing the World of Commerce,” We simplified the brand architecture system, 
          focusing on one brand, one vision. The new UPS logo created was more masculine, active and powerful. 
          The design system added a new font and palette. Inventory impacted included stationery, collateral, 
          signage, vehicles, planes and packages. Even the 4,300 stores Mail Box Etc. become the The UPS Store.
          </p>
          <br></br>
          <p className="text-gray-700">
          The UPS CEO, Mike Eskew, unveiled the new brand including the new logo and touchpoint design system. 
          Being the first redesign in more than 40 years of the company’s famous logo, a string-tied package on 
          top of a shield. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Research, Brand Strategy, Brand Architecture, Name, Logo, Tagline, Design, Digital, Brand Guidelines, Packages, Signage, Vehicles, Internal Communications & Launch
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Result</h2>
          <p className="text-gray-700">
          In a year, UPS reported 13% earnings, increasing on 7% revenue gain through all segments. 
          <br></br><br></br>
          <blockquote>
            <p className="italic bg-gray-100 p-6 shadow-lg mb-8">
            “D. Scott Davis, the chief financial officer, said the company was performing better than the 
            rest of the economy. He also credited a rebranding initiative for increasing profit.”<p className="text-right mt-4"> – The New York Times</p>
            </p>
          </blockquote>
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={ups01} alt="UPS Branding" className="shadow-lg" />
            <img src={ups02} alt="UPS Branding" className="shadow-lg" />
            <img src={ups03} alt="UPS Branding" className="shadow-lg" />
            <img src={ups04} alt="UPS Branding" className="shadow-lg" />
            <img src={ups05} alt="UPS Branding" className="shadow-lg" />
            <img src={ups06} alt="UPS Branding" className="shadow-lg" />
            <img src={ups07} alt="UPS Branding" className="shadow-lg" />
            <img src={ups08} alt="UPS Branding" className="shadow-lg" />
            <img src={ups09} alt="UPS Branding" className="shadow-lg" />
            {/* <img src={ups10} alt="UPS Branding" className="shadow-lg" /> */}
            <img src={ups11} alt="UPS Branding" className="shadow-lg" />
            <img src={ups12} alt="UPS Branding" className="shadow-lg" />
            <img src={ups13} alt="UPS Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.UPS.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.UPS.com
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

export default UPSPage;