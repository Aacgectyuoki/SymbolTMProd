import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
// import logo from '../assets/images/symboltm-logo.png';

const AboutPage = () => {
  const [workDropdown, setWorkDropdown] = useState(false); // Dropdown state for 'Work'
  const [aboutDropdown, setAboutDropdown] = useState(false); // Dropdown state for 'About'
  const [isOpen, setIsOpen] = useState(false); // Hamburger menu state
  const navigate = useNavigate(); // Initialize React Router's navigate function

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Navigate to Work Page with anchor
  const handleNavigateToWork = (anchor) => navigate(`/#${anchor}`);

  // Scroll to top of About page
  const handleNavigateToAboutTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header /> {/* Use the Header component here */}

      {/* Content Wrapper with Gray Background */}
      <div className="flex-1 bg-gray-100">

        {/* About Content */}
        <section id="about" className="bg-gray-100 p-6">
        <div>
            {/* About Title - Extra Bold */}
            <h3 className="text-2xl font-avenir-bold mb-6">
              <span className="font-avenir-bold">About:</span>
              <span className="font-avenir-light"> Symbol<span style={{ verticalAlign: 'super', fontSize: '0.6em', position: 'relative', top: '0em' }}>TM </span> is 
                a boutique studio, providing a range of services. 
                We are truly passionate about turning complex issues into simple solutions. 
                Our unique experiences bring broad insights around brand symbols, icons and stories, 
                including rich research to ensure proper trademarks, domains and copyright solutions.</span>
            </h3>
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

    </div>
  );
};

export default AboutPage;