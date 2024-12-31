import React, { useState } from 'react';
import Header from '../components/Header';
// import logo from '../assets/images/symboltm-logo.png';


// List of companies (truncated for brevity; add the full list here)
const companies = [
  '2002 Coca-Cola Winter Olympics',
  'Acela',
  'ADP',
  'Aetna',
  'AIG',
  'Amtrak',
  'ARC Research Consortium',
  'AOL',
  'Argonne National Laboratory',
  'Autodesk',
  'Bahamas Investment Authority',
  'BMO',
  'Barbie',
  'Beaumont Health',
  'Bob & Dolores Hope Foundation',
  'Brigham & Woman’s Hospital',
  'Cablevision',
  'Candy & Flowers',
  'CARE International',
  'Chase',
  'ChowBotics',
  'Chubb Insurance',
  'CIBC',
  'Coldwell Banker',
  'COLT Telecom',
  'Consumer Reports',
  'Courtyard by Marriott',
  'Covenant House',
  'Days Inn International',
  'Dex Media',
  'Dinova',
  'Dunn & Bradstreet',
  'DuPont',
  'edX',
  'Electrolux',
  'Empire BlueCross BlueShield',
  'ERA',
  'EthicOne',
  'ExecuStay by Marriott',
  'Executive Council',
  'Fairfield Inn by Marriott',
  'Federal Reserve Financial Services',
  'FirstKey Mortgage',
  'Fisher-Price',
  'Frontier Communications',
  'Geir Ness',
  'Green America',
  'GSMA',
  'Harvard University',
  'HarvardX',
  'IBM',
  'IngenioRX',
  'InterContinental Hotels Group',
  'Juan Valdez Café',
  'Juan Valdez Premium Colombian Coffees',
  'Juan Valdez Pods',
  'JW Marriott Hotels & Resorts',
  'KIA',
  'Kodak',
  'KRC Research',
  'Krispy Rice',
  'LexisNexis',
  'Live. Love. Lux.',
  'Lockheed Martin',
  'Marriott Hotels & Resorts',
  'Marriott International',
  'Marriott Rewards',
  'McDonald’s Corporation',
  'Mediaco Publish',
  'Meritage Restaurant',
  'MIT',
  'Mobilicity',
  'Mondee',
  'MSN',
  'NXP',
  'Orbitz Worldwide',
  'Oreo',
  'Ortho-McNeil',
  'Pan-American Sports Network',
  'Philips',
  'Phoenix Marketing International',
  'PricewaterhouseCoopers',
  'Quest Diagnostics',
  'RBC Financial Group',
  'RCI',
  'Rejuvenan Global Health',
  'Renaissance Hotels & Resorts',
  'Residence Inn by Marriott',
  'Revive Spa by Marriott',
  'Royal Bank of Canada',
  'Samsung Corporation',
  'Samsung Electronics',
  'SBE',
  'South African Airways',
  'SpringHill Suites by Marriott',
  'Starwood Hotels & Resorts',
  'State Farm',
  'Stonegrill Restaurant',
  'The Coca-Cola Company',
  'The Gillette Company',
  'The McGraw-Hill Companies',
  'The St. Joe Company',
  'The UPS Store',
  'Townplace Suites by Marriott',
  'Travelport',
  'TripPro',
  'Turvo',
  'Twenty6 Bar',
  'Umami Burger',
  'UPS',
  'UpValley Inn & Hot Springs',
];

