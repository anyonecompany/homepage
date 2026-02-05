
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProductSection from './components/ProductSection';
import HowItWorks from './components/HowItWorks';
import TechnologySection from './components/TechnologySection';
import TeamSection from './components/TeamSection';
import TrustBar from './components/TrustBar';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'ko' | 'en'>('en');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar scrolled={scrolled} lang={lang} setLang={setLang} />
      
      <main>
        <section id="hero">
          <Hero lang={lang} />
        </section>

        <section id="problem">
          <ProblemSection lang={lang} />
        </section>

        <section id="solution">
          <SolutionSection lang={lang} />
        </section>

        <section id="product">
          <ProductSection lang={lang} />
        </section>

        <section id="how-it-works">
          <HowItWorks lang={lang} />
        </section>

        <section id="technology">
          <TechnologySection lang={lang} />
        </section>

        <section id="team">
          <TeamSection lang={lang} />
        </section>

        <TrustBar lang={lang} />

        <section id="contact">
          <CTASection lang={lang} />
        </section>
      </main>

      <Footer lang={lang} />

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 px-6 z-50 pointer-events-none flex flex-col gap-3">
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="pointer-events-auto w-full py-4 bg-gradient-brand text-white font-bold rounded-full shadow-2xl shadow-orange-500/30 transform active:scale-95 transition-transform"
        >
          {lang === 'ko' ? '데모 요청하기' : 'Request Demo'}
        </button>
      </div>
    </div>
  );
};

export default App;
