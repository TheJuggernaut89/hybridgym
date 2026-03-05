import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Services from './sections/Services';
import About from './sections/About';
import Facility from './sections/Facility';
import Transformations from './sections/Transformations';
import Trainers from './sections/Trainers';
import Branches from './sections/Branches';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <section id="services">
          <Services />
        </section>
        <About />
        <Facility />
        <Transformations />
        <section id="trainers">
          <Trainers />
        </section>
        <Branches />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