const AboutPage = () => {

  // Sort companies alphabetically
  const sortedCompanies = companies.sort((a, b) => a.localeCompare(b));

  // Group companies into columns for top-down layout
  const groupIntoColumns = (companies, numColumns) => {
    const columnLength = Math.ceil(companies.length / numColumns);
    return Array.from({ length: numColumns }, (_, i) =>
      companies.slice(i * columnLength, i * columnLength + columnLength)
    );
  };

  const numColumns = 3; // Adjust number of columns here
  const columns = groupIntoColumns(sortedCompanies, numColumns);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Content Wrapper with Gray Background */}
      <div className="flex-1 bg-gray-100">

        {/* About Content */}
        <section id="our-brand-story" className="bg-gray-100 p-6">
          <div>
            <h3 className="text-2xl font-avenir-bold mb-6">
              <span className="font-avenir-bold">Our Brand Story:</span>
            </h3>
            <p className="text-2xl font-avenir-light mb-6">
             Symbol<span style={{ verticalAlign: 'super', fontSize: '0.6em', position: 'relative', top: '0em' }}>TM </span> is a boutique studio, providing a range of services. We are truly passionate about turning complex issues into simple solutions. Our unique experiences bring broad insights around brand symbols, icons, and stories, including rich research to ensure proper trademarks, domains, and copyright solutions.
            </p>
          </div>

          <div>
            {/* <h3 className="text-xl font-avenir-bold mb-4">Michael Thibodeau</h3> */}
            <p className="text-2xl font-avenir-light mb-6">
              Michael Thibodeau is a stroke survivor, brand strategist, and creative director. His work includes world-class campaigns and successfully developed brands. He created the butterfly logo for MSN; reorganized the architecture, identity, and campaigns for Marriott International; partnered with Coca-Cola & Olympics on a marketing campaign; designed the logo for the new Amtrak and assisted in launching a new brand, Acela; and much more. He has worked on projects for and within Lippincott, IDEO, FutureBrand, Weber Shandwick, and Hudson Cutler.
            </p>
            <blockquote className="text-2xl italic font-avenir-light mb-6">
              “I have worked with Michael for over five years and he’s an impeccable designer. 
              He’s timely, has an affable and friendly manner and his focus on quality is in the top 1% of designers we’ve hired over many years. 
              He has a fantastic aesthetic when it comes to thinking about positioning and communicating a brand to an audience. He’s a brilliant creative mind!" 
              <span className="not-italic"> – Bob Johnston, CEO, The Executive Council</span>
            </blockquote>
          </div>
        </section>

        {/* Past Experiences */}
        <section id="past-experiences" className="bg-gray-100 p-6">
          <div>
            <h3 className="text-2xl font-avenir-bold mb-6">Past Experiences</h3>
            <p className="text-2xl font-avenir-light mb-4">
              Michael has worked on numerous prestigious projects, including:
            </p>

            {/* Add logos image here */}
            <div className="my-6 flex justify-center">
              <img
                src={require('../assets/images/Logos_industires.png')} // Update with your actual path
                alt="Logos of companies Michael has worked with"
                className="max-w-full h-auto"
              />
            </div>

            {/* Companies Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {columns.map((column, colIndex) => (
                <div key={colIndex}>
                  {column.map((company, index) => (
                    <div key={index} className="text-base font-avenir-light">
                      • {company}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <blockquote className="text-2xl italic font-avenir-light mt-6">
              "We worked with Michael on a redesign of our corporate logo and branding work. 
              The benchmark was the well-established logo of a world-famous entertainer who had passed away years ago and our desire was to re-establish his credentials and image. 
              Michael worked with board members who represented both the family and the professional community to develop an end-product that won the hearts and minds of all involved. 
              Importantly he listened well, responded as appropriate and worked effectively and efficiently. I recommend Michael as a professional and as a person. 
              Whether you have a huge budget or a more constrained fund, Michael will create branding work that is well thought out and highly impactful."
              <span className="not-italic"> – Ken Levy, Bob Hope Legacy</span>
            </blockquote>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-100 p-6">
          <div>
            <h2 className="text-2xl font-avenir-bold mb-6">Get in touch.</h2>
            <p className="inter-bold">Email: <span className="inter-light">Hi@SymbolTM.com</span></p>
            <p className="inter-bold">Mobile: <span className="inter-light">+1 480 717 0449</span></p>
            <p className="inter-bold">Office: <span className="inter-light">7202 North 15th Pl., Phoenix, AZ 85020</span></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;