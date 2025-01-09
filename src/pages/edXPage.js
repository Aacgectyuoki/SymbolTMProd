import React from 'react';
import Header from '../components/Header';
import edX from '../assets/images/Symboltm_edX__PRIMARY_IMAGE.gif';
import edx01 from '../assets/images/Symboltm_edX_01.jpg';
import edx02 from '../assets/images/Symboltm_edX_02.jpg';
import edx03 from '../assets/images/Symboltm_edX_03.jpg';
import edx04 from '../assets/images/Symboltm_edX_04.jpg';
import edx05 from '../assets/images/Symboltm_edX_05.jpg';
import edx06 from '../assets/images/Symboltm_edX_06.jpg';
import edx07 from '../assets/images/Symboltm_edX_07.jpg';
// import edx08 from '../assets/images/Symboltm_edX_08.jpg';
import edx09 from '../assets/images/Symboltm_edX_09.jpg';
import edx10 from '../assets/images/Symboltm_edX_10.jpg';
import edx11 from '../assets/images/Symboltm_edX_11.jpg';

const edXPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">edX: The Revolution of Education</h1>
        <div className="h-2"></div>
        {/* <p className="text-lg text-gray-600 mb-4">Our Insights. Your Breakthroughs.</p> */}
        <img
          src={edX}
          alt="edX Branding"
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
          edX
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-700">
          Harvard University & MIT
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          Massive Open Online Courses (MOOC) is an online service providing classes for students through the web. 
          Once MOOC was developed, many universities wanted to launched online class services. 
          MIT was one of the first and joined forces with Harvard University to assist students and professors by providing online tools. 
          Harvard University & MIT wanted to launch ASAP, however, there was no exsiting brand. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          We researched MOOC classes and worked through many brand domain names options. 
          It was extremely important to create a brand that was visibly appealing and memorable to multiple linguistic cultures. 
          Harvard University & MIT selected “edX,” for “Education & Exchange.” 
          We developed many logo options, creating a “Less is More” direction to simplify the process for users. 
          This new brand needed to feel like a future platform service. 
          Our solution included a brilliant brand logo and pure brand guidelines. 
          We would showcase the new brand via colors, fonts and textures for all marketing communication vehicles, 
          signage and the digital site. Harvard University & MIT launched worldwide through social media marketing, 
          connecting edX courses quickly with new users.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          Brand Strategy, Name, Logo, Design, Digital, Brand Guidelines, Marketing Communications & Launch 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Result</h2>
          <p className="text-gray-700">
          In two years, edX has grown more than 3 million worldwide users, 60 universities and over 300 courses online.
          </p>
        </div>
{/* Blockquote Needed!!!
        <blockquote className="italic bg-gray-100 p-6 shadow-lg mb-8">
          <p>
            “Now as <span className="font-bold">Plainsight</span>, we have
            established ourselves as a power player delivering production-ready
            vision AI solutions. Industry leaders have recognized{' '}
            <span className="font-bold">Plainsight</span> for solving problems where
            others have failed, and for helping customers see and activate the
            potential of their data through smart, simple, and effective use of
            vision AI.”
          </p>
          <p className="text-right mt-4">- Carlos Anchía, CEO of Plainsight</p>
        </blockquote> */}

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={edx01} alt="edX Branding" className="shadow-lg" />
            <img src={edx02} alt="edX Branding" className="shadow-lg" />
            <img src={edx03} alt="edX Branding" className="shadow-lg" />
            <img src={edx04} alt="edX Branding" className="shadow-lg" />
            <img src={edx05} alt="edX Branding" className="shadow-lg" />
            <img src={edx06} alt="edX Branding" className="shadow-lg" />
            <img src={edx07} alt="edX Branding" className="shadow-lg" />
            {/* <img src={edx08} alt="edX Branding" className="shadow-lg" /> */}
            <img src={edx09} alt="edX Branding" className="shadow-lg" />
            <img src={edx10} alt="edX Branding" className="shadow-lg" />
            <img src={edx11} alt="edX Branding" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.youtube.com/watch?v=7pYwGpKMXuA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.youtube.com/watch?v=7pYwGpKMXuA
          </a>
          <br></br>
          <a
            href="https://news.mit.edu/2012/edx-launched-0502"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            news.mit.edu/2012/edx-launched-0502
          </a>
          <br></br>
          <a
            href="https://news.harvard.edu/gazette/story/2012/05/mit-and-harvard-announce-edx/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            news.harvard.edu/gazette/story/2012/05/mit-and-harvard-announce-edx
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

export default edXPage;