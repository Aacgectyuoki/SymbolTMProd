import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import wellzyperks from '../assets/images/WellzyPerks.png';
import marfa from '../assets/images/The_City_of_Marfa.png';
import enchantmentresort from '../assets/images/Enchantment_Resort.png';
import plainsightai from '../assets/images/PlainsightAI.gif';
import yummy from '../assets/images/Yummy.png';
import ingenio from '../assets/images/Ingenio.png';
import marriott from '../assets/images/Marriott.png';
import ups from '../assets/images/UPS.png';
import krc from '../assets/images/KRC_Research.png';
import climatevictorygardens from '../assets/images/Climate_Victory_Gardens.png';
import arizonabiltmore from '../assets/images/Arizona_Biltmore.png';
import nocuffs from '../assets/images/1800NoCuffs.png';
import bobanddolores from '../assets/images/Bob&Dolores.png';
import upvalley from '../assets/images/UpValley.png';
import fisherprice from '../assets/images/FisherPrice.png';
import thetidesinn from '../assets/images/The_Tides_Inn.png';
import turvo from '../assets/images/Turvo.png';
import miiamo from '../assets/images/Mii_amo.png';
import edx from '../assets/images/edX.png';
import geirness from '../assets/images/Geir_Ness.png';
// import path from 'path';
// import logo from '../assets/images/symboltm-logo.png';

// Projects with categories
const projects = [
  { name: 'PlainsightAI', category: 'Technology', img: plainsightai, path: '/projects/plainsightai' },
  { name: 'WellzyPerks', category: 'Food & Drinks', img: wellzyperks, path: '/projects/wellzyperks' },
  { name: 'Marfa', category: 'Hospitality', img: marfa, path: '/projects/marfa' },
  { name: 'Enchantment Resort', category: 'Hospitality', img: enchantmentresort, path: '/projects/enchantmentresort' },
  { name: 'KRC Research', category: 'Technology', img: krc, path: '/projects/krc' },
  { name: 'Yummy', category: 'Food & Drinks', img: yummy, path: '/projects/yummy'},
  { name: 'UPS', category: 'Industry', img: ups, path: '/projects/ups'},
  { name: 'Ingenio', category: 'Technology', img: ingenio, path: '/projects/ingenio'},
  { name: 'Climate Victory Gardens', category: 'Food & Drinks', img: climatevictorygardens, path: '/projects/climatevictorygardens'},
  { name: 'Arizona Biltmore', category: 'Hospitality', img: arizonabiltmore, path: '/projects/arizonabiltmore'},
  { name: '1800NoCuffs', category: 'Industry', img: nocuffs, path: '/projects/nocuffs'},
  { name: 'Marriott Hotels', category: 'Hospitality', img: marriott, path: '/projects/marriott'},
  { name: 'Bob & Dolores Hope Foundation', category: 'Industry', img: bobanddolores, path: '/projects/bobanddolores'},
  { name: 'UpValley Inn & Hot Springs', category: 'Hospitality', img: upvalley, path: '/projects/upvalley'},
  { name: 'Fisher Price', category: 'Industry', img: fisherprice, path: '/projects/fisherprice'},
  { name: 'The Tides Inn', category: 'Hospitality', img: thetidesinn, path: '/projects/thetidesinn'},
  { name: 'Turvo', category: 'Technology', img: turvo, path: '/projects/turvo'},
  { name: 'Mii Amo', category: 'Hospitality', img: miiamo, path: '/projects/miiamo'},
  { name: 'EdX', category: 'Technology', img: edx, path: '/projects/edx'},
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
      <section id="hello" className="bg-gray-100 p-6">
      <div>
          {/* Hello Title - Extra Bold */}
          <h3 className="text-2xl font-avenir-bold mb-6">
            <span className="font-avenir-bold">Hello:</span>
            <span className="font-avenir-light"> We’re Symbol<span style={{ verticalAlign: 'super', fontSize: '0.6em', position: 'relative', top: '0em' }}>TM</span>,
             a Phoenix based design and branding studio. 
              We work with a range of organizations to define who they are and create compelling communications to help them achieve their ambitions. 
              Underlying all our work is the love of our craft and the belief that design should have a positive impact on the world. 
              View our showreel.</span>
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
            <li className="font-avenir-light">Analysis: <span className="font-avenir-light">Provide thorough research through analysis and develop winning solutions.</span></li>
            <li className="font-avenir-light">Strategy: <span className="font-avenir-light">Orchestrate planning to implementation.</span></li>
            <li className="font-avenir-light">Creativity: <span className="font-avenir-light">Provide logo options, icons, innovative design and ideation.</span></li>
            <li className="font-avenir-light">Management: <span className="font-avenir-light">Develop comprehensive plan from conception to launch including:</span></li>
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