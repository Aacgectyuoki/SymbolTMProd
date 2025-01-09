import React from 'react';
import Header from '../components/Header';
import arizonabiltmore from '../assets/images/SymbolTM_AB_Image_PRIMARY_IMAGE.jpg';
import arizonabiltmore01 from '../assets/images/SymbolTM_AB_Image_01.jpg';
import arizonabiltmore02 from '../assets/images/SymbolTM_AB_Image_02.jpg';
import arizonabiltmore03 from '../assets/images/SymbolTM_AB_Image_03.jpg';
import arizonabiltmore04 from '../assets/images/SymbolTM_AB_Image_04.jpg';
import arizonabiltmore05 from '../assets/images/SymbolTM_AB_Image_05.jpg';

const ArizonaBiltmorePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Arizona Biltmore: Celebrating 90th Years</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={arizonabiltmore}
          alt="Arizona Biltmore Branding"
          className="w-full shadow-lg"
        />
      </section>

      {/* Content Section */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Brands</h2>
          <p className="text-gray-700">
          Arizona Biltmore: Celebrating 90th Years
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-700">
          Arizona Biltmore, A Waldorf Astoria Resort
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          Arizona Biltmore, A Waldorf Astoria Resort, is a historical resort inspired by architect Frank Lloyd Wright. 
          It is known as the “Jewel of the Desert” a playground for the rich and famous. 
          Almost every U.S. President has been a guest, Clark Gable and Carole Lombard honeymooned there as well as Ronald and Nancy Reagan. 
          Irving Berlin composed the lyrics to “White Christmas” at the resort in 1939.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          In 2019, Arizona Biltmore celebrated its 90th anniversary year.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Logo
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={arizonabiltmore01} alt="Arizona Biltmore Branding" className="shadow-lg" />
            <img src={arizonabiltmore02} alt="Arizona Biltmore Branding" className="shadow-lg" />
            <img src={arizonabiltmore03} alt="Arizona Biltmore Branding" className="shadow-lg" />
            <img src={arizonabiltmore04} alt="Arizona Biltmore Branding" className="shadow-lg" />
            <img src={arizonabiltmore05} alt="Arizona Biltmore Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          {/* <a
            href="https://www.arizonabiltmore.com/special-offers/90years/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.arizonabiltmore.com/special-offers/90years/
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

export default ArizonaBiltmorePage;