import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Transformations from '../components/Transformations';
import Services from '../components/Services';
import Craftsmanship from '../components/Craftsmanship';
import Process from '../components/Process';
import Locations from '../components/Locations';
import FinalCTA from '../components/FinalCTA';
import ContactForm from '../components/ContactForm';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Transformations />
      <Services />
      <Craftsmanship />
      <Process />
      <Locations />
      <FinalCTA />
      <ContactForm />
    </>
  );
}
