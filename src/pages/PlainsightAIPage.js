import React from 'react';
import Header from '../components/Header';
import plainsight02 from '../assets/images/SymbolTM_Plainsight_02.png';
import plainsight03 from '../assets/images/SymbolTM_Plainsight_03.png';
import plainsight04 from '../assets/images/SymbolTM_Plainsight_04.png';
import plainsight05 from '../assets/images/SymbolTM_Plainsight_05.png';
import plainsight06 from '../assets/images/SymbolTM_Plainsight_06.png';
import plainsight07 from '../assets/images/SymbolTM_Plainsight_07.png';
import plainsight08 from '../assets/images/SymbolTM_Plainsight_08.png';
import plainsight09 from '../assets/images/SymbolTM_Plainsight_09.png';

const PlainsightAIPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      <section className="container mx-auto p-6">
        {/* Title and Client Information */}
        <h1 className="text-3xl font-bold mb-4">Plainsight.AI</h1>
        <p className="text-lg mb-6">A new brand for a future industry</p>


        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <img src={plainsight02} alt="Plainsight Branding" className="rounded-lg shadow-lg" />
          <img src={plainsight03} alt="Logo Variants" className="rounded-lg shadow-lg" />
        </div>

        {/* Background Section */}
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          Sixgill was an AI innovation service to market automotive, agriculture,
          healthcare, supply chain, pharmaceuticals, manufacturing, consumer and
          CPG, construction, transportation, government, and more. The AI services
          can accelerate services in a manner that is complete, accurate, and
          accessible to non-technical business leaders.
        </p>

        {/* Challenge Section */}
        <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
        <p className="mb-4">
          Services are exploding, but the brand name Sixgill was flat. In order to
          empower the brand, the company needed to change the name, identity, and
          experience.
        </p>

        {/* Solutions Section */}
        <h2 className="text-2xl font-semibold mb-2">Solutions</h2>
        <p className="mb-4">
          We quickly developed domain name options, created a new brand positioning,
          and selected the new name. Based on the name, we created an emblem symbol,
          "Semore the Elephant," and a bold, simple name. The design system provided
          new colors and textures, icons, and even the new website layout. It felt
          that the company could now strengthen the brand, change the name, and
          deliver desirable customer experiences.
        </p>

        {/* Quote Section */}
        <blockquote className="italic bg-gray-100 p-4 rounded-md mb-6">
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
        </blockquote>

        {/* Deliverables Section */}
        <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Brand positioning</li>
          <li>Logo</li>
          <li>Design System</li>
          <li>Icons</li>
          <li>Communications</li>
          <li>Website Layout Pages and Launch Support</li>
        </ul>

        {/* Learn More Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <p>
            <a
              href="https://www.plainsight.ai"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.plainsight.ai
            </a>
          </p>
          <p>
            <a
              href="https://plainsight.ai/blog/the-evolution-of-vision-ai-and-the-company-seeing-it-into-the-future"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read More: Blog on Vision AI Evolution
            </a>
          </p>
          <p>ROLE: Michael Thibodeau, Creative Director and Brand Designer</p>
        </section>

        {/* Design System */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Design System</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={plainsight04} alt="Icons" className="rounded-lg shadow-lg" />
            <img src={plainsight05} alt="Images" className="rounded-lg shadow-lg" />
            <img src={plainsight06} alt="Textures" className="rounded-lg shadow-lg" />
            <img src={plainsight07} alt="Color Gradients" className="rounded-lg shadow-lg" />
            <img src={plainsight08} alt="Design System Overview" className="rounded-lg shadow-lg" />
            <img src={plainsight09} alt="Workflow Icons" className="rounded-lg shadow-lg" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default PlainsightAIPage;

// import React from 'react';
// import Header from '../components/Header';
// import plainsight02 from '../assets/images/SymbolTM_Plainsight_02.png';
// import plainsight03 from '../assets/images/SymbolTM_Plainsight_03.png';
// import plainsight04 from '../assets/images/SymbolTM_Plainsight_04.png';
// import plainsight05 from '../assets/images/SymbolTM_Plainsight_05.png';
// import plainsight06 from '../assets/images/SymbolTM_Plainsight_06.png';
// import plainsight07 from '../assets/images/SymbolTM_Plainsight_07.png';
// import plainsight08 from '../assets/images/SymbolTM_Plainsight_08.png';
// import plainsight09 from '../assets/images/SymbolTM_Plainsight_09.png';

// const PlainsightAIPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header /> {/* Reuse shared Header */}

//       <section className="container mx-auto p-6">
//         {/* Title and Client Information */}
//         <h1 className="text-3xl font-bold mb-4">Plainsight.AI</h1>
//         <p className="text-lg mb-6">BRAND: Plainsight</p>
//         <p className="text-lg mb-6">CLIENT: Plainsight</p>

//         {/* Background Section */}
//         <h2 className="text-2xl font-semibold mb-2">Background</h2>
//         <p className="mb-4">
//           Siggill is an AI innovation service to various industries, including automotive, agriculture, healthcare, and more. It accelerates services to make data accessible to non-technical leaders.
//         </p>

//         {/* Action Section */}
//         <h2 className="text-2xl font-semibold mb-2">Action</h2>
//         <p className="mb-4">
//           With growing AI services, Plainsight needed to reorganize their brand to empower customer relationships. In 2021, Plainsight worked with Hudson Cutler to find a clear brand direction.
//         </p>

//         {/* Deliverables Section */}
//         <h2 className="text-2xl font-semibold mb-2">Deliverables</h2>
//         <ul className="list-disc pl-6 space-y-2 mb-6">
//           <li>Brand positioning, logo, and design system</li>
//           <li>Icons and communications</li>
//           <li>Website layout pages and launch support</li>
//         </ul>

//         {/* Learn More Section */}
//         <section className="mb-6">
//           <h2 className="text-xl font-bold mb-2">Learn More</h2>
//           <p><a href="https://www.plainsight.ai" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.plainsight.ai</a></p>
//           <p><a href="https://plainsight.ai/blog" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">https://plainsight.ai/blog-the-evolution</a></p>
//           <p>ROLE: Michael Thibodeau - Creative Director and Hudson Cutler, NYC</p>
//         </section>

//         {/* Image and Branding Elements */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div>
//             <img src={plainsight02} alt="Plainsight Branding" className="w-full h-full object-cover rounded-lg" />
//           </div>
//           <div>
//             <img src={plainsight03} alt="Plainsight Logo Variants" className="w-full h-full object-cover rounded-lg" />
//           </div>
//         </div>

//         {/* Story Section */}
//         <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
//           <h2 className="text-xl font-bold mb-2">Story</h2>
//           <p className="text-gray-700">
//             There is a parable about a group of blind men and an elephant. Each makes an assumption about the animal based upon the section they "see." This is the challenge of big data. Plainsight seeks to help businesses make sense of their data by providing complete AI solutions.
//           </p>
//         </section>

//         {/* Design System Section */}
//         <section className="bg-gray-100 py-12">
//           <div className="container mx-auto">
//             <h3 className="text-2xl font-bold mb-4">Design System</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <img src={plainsight04} alt="Icons" className="w-full h-full object-cover rounded-lg" />
//               <img src={plainsight05} alt="Images" className="w-full h-full object-cover rounded-lg" />
//               <img src={plainsight06} alt="Textures" className="w-full h-full object-cover rounded-lg" />
//               <img src={plainsight07} alt="Color Gradients" className="w-full h-full object-cover rounded-lg" />
//               <img src={plainsight08} alt="Design System Overview" className="w-full h-full object-cover rounded-lg" />
//               <img src={plainsight09} alt="Workflow Icons" className="w-full h-full object-cover rounded-lg" />
//             </div>
//           </div>
//         </section>
//       </section>
//     </div>
//   );
// };

// export default PlainsightAIPage;
