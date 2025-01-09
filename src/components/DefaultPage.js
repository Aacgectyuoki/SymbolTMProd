import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
// import wellzyperks from '../assets/images/WellzyPerks_Video_YouTube_1920x1080pix.mp4';
import wellzyperks from '../assets/images/WellzyPerks.png';
import marfa from '../assets/images/The_City_of_Marfa.gif';
import biophilia from '../assets/images/Biophilia_Herbals.gif';
import enchantmentresort from '../assets/images/Enchantment_Resort.png';
import plainsightai from '../assets/images/PlainsightAI.gif';
import ingenio from '../assets/images/SymbolTM_IngenioRx_PRIMARY_IMAGE.jpg';
import marriott from '../assets/images/Symboltm_Marriott_PRIMARY_IMAGE.jpg';
import ups from '../assets/images/Symboltm_UPS_PRIMARY_IMAGE.jpg';
import krc from '../assets/images/Symboltm_KRC_PRIMARY_IMAGE.jpg';
import umami from '../assets/images/Umami_Image_PRIMARY_IMAGE.jpg';
import climatevictorygardens from '../assets/images/SymbolTM_CVG_PRIMARY_IMAGE.jpg';
import gsma from '../assets/images/Symboltm_GSMA_PRIMARY_IMAGE.jpg';
import arizonabiltmore from '../assets/images/SymbolTM_AB_Image_PRIMARY_IMAGE.jpg';
import theglenrothes from '../assets/images/SymbolTM_TheGlenrothes_Truffles_PRIMARY_IMAGE.png';
import nocuffs from '../assets/images/SymbolTM_NoCuffs_Image_PRIMARY_IMAGE.jpg';
import bobanddolores from '../assets/images/Symboltm_BobHope_PRIMARY_IMAGE.jpg';
import upvalley from '../assets/images/SymbolTM_UpValleyInn_PRIMARY_IMAGE.jpg';
import fisherprice from '../assets/images/Symboltm_Fisher_Price_PRIMARY_IMAGE.jpg';
import thetidesinn from '../assets/images/SymbolTM_TheTidesInn_PRIMARY_IMAGE.png';
import thecove from '../assets/images/SymbolTM_TheCove_PRIMARY_IMAGE.png';
import turvo from '../assets/images/SymbolTM_Turvo_PRIMARY_IMAGE.jpg';
import miiamo from '../assets/images/SymbolTM_MiiAmo_PRIMARY_IMAGE.png';
import edx from '../assets/images/Symboltm_edX__PRIMARY_IMAGE.gif';
import harvardx from '../assets/images/Symboltm_HarvardX_PRIMARY_IMAGE.jpg';
import geirness from '../assets/images/Symboltm_Geirness_PRIMARY_IMAGE.jpg';

// import wellzyperksvideo from '../assets/images/WellzyPerks_Video_YouTube_1920x1080pix.mp4';
// import path from 'path';
// import logo from '../assets/images/symboltm-logo.png';

// Projects with categories
const projects = [
  { name: 'PlainsightAI', category: 'Technology', img: plainsightai, path: '/projects/plainsightai' },
  { name: 'Biophilia', category: 'Hospitality', img: biophilia, path: '/projects/biophilia' },
  { name: 'WellzyPerks', category: 'Food & Drinks', img: wellzyperks, path: '/projects/wellzyperks' },
  { name: 'Marfa', category: 'Hospitality', img: marfa, path: '/projects/marfa' },
  { name: 'Enchantment Resort', category: 'Hospitality', img: enchantmentresort, path: '/projects/enchantmentresort' },
  { name: 'KRC Research', category: 'Technology', img: krc, path: '/projects/krc' },
  { name: 'Umami', category: 'Food & Drinks', img: umami, path: '/projects/umami'},
  { name: 'UPS', category: 'Industry', img: ups, path: '/projects/ups'},
  { name: 'Ingenio', category: 'Technology', img: ingenio, path: '/projects/ingenio'},
  { name: 'Climate Victory Gardens', category: 'Food & Drinks', img: climatevictorygardens, path: '/projects/climatevictorygardens'},
  { name: 'GSMA', category: 'Technology', img: gsma, path: '/projects/gsma'},
  { name: 'Arizona Biltmore', category: 'Hospitality', img: arizonabiltmore, path: '/projects/arizonabiltmore'},
  { name: 'The Glenrothes', category: 'Food & Drinks', img: theglenrothes, path: '/projects/theglenrothes'},
  { name: '1800NoCuffs', category: 'Industry', img: nocuffs, path: '/projects/nocuffs'},
  { name: 'Marriott Hotels', category: 'Hospitality', img: marriott, path: '/projects/marriott'},
  { name: 'Bob & Dolores Hope Foundation', category: 'Industry', img: bobanddolores, path: '/projects/bobanddolores'},
  { name: 'UpValley Inn & Hot Springs', category: 'Hospitality', img: upvalley, path: '/projects/upvalley'},
  { name: 'Fisher Price', category: 'Industry', img: fisherprice, path: '/projects/fisherprice'},
  { name: 'The Tides Inn', category: 'Hospitality', img: thetidesinn, path: '/projects/thetidesinn'},
  { name: 'The Cove', category: 'Hospitality', img: thecove, path: '/projects/thecove'},
  { name: 'Turvo', category: 'Technology', img: turvo, path: '/projects/turvo'},
  { name: 'Mii Amo', category: 'Hospitality', img: miiamo, path: '/projects/miiamo'},
  { name: 'EdX', category: 'Technology', img: edx, path: '/projects/edx'},
  { name: 'HarvardX', category: 'Technology', img: harvardx, path: '/projects/harvardx'},
  { name: 'Geir Ness', category: 'Industry', img: geirness, path: '/projects/geirness'},
];

