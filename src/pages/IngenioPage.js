import React from 'react';
import Header from '../components/Header';
import ingenio from '../assets/images/SymbolTM_IngenioRx_PRIMARY_IMAGE.jpg';
import ingenio01 from '../assets/images/Symboltm_Ingeniorx_01.jpg';
import ingenio02 from '../assets/images/Symboltm_Ingeniorx_02.jpg';

const IngenioPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">IngenioRx: Pharmacy Brand Benefits</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={ingenio}
          alt="IngenioRx Branding"
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
          Anthem, one of the nation’s largest health benefits companies, announced it was establishing a new pharmacy benefits service.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          Create a new name and logo, IngenioRx. IngenioRx quickly offered a full suite of PBM solutions starting in 2020, 
          which coincides with the conclusion of the company’s current PBM contract. 
          IngenioRx will serve customers of Anthem affiliated health plans, as well as non-Anthem customers, 
          with a seamless, integrated experience by taking Anthem’s new model to the national marketplace. 
          </p>
        </div>

        <blockquote className="italic bg-gray-100 p-6 shadow-lg mb-8">
          <p>
          “As a company, we continuously seek bold, innovative solutions that achieve consumer access to high quality, 
          affordable healthcare,” said Joseph R. Swedish, Chairman, President and Chief Executive Officer, <span className="font-bold">Anthem</span>. 
          “During the past two years, we have been very clear that we can strengthen the value offered to the marketplace with an improved and aligned PBM model. 
          Through the process of evaluating many PBM options in preparation for the expiration of our current contract, 
          we determined that our scale and experience best position us to deliver an innovative solution, 
          and the launch of IngenioRx will allow us to break through what is now a complex and fragmented landscape. 
          It also positions <span className="font-bold">Anthem</span> to take advantage of a unique opportunity to grow and diversify our business within our existing footprint as well as nationally.”
          </p>
          {/* <p className="text-right mt-4">- Carlos Anchía, CEO of Plainsight</p> */}
        </blockquote>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Brand Strategy, Name, Logo, Design, Digital
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={ingenio01} alt="IngenioRx Branding" className="shadow-lg" />
            <img src={ingenio02} alt="IngenioRx Branding" className="shadow-lg" />

          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.Ingenio-Rx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.Ingenio-Rx.com
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

export default IngenioPage;