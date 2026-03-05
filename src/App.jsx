import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Programs from './sections/Programs';
import Features from './sections/Features';
import Schedule from './sections/Schedule';
import Testimonials from './sections/Testimonials';
import Coaches from './sections/Coaches';
import Membership from './sections/Membership';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <main>
        <Hero />
        <Programs />
        <Features />
        <Schedule />
        <Testimonials />
        <Coaches />
        <Membership />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
