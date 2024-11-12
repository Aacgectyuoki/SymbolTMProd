import React from 'react';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultPage from './components/DefaultPage'; // Adjust path based on folder structure
import AboutPage from './components/AboutPage';
import ScrollToTop from './components/ScrollToTop';

// Import all project pages
import WellzyPerksPage from './pages/WellzyPerksPage';
import MarfaPage from './pages/MarfaPage';
import EnchantmentResortPage from './pages/EnchantmentResortPage';
import PlainsightAIPage from './pages/PlainsightAIPage';
import KRCPage from './pages/KRCPage';
import YummyPage from './pages/YummyPage';
import UPSPage from './pages/UPSPage';
import IngenioPage from './pages/IngenioPage';
import ClimateVictoryGardensPage from './pages/ClimateVictoryGardensPage';
import ArizonaBiltmorePage from './pages/ArizonaBiltmorePage';
import NoCuffsPage from './pages/NoCuffsPage';
import MarriottPage from './pages/MarriottPage';
import BobAndDoloresPage from './pages/Bob&DoloresPage';
import UpValleyPage from './pages/UpValleyPage';
import FisherPricePage from './pages/FisherPricePage';
import TheTidesInnPage from './pages/TheTidesInnPage';
import TurvoPage from './pages/TurvoPage';
import MiiAmoPage from './pages/MiiAmoPage';
import EdXPage from './pages/edXPage';
import GeirNessPage from './pages/GeirNessPage';

// Define project routes in an array
const projectRoutes = [
  { path: '/projects/wellzyperks', element: <WellzyPerksPage /> },
  { path: '/projects/marfa', element: <MarfaPage /> },
  { path: '/projects/enchantmentresort', element: <EnchantmentResortPage /> },
  { path: '/projects/plainsightai', element: <PlainsightAIPage /> },
  { path: '/projects/krc', element: <KRCPage /> },
  { path: '/projects/yummy', element: <YummyPage /> },
  { path: '/projects/ups', element: <UPSPage /> },
  { path: '/projects/ingenio', element: <IngenioPage /> },
  { path: '/projects/climatevictorygardens', element: <ClimateVictoryGardensPage /> },
  { path: '/projects/arizonabiltmore', element: <ArizonaBiltmorePage /> },
  { path: '/projects/nocuffs', element: <NoCuffsPage /> },
  { path: '/projects/marriott', element: <MarriottPage /> },
  { path: '/projects/bobanddolores', element: <BobAndDoloresPage /> },
  { path: '/projects/upvalley', element: <UpValleyPage /> },
  { path: '/projects/fisherprice', element: <FisherPricePage /> },
  { path: '/projects/thetidesinn', element: <TheTidesInnPage /> },
  { path: '/projects/turvo', element: <TurvoPage /> },
  { path: '/projects/miiamo', element: <MiiAmoPage /> },
  { path: '/projects/edx', element: <EdXPage /> },
  { path: '/projects/geirness', element: <GeirNessPage /> },
];

function App() {
  return (
    <Router basename="/SymbolTMProd">
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Map through projectRoutes array to generate project routes */}
        {projectRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