// Category options
const categories = ['All', 'Hospitality', 'Technology', 'Food & Drinks', 'Industry'];

const DefaultPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default is 'All'
  const [workDropdown, setWorkDropdown] = useState(false); // Dropdown state for 'Work'
  const [aboutDropdown, setAboutDropdown] = useState(false); // Dropdown state for 'About'
  const navigate = useNavigate(); // Initialize React Router's navigate function


  
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  const handleNavigateToAbout = (anchor) => navigate(`/about#${anchor}`);
  const handleNavigateToWorkTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // Navigate to the project's dedicated page
    const handleProjectClick = (path) => {
      navigate(path);
    };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header /> {/* Use the Header component here */}

      {/* Hello Content */}
      <section id="top-of-page" className="bg-gray-100 p-6">
      <div>
          {/* Hello Title - Extra Bold */}
          <h3 className="text-2xl font-avenir-bold mb-6">
            <span className="font-avenir-bold">Hello:</span>
            <span className="font-avenir-light"> Symbol<span style={{ verticalAlign: 'super', fontSize: '0.6em', position: 'relative', top: '0em' }}>TM </span>
              is a branding agency designed to solve critical business solutions. 
             We grow value for clients through a considered approach to Brand Discovery, 
             Brand Strategy, Brand Identity and Brand Management. 
             With hundreds of project consultants (such as the new UPS logo, the MSN Butterfly, reorganized with Marriott International), 
             we guide brand launches, strategic rebranding, naming, logos, identity systems and repositioning efforts across many diverse industries. 
             Symbol<span style={{ verticalAlign: 'super', fontSize: '0.6em', position: 'relative', top: '0em' }}>TM </span> is based in Phoenix and serves clients throughout the world. Are you managing a brand? Creating a start-up? Update your brand? 
             <span className="font-avenir-bold"> Let’s talk!</span></span>
          </h3>
        </div>
      </section>

      {/* Category Selection */}
      <section className="bg-gray-100 p-6">
        <div>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="px-4 py-2 rounded border border-gray-300"
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </section>
{/* 
      <section className="container mx-auto p-6">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="px-4 py-2 rounded border border-gray-300"
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </section> */}

      {/* Work Showcase */}
      <section id="work" className="bg-gray-100 p-6">
        <h2 className="text-2xl font-avenir-bold mb-6">Our Work</h2>
        <div
          className="grid justify-center"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, 450px)', // Fixed width of 300px for each image
            gap: '0px', // No gap between images
            justifyItems: 'center',
          }}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="shadow-lg overflow-hidden"
              style={{ width: '450px', height: '330px', cursor: 'pointer' }} // Consistent width and height
              onClick={() => handleProjectClick(project.path)} // Navigate on click
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
    <section id="services" className="bg-gray-100 p-6">
      <div>
          {/* Services Title - Extra Bold */}
          <h3 className="text-2xl mb-6">
            <span className="font-avenir-bold">Services:</span>
            <span className="font-avenir-light"> Our approach is flexible and scalable and designed
            to add the maximum value – whatever our client’s timescale or budget. 
            Ideally, we like to be involved early in the lifecycle of a project, 
            so we can invest time to understand our clients’ challenges in depth and provide full solutions. 
            But our modular approach makes it easy for clients to use us for individual services whenever they wish.</span>
          </h3>


          {/* List of Services */}
          <ul className="list-decimal pl-6 space-y-4 text-2xl mb-6">
            <li className="font-avenir-bold">Brand Discovery: <span className="font-avenir-light">What is at the core of the brand? What is it about a brand that resonates with its audience? Why is another brand underperforming? Discovery answers the brand’s core business questions. To effectively comprehend the heart of the brand, discovery reveals brand strengths and weaknesses and what customers value most in your offering and why. The intent is to gain meaningful insights within the competitive landscape, to better understand the consumers who make up the market, and what motivates category purchase.</span>
              </li>
            <li className="font-avenir-bold">Brand Strategy: <span className="font-avenir-light">Strategy aligns every aspect of the brand offering within a single actionable plan to define objectives and achieve goals. To effectively shape perception and articulate the brand’s position, the strategic plan navigates existing and potential competitive threats; maximizing strengths and opportunities. When successful, strategy connects the brand experience with the emotional needs of an engaged and loyal customer. This connection establishes brand preference, and in turn, builds brand equity.</span>
              </li>
            <li className="font-avenir-bold">Brand Identity: <span className="font-avenir-light">Brand identity is the outward representation of the brand as it is recognized in the market — specifically, the distinguishing verbal and visual elements and messages that appeal to the customer. From the brand name, to the logo, typography, tagline and tone, brand identity synthesizes the discernible components of the brand offering to present a recognizable image in the mind of the consumer. It presents the brand’s singular promise. Brand identity reinforces your position relative to the competition and articulates the intended brand message. And further, it defines the brand reputation for both: internal brand stewards and external target audiences.</span>
              </li>
            <li className="font-avenir-bold">Brand Management: <span className="font-avenir-light">Brand Management is the continued analysis and execution of all techniques utilized to maximize the value of the brand over time. Guided by the strategic objectives of the organization and informed by the perceived quality of the customer journey, the Brand Management process measures and adjusts strategies, resources and metrics. Brand Management entails sustained refinement as the brand and its customers evolve, as brand influence grows, and as competition enters (and exits) the market. And as required, Brand Management revisits all elements representing or supporting the brand experience in the service of increasing brand awareness and enhancing brand loyalty.</span>
              </li>
          </ul>
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
  );
};

export default DefaultPage;