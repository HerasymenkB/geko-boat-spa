import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Transformations from './components/Transformations';
import Services from './components/Services';
import Craftsmanship from './components/Craftsmanship';
import Process from './components/Process';
import Locations from './components/Locations';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ContactForm from './components/ContactForm';

function AppContent() {
  return (
    <div className="relative min-h-screen">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Transformations />
        <Services />
        <Craftsmanship />
        <Process />
        <Locations />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/es" element={<AppContent />} />
      </Routes>
    </LanguageProvider>
  );
}
