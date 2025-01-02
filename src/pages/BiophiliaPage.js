import React from 'react';
import Header from '../components/Header';
import biophilia from '../assets/images/Biophilia_Herbals.gif';
import biophilia02 from '../assets/images/SymbolTM_Biophilia_02.png';
import biophilia03 from '../assets/images/SymbolTM_Biophilia_03.png';
import biophilia04 from '../assets/images/SymbolTM_Biophilia_04.png';
import biophilia05 from '../assets/images/SymbolTM_Biophilia_05.png';
import biophilia06 from '../assets/images/SymbolTM_Biophilia_06.png';
import biophilia07 from '../assets/images/SymbolTM_Biophilia_07.png';
import biophilia08 from '../assets/images/SymbolTM_Biophilia_08.png';
import biophilia09 from '../assets/images/SymbolTM_Biophilia_09.png';
import biophilia10 from '../assets/images/SymbolTM_Biophilia_10.png';
import biophilia11 from '../assets/images/SymbolTM_Biophilia_11.png';

const BiophiliaPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Biophilia Herbals</h1>
        <div className="h-2"></div>
        <p className="text-lg text-gray-600 mb-4">CLIENT: Jude Luth, Founder & CEO</p>
        <img
          src={biophilia}
          alt="Biophilia Branding"
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
          Jude has developed herbal products since 2010. As the products have grown, Jude has decided to greate a new online store. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          In 2020, I joined with Biophilia Herbals. It become clear to grow as an online store, as well as other local stores, groceries (Whole Food, etc.) and online stores (Amazon, etc.).

We went through through from soup to nuts. I have reorganized the brand positioning, logo, sub-logo products, packages, legal product information and website. 

DELIVERABLES: Brand Positioning, Logo, Sub-Logos Products, Design System, Brand Guidelines, Print Production Files, Print Production Packages, Website Architecture, Website Layout Pages, Copy and Images.


          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Solutions</h2>
          <p className="text-gray-700">
          Collaborating with the local community and analyzing data, we developed a range of logo and design options. 
          The new brand direction emphasized minimalism, industrial influences, and a simplistic community-centric design. 
          The solution focused on black, white, gray, and silver tones, with a handmade industrial font family.
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
            <img src={biophilia02} alt="Biophilia Design 1" className="shadow-lg" />
            <img src={biophilia03} alt="Biophilia Design 2" className="shadow-lg" />
            <img src={biophilia06} alt="Biophilia Design 5" className="shadow-lg" />
            <img src={biophilia04} alt="Biophilia Design 3" className="shadow-lg" />
            <img src={biophilia09} alt="Biophilia Design 8" className="shadow-lg" />
            <img src={biophilia05} alt="Biophilia Design 4" className="shadow-lg" />
            <img src={biophilia10} alt="Biophilia Design 9" className="shadow-lg" />
            <img src={biophilia07} alt="Biophilia Design 6" className="shadow-lg" />
            
            
            
            <img src={biophilia11} alt="Biophilia Design 10" className="rounded-lg shadow-lg" />
            <img src={biophilia08} alt="Biophilia Design 7" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="www.BiophiliaHerbals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.BiophiliaHerbals.com
          </a><br></br>
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

export default BiophiliaPage;


// import React from 'react';
// import Header from '../components/Header';
// // import logo from '../assets/images/biophilia-logo.png'; // Replace with your logo path
// // import heroImage from '../assets/images/biophilia-hero.jpg';
// import biophilia02 from '../assets/images/SymbolTM_Biophilia_02.png';
// import biophilia03 from '../assets/images/SymbolTM_Biophilia_03.png';
// import biophilia04 from '../assets/images/SymbolTM_Biophilia_04.png';
// import biophilia05 from '../assets/images/SymbolTM_Biophilia_05.png';
// import biophilia06 from '../assets/images/SymbolTM_Biophilia_06.png';
// import biophilia07 from '../assets/images/SymbolTM_Biophilia_07.png';
// import biophilia08 from '../assets/images/SymbolTM_Biophilia_08.png';
// import biophilia09 from '../assets/images/SymbolTM_Biophilia_09.png';
// import biophilia10 from '../assets/images/SymbolTM_Biophilia_10.png';
// import biophilia11 from '../assets/images/SymbolTM_Biophilia_11.png';

