
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
  lang: 'ko' | 'en';
  setLang: (lang: 'ko' | 'en') => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, lang, setLang }) => {
  const navItems = lang === 'ko' ? [
    { name: '문제', id: 'problem' },
    { name: '솔루션', id: 'solution' },
    { name: '기술', id: 'technology' },
    { name: '팀', id: 'team' },
    { name: '문의', id: 'contact' },
  ] : [
    { name: 'Problem', id: 'problem' },
    { name: 'Solution', id: 'solution' },
    { name: 'Tech', id: 'technology' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/anyone_logo.png" alt="Anyone Company Logo" className="h-10 w-auto object-contain" />
          <img src="/anyone_white_typo.png" alt="Anyone Company Typography" className="h-10 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 mr-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-semibold transition-colors text-white/80 hover:text-white`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Language Toggle */}
          <div className={`flex items-center rounded-full p-1 border border-white/20 bg-white/5`}>
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-gradient-brand text-white' : 'text-white/50 hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('ko')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'ko' ? 'bg-gradient-brand text-white' : 'text-white/50 hover:text-white'}`}
            >
              KR
            </button>
          </div>

          <button 
            onClick={() => scrollTo('contact')}
            className="px-6 py-2.5 bg-gradient-brand text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
          >
            {lang === 'ko' ? '데모 요청' : 'Demo'}
          </button>
        </div>

        {/* Mobile Mini Lang Toggle */}
        <div className="md:hidden flex items-center gap-2">
           <button 
              onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
              className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold"
            >
              {lang === 'ko' ? 'EN' : 'KR'}
            </button>
        </div>
      </div>
      {scrolled && <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-brand opacity-20" />}
    </nav>
  );
};

export default Navbar;
