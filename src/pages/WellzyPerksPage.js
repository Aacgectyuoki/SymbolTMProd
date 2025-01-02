import React from 'react';
import Header from '../components/Header';
import wellzyperksvideo from '../assets/images/WellzyPerks_Video_YouTube_1920x1080pix.mp4';
import wellzyperks01 from '../assets/images/SymbolTM_WellzyPerks_01.jpg';
import wellzyperks02 from '../assets/images/SymbolTM_WellzyPerks_02.jpg';
import wellzyperks03 from '../assets/images/SymbolTM_WellzyPerks_03.jpg';
import wellzyperks04 from '../assets/images/SymbolTM_WellzyPerks_04.jpg';
import wellzyperks05 from '../assets/images/SymbolTM_WellzyPerks_05.jpg';
import wellzyperks06 from '../assets/images/SymbolTM_WellzyPerks_06.jpg';
import wellzyperks07 from '../assets/images/SymbolTM_WellzyPerks_07.jpg';
import wellzyperks08 from '../assets/images/SymbolTM_WellzyPerks_08.jpg';
import wellzyperks09 from '../assets/images/SymbolTM_WellzyPerks_09.jpg';
import wellzyperks10 from '../assets/images/SymbolTM_WellzyPerks_10.jpg';
import wellzyperks11 from '../assets/images/SymbolTM_WellzyPerks_11.jpg';
import wellzyperks12 from '../assets/images/SymbolTM_WellzyPerks_12.jpg';

const WellzyPerksPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Reuse shared Header */}

      {/* Main Hero Section with GIF */}
      <section
        className="mx-auto px-6 mt-8 w-11/12"
        style={{ maxWidth: '1400px' }}
      >
        <h1 className="text-4xl font-bold mb-2">WellzyPerks</h1>
        <div className="h-2"></div>
        <p className="text-gray-600">BRAND: WellzyPerks.com</p>
        <p className="text-gray-600">CLIENT: Jared Koch, CleanPlates Founder & CEO</p>
        <video
          src={wellzyperksvideo}
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
          Jared and his family’s own health challenges inspired him to launch CleanPlates in 2007, the first digital media brand dedicated to personalized nutrition and clean living. From that, he has joined over half a million people eat more whole foods (and less junk!)
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
          <p className="text-gray-700">
          As Jared's family grew, he discovered it was harder to manage a lifestyle that's healthy for him and the planet they'll inherit. 
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Solutions</h2>
          <p className="text-gray-700">
          In 2022, Jared created a vision for an ethical, wellness live style community. We quickly joined the team.

came up with WellzyPerks, your one source for ethical, sustainable brands you can trust — at values you can't find anywhere else.

We focused on a vision “your one source for ethical, sustainable brands you can trust — at values you can't find anywhere else.” It quickly became a new brand positioning, name, logo and brand design system. 

We then moved from the design system to the website layout. Our work influenced website architecture, layout, images, textures and  copy. The completion ended at the start of the website launch. 
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
            <img src={wellzyperks01} alt="WellzyPerks Image 01" className="shadow-lg" />
            <img src={wellzyperks02} alt="WellzyPerks Image 02" className="shadow-lg" />
            <img src={wellzyperks03} alt="WellzyPerks Image 03" className="shadow-lg" />
            <img src={wellzyperks04} alt="WellzyPerks Image 04" className="shadow-lg" />
            <img src={wellzyperks05} alt="WellzyPerks Image 05" className="shadow-lg" />
            <img src={wellzyperks06} alt="WellzyPerks Image 06" className="shadow-lg" />
            <img src={wellzyperks07} alt="WellzyPerks Image 07" className="shadow-lg" />
            <img src={wellzyperks08} alt="WellzyPerks Image 08" className="shadow-lg" />
            <img src={wellzyperks09} alt="WellzyPerks Image 09" className="shadow-lg" />
            <img src={wellzyperks10} alt="WellzyPerks Image 10" className="shadow-lg" />
            <img src={wellzyperks11} alt="WellzyPerks Image 11" className="shadow-lg" />
            <img src={wellzyperks12} alt="WellzyPerks Image 12" className="shadow-lg" />
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Learn More</h2>
          <a
            href="https://WellzyPerks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            WellzyPerks.com
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

export default WellzyPerksPage;

// import React from 'react';
// import Header from '../components/Header'; // Shared Header Component

// const WellzyPerksPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header /> {/* Include the shared header */}

//       {/* Header Section */}
//       <section className="p-6 shadow bg-white">
//         <h1 className="text-4xl font-bold mb-2">WellzyPerks</h1>
//         <p className="text-gray-600">BRAND: WellzyPerks.com</p>
//         <p className="text-gray-600">CLIENT: Jared Koch, CleanPlates Founder & CEO</p>
//       </section>

//       {/* Main Content */}
//       <section className="container mx-auto p-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Image Placeholder */}
//           <div>
//             <img
//               src="https://via.placeholder.com/600x400"
//               alt="WellzyPerks Placeholder"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="space-y-6">
//             <h2 className="text-2xl font-semibold">Background</h2>
//             <p className="text-gray-700">
//               Jared and his family’s health challenges inspired him to launch CleanPlates in 2007,
//               a brand promoting personalized nutrition and clean living. WellzyPerks was born
//               to promote sustainable, ethical wellness choices for healthier living.
//             </p>
//             <p className="text-gray-700">
//               In 2022, Jared envisioned a wellness lifestyle community that helps individuals
//               connect with trusted brands through WellzyPerks.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Deliverables Section */}
//       <section className="bg-gray-100 py-12">
//         <div className="container mx-auto">
//           <h3 className="text-2xl font-bold mb-4">Deliverables</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Brand Positioning, Name, Logo, and Design System</li>
//             <li>Brand Guidelines and Website Architecture</li>
//             <li>Copywriting, Images, and Short Video</li>
//           </ul>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-12">
//         <div className="container mx-auto text-center">
//           <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 name: 'Oprah.com',
//                 text: '“Jared Koch and Jill Silverman Hough use healthy ingredients in ingenious ways.”',
//                 img: 'https://via.placeholder.com/150',
//               },
//               {
//                 name: 'Mark Hyman, MD',
//                 text: '“Jared’s advice makes healthy eating simple and delicious.”',
//                 img: 'https://via.placeholder.com/150',
//               },
//               {
//                 name: 'Deepak Chopra',
//                 text: '“Jared’s advice transforms health and well-being.”',
//                 img: 'https://via.placeholder.com/150',
//               },
//             ].map((testimonial, index) => (
//               <div key={index}>
//                 <img
//                   src={testimonial.img}
//                   alt={testimonial.name}
//                   className="rounded-full mx-auto mb-4"
//                 />
//                 <p className="text-gray-600">{testimonial.name}</p>
//                 <p>{testimonial.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WellzyPerksPage;
