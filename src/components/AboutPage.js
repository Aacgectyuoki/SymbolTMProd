import React, { useState } from 'react';
import Header from '../components/Header';
// import logo from '../assets/images/symboltm-logo.png';

const AboutPage = () => {
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
              SymbolTM is a boutique studio, providing a range of services. We are truly passionate about turning complex issues into simple solutions. Our unique experiences bring broad insights around brand symbols, icons, and stories, including rich research to ensure proper trademarks, domains, and copyright solutions.
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

            <ul className="list-disc pl-6 space-y-2">
              <li className="text-2xl font-avenir-light">2002 Coca-Cola Winter Olympics</li>
              <li className="text-2xl font-avenir-light">Acela</li>
              <li className="text-2xl font-avenir-light">ADP</li>
              <li className="text-2xl font-avenir-light">Aetna</li>
              <li className="text-2xl font-avenir-light">AIG</li>
              <li className="text-2xl font-avenir-light">Amtrak</li>
              <li className="text-2xl font-avenir-light">ARC Research Consortium</li>
              <li className="text-2xl font-avenir-light">AOL</li>
              <li className="text-2xl font-avenir-light">Argonne National Laboratory</li>
              <li className="text-2xl font-avenir-light">Autodesk</li>
              <li className="text-2xl font-avenir-light">Bahamas Investment Authority</li>
              <li className="text-2xl font-avenir-light">BMO</li>
              <li className="text-2xl font-avenir-light">Barbie</li>
              <li className="text-2xl font-avenir-light">Beaumont Health</li>
              <li className="text-2xl font-avenir-light">Bob & Dolores Hope Foundation</li>
              <li className="text-2xl font-avenir-light">Brigham & Woman’s Hospital</li>
              <li className="text-2xl font-avenir-light">Cablevision</li>
              <li className="text-2xl font-avenir-light">Candy & Flowers</li>
              <li className="text-2xl font-avenir-light">CARE International</li>
              <li className="text-2xl font-avenir-light">Chase</li>
              <li className="text-2xl font-avenir-light">ChowBotics</li>
              <li className="text-2xl font-avenir-light">Chubb Insurance</li>
              <li className="text-2xl font-avenir-light">CIBC</li>
              <li className="text-2xl font-avenir-light">Coldwell Banker</li>
              <li className="text-2xl font-avenir-light">COLT Telecom</li>
              <li className="text-2xl font-avenir-light">Consumer Reports</li>
              <li className="text-2xl font-avenir-light">Courtyard by Marriott</li>
              <li className="text-2xl font-avenir-light">Covenant House</li>
              <li className="text-2xl font-avenir-light">Days Inn International</li>
              <li className="text-2xl font-avenir-light">Dex Media</li>
              <li className="text-2xl font-avenir-light">Dinova</li>
              <li className="text-2xl font-avenir-light">Dunn & Bradstreet</li>
              <li className="text-2xl font-avenir-light">DuPont</li>
              <li className="text-2xl font-avenir-light">edX</li>
              <li className="text-2xl font-avenir-light">Electrolux</li>
              <li className="text-2xl font-avenir-light">Empire BlueCross BlueShield</li>
              <li className="text-2xl font-avenir-light">ERA</li>
              <li className="text-2xl font-avenir-light">EthicOne</li>
              <li className="text-2xl font-avenir-light">ExecuStay by Marriott</li>
              <li className="text-2xl font-avenir-light">Executive Council</li>
              <li className="text-2xl font-avenir-light">Fairfield Inn by Marriott</li>
              <li className="text-2xl font-avenir-light">Federal Reserve Financial Services</li>
              <li className="text-2xl font-avenir-light">FirstKey Mortgage</li>
              <li className="text-2xl font-avenir-light">Fisher-Price</li>
              <li className="text-2xl font-avenir-light">Frontier Communications</li>
              <li className="text-2xl font-avenir-light">Geir Ness</li>
              <li className="text-2xl font-avenir-light">Green America</li>
              <li className="text-2xl font-avenir-light">GSMA</li>
              <li className="text-2xl font-avenir-light">Harvard University</li>
              <li className="text-2xl font-avenir-light">HarvardX</li>
              <li className="text-2xl font-avenir-light">IBM</li>
              <li className="text-2xl font-avenir-light">IngenioRX</li>
              <li className="text-2xl font-avenir-light">InterContinental Hotels Group</li>
              <li className="text-2xl font-avenir-light">Juan Valdez Café</li>
              <li className="text-2xl font-avenir-light">Juan Valdez Premium Colombian Coffees</li>
              <li className="text-2xl font-avenir-light">Juan Valdez Pods</li>
              <li className="text-2xl font-avenir-light">JW Marriott Hotels & Resorts</li>
              <li className="text-2xl font-avenir-light">KIA</li>
              <li className="text-2xl font-avenir-light">Kodak</li>
              <li className="text-2xl font-avenir-light">KRC Research</li>
              <li className="text-2xl font-avenir-light">Krispy Rice</li>
              <li className="text-2xl font-avenir-light">LexisNexis</li>
              <li className="text-2xl font-avenir-light">Live. Love. Lux.</li>
              <li className="text-2xl font-avenir-light">Lockheed Martin</li>
              <li className="text-2xl font-avenir-light">Marriott Hotels & Resorts</li>
              <li className="text-2xl font-avenir-light">Marriott International</li>
              <li className="text-2xl font-avenir-light">Marriott Rewards</li>
              <li className="text-2xl font-avenir-light">McDonald’s Corporation</li>
              <li className="text-2xl font-avenir-light">Mediaco Publish</li>
              <li className="text-2xl font-avenir-light">Meritage Restaurant</li>
              <li className="text-2xl font-avenir-light">MIT</li>
              <li className="text-2xl font-avenir-light">Mobilicity</li>
              <li className="text-2xl font-avenir-light">Mondee</li>
              <li className="text-2xl font-avenir-light">MSN</li>
              <li className="text-2xl font-avenir-light">NXP</li>
              <li className="text-2xl font-avenir-light">Orbitz Worldwide</li>
              <li className="text-2xl font-avenir-light">Oreo</li>
              <li className="text-2xl font-avenir-light">Ortho-McNeil</li>
              <li className="text-2xl font-avenir-light">Pan-American Sports Network</li>
              <li className="text-2xl font-avenir-light">Philips</li>
              <li className="text-2xl font-avenir-light">Phoenix Marketing International</li>
              <li className="text-2xl font-avenir-light">PricewaterhouseCoopers</li>
              <li className="text-2xl font-avenir-light">Quest Diagnostics</li>
              <li className="text-2xl font-avenir-light">RBC Financial Group</li>
              <li className="text-2xl font-avenir-light">RCI</li>
              <li className="text-2xl font-avenir-light">Rejuvenan Global Health</li>
              <li className="text-2xl font-avenir-light">Renaissance Hotels & Resorts</li>
              <li className="text-2xl font-avenir-light">Residence Inn by Marriott</li>
              <li className="text-2xl font-avenir-light">Revive Spa by Marriott</li>
              <li className="text-2xl font-avenir-light">Royal Bank of Canada</li>
              <li className="text-2xl font-avenir-light">Samsung Corporation</li>
              <li className="text-2xl font-avenir-light">Samsung Electronics</li>
              <li className="text-2xl font-avenir-light">SBE</li>
              <li className="text-2xl font-avenir-light">South African Airways</li>
              <li className="text-2xl font-avenir-light">SpringHill Suites by Marriott</li>
              <li className="text-2xl font-avenir-light">Starwood Hotels & Resorts</li>
              <li className="text-2xl font-avenir-light">State Farm</li>
              <li className="text-2xl font-avenir-light">Stonegrill Restaurant</li>
              <li className="text-2xl font-avenir-light">The Coca-Cola Company</li>
              <li className="text-2xl font-avenir-light">The Gillette Company</li>
              <li className="text-2xl font-avenir-light">The McGraw-Hill Companies</li>
              <li className="text-2xl font-avenir-light">The St. Joe Company</li>
              <li className="text-2xl font-avenir-light">The UPS Store</li>
              <li className="text-2xl font-avenir-light">Townplace Suites by Marriott</li>
              <li className="text-2xl font-avenir-light">Travelport</li>
              <li className="text-2xl font-avenir-light">TripPro</li>
              <li className="text-2xl font-avenir-light">Turvo</li>
              <li className="text-2xl font-avenir-light">Twenty6 Bar</li>
              <li className="text-2xl font-avenir-light">Umami Burger</li>
              <li className="text-2xl font-avenir-light">UPS</li>
              <li className="text-2xl font-avenir-light">UpValley Inn & Hot Springs</li>
            </ul>

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
      </div>
    </div>
  );
};

export default AboutPage;