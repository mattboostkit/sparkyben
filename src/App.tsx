import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import TestimonialsWithWidget from './pages/TestimonialsWithWidget';
import Error404 from './pages/Error404';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import ScrollToTop from './components/ScrollToTop';
import CanonicalUrl from './components/CanonicalUrl';

// Location Pages
import TunbridgeWells from './pages/locations/TunbridgeWells';
import Tonbridge from './pages/locations/Tonbridge';
import Sevenoaks from './pages/locations/Sevenoaks';

// Advice Pages
import Advice from './pages/Advice';
import ElectricalSafetyGuide from './pages/advice/ElectricalSafetyGuide';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CanonicalUrl />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<TestimonialsWithWidget />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Location Pages */}
            <Route path="/locations/tunbridge-wells" element={<TunbridgeWells />} />
            <Route path="/locations/tonbridge" element={<Tonbridge />} />
            <Route path="/locations/sevenoaks" element={<Sevenoaks />} />
            
            {/* Advice Pages */}
            <Route path="/advice" element={<Advice />} />
            <Route path="/advice/electrical-safety-guide" element={<ElectricalSafetyGuide />} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;