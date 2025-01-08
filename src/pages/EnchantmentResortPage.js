import React from 'react';
import Header from '../components/Header';
import enchantmentresortvideo from '../assets/images/Enchantment_-_Trail_House_15sec_MT2_HD_PRIMARY_IMAGE.mp4';
import enchantmentresort01 from '../assets/images/SymbolTM_Enchantment_01.png';
import enchantmentresort02 from '../assets/images/SymbolTM_Enchantment_02.png';
import enchantmentresort03 from '../assets/images/SymbolTM_Enchantment_03.jpg';

const EnchantmentResortPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">Enchantment Resort</h1>
        <div className="h-2"></div>
        <p className="text-gray-600">BRAND: Enchantment Resort, Sadona, AZ</p>
        <p className="text-gray-600">CLIENT: Enchantment Group</p>
        <video
          src={enchantmentresortvideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full shadow-lg"
        >
          Your browser does not support the video tag.
        </video>
        {/* <img
          src={wellzyperksvideo}
          alt="WellzyPerks Branding"
          className="w-full shadow-lg"
        /> */}
      </section>

      {/* Content Section */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700">
          Enchantment Resort is a luxury collection within Enchantment Group. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Action</h2>
          <p className="text-gray-700">
          For more than 4 years, I have worked together for Enchantment Resort. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
          <p className="text-gray-700">
          IAdvertising, both printed and online, customer communications, online services and online videos.
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
            <img src={enchantmentresort01} alt="EnchantmentResort Image 01" className="shadow-lg" />
            <img src={enchantmentresort02} alt="EnchantmentResort Image 02" className="shadow-lg" />
            <img src={enchantmentresort03} alt="EnchantmentResort Image 03" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://www.enchantmentresort.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.enchantmentresort.com
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

export default EnchantmentResortPage;

// import React from 'react';
// import Header from '../components/Header';

// const EnchantmentResortPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header /> {/* Reuse the shared header */}

//       <section className="container mx-auto p-6">
//         {/* Page Title and Client Information */}
//         <h1 className="text-3xl font-bold mb-4">Enchantment Resort</h1>
//         <p className="text-lg mb-6">BRAND: Enchantment Resort, Sedona, AZ</p>
//         <p className="text-lg mb-6">CLIENT: Enchantment Group</p>

//         {/* Background Section */}
//         <h2 className="text-2xl font-semibold mb-2">Background</h2>
//         <p className="mb-4">
//           Enchantment Resort is a luxury collection within Enchantment Group, set in the stunning red rocks of Sedona, Arizona.
//         </p>

//         {/* Action Section */}
//         <h2 className="text-2xl font-semibold mb-2">Action</h2>
//         <p className="mb-4">
//           For over four years, I have collaborated with Enchantment Resort to enhance its brand identity and marketing materials.
//         </p>

//         {/* Deliverables Section */}
//         <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
//         <ul className="list-disc pl-6 space-y-2 mb-6">
//           <li>Advertising, both printed and online</li>
//           <li>Customer communications</li>
//           <li>Online services</li>
//           <li>Video content</li>
//         </ul>

//         {/* Multimedia Showcase */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-gray-300 h-64 flex items-center justify-center">
//             <img src="https://via.placeholder.com/600x400" alt="Enchantment Resort on mobile and tablet" className="w-full h-full object-cover rounded-lg" />
//           </div>
//           <div className="bg-gray-300 h-64 flex items-center justify-center">
//             <img src="https://via.placeholder.com/600x400" alt="Enchantment Resort scenic video" className="w-full h-full object-cover rounded-lg" />
//           </div>
//           <div className="bg-gray-300 h-64 flex items-center justify-center">
//             <img src="https://via.placeholder.com/600x400" alt="Trail meeting point advertisement" className="w-full h-full object-cover rounded-lg" />
//           </div>
//           <div className="bg-gray-300 h-64 flex items-center justify-center">
//             <img src="https://via.placeholder.com/600x400" alt="Enchantment Resort brochure covers" className="w-full h-full object-cover rounded-lg" />
//           </div>
//         </div>

//         {/* Learn More Section */}
//         <section className="mt-12">
//           <h2 className="text-xl font-bold mb-4">Learn More</h2>
//           <a href="https://www.enchantmentresort.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
//             www.enchantmentresort.com
//           </a>
//           <p>ROLE: Michael Thibodeau - Creative Director and Brand Designer</p>
//         </section>
//       </section>
//     </div>
//   );
// };

// export default EnchantmentResortPage;