// const BiophiliaPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header /> {/* Shared header component */}
      
//       <section className="container mx-auto p-6">
   
//       {/* Header */}
//       {/* <header className="bg-white shadow-md sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
//           <img src={logo} alt="Biophilia Herbals Logo" className="h-12 cursor-pointer" />
//           <nav className="hidden md:flex space-x-6 text-gray-600">
//             <a href="#" className="hover:text-gray-900">Home</a>
//             <a href="#about" className="hover:text-gray-900">About</a>
//             <a href="#story" className="hover:text-gray-900">Our Story</a>
//             <a href="#designs" className="hover:text-gray-900">Designs</a>
//             <a href="#contact" className="hover:text-gray-900">Contact</a>
//           </nav>
//         </div>
//       </header> */}

//       {/* Hero Section */}
//       {/* <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${heroImage})` }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
//           <h1 className="text-4xl font-bold">Biophilia Herbals</h1>
//           <p className="mt-4 text-lg">Celebrating the art of handcrafted herbal tea blends.</p>
//         </div>
//       </section> */}

//       {/* About Section */}
//       <section id="about" className="max-w-7xl mx-auto py-12 px-6">
//         <h2 className="text-3xl font-bold mb-6 text-center">About Biophilia Herbals</h2>
//         <p className="text-lg leading-relaxed">
//           Biophilia Herbals, founded by Jude Luth, offers a curated selection of
//           herbal products crafted with passion since 2010. From soothing teas
//           to invigorating blends, our creations bring nature’s healing
//           properties to your everyday moments.
//         </p>
//         <div className="mt-6 flex justify-center">
//           <img src={biophilia02} alt="Biophilia Showcase" className="rounded-lg shadow-lg" />
//         </div>
//       </section>

//       {/* Story Section */}
//       <section id="story" className="bg-gray-100 py-12">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
//           <p className="text-lg leading-relaxed mb-6">
//             In 2020, Biophilia joined the mission to grow as an online presence,
//             connecting with customers through a reimagined brand identity. From
//             the logo to the website design, every element reflects our core
//             philosophy: embracing nature’s essence.
//           </p>
//         </div>
//       </section>

//       {/* Design Showcase Section */}
//       <section id="designs" className="max-w-7xl mx-auto py-12 px-6">
//         <h2 className="text-3xl font-bold mb-6 text-center">Design Showcase</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {/* <img src={biophilia02} alt="Biophilia Design 1" className="rounded-lg shadow-lg" /> */}
//           <img src={biophilia03} alt="Biophilia Design 1" className="rounded-lg shadow-lg" />
//           <img src={biophilia04} alt="Biophilia Design 2" className="rounded-lg shadow-lg" />
//           <img src={biophilia05} alt="Biophilia Design 3" className="rounded-lg shadow-lg" />
//           <img src={biophilia06} alt="Biophilia Design 4" className="rounded-lg shadow-lg" />
//           <img src={biophilia07} alt="Biophilia Design 5" className="rounded-lg shadow-lg" />
//           <img src={biophilia08} alt="Biophilia Design 6" className="rounded-lg shadow-lg" />
//           <img src={biophilia09} alt="Biophilia Design 7" className="rounded-lg shadow-lg" />
//           <img src={biophilia10} alt="Biophilia Design 8" className="rounded-lg shadow-lg" />
//           <img src={biophilia11} alt="Biophilia Design 9" className="rounded-lg shadow-lg" />
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-8">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <p className="text-sm">&copy; 2024 Biophilia Herbals. All rights reserved.</p>
//           <nav className="flex justify-center space-x-4 mt-4">
//             <a href="#about" className="text-gray-400 hover:text-white">About</a>
//             <a href="#story" className="text-gray-400 hover:text-white">Our Story</a>
//             <a href="#designs" className="text-gray-400 hover:text-white">Designs</a>
//             <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
//           </nav>
//         </div>
//       </footer>
//       </section>
//     </div>
//   );
// };

// export default BiophiliaPage;