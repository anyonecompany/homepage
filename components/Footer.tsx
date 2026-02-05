
import React from 'react';

interface FooterProps {
  lang: 'ko' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-[#1A1A2E] text-[#6B7280] py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-brand opacity-30" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/anyone_logo.png" alt="Anyone Company Logo" className="h-10 w-auto object-contain" />
              <img src="/anyone_white_typo.png" alt="Anyone Company Typography" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm font-medium mb-8 max-w-sm leading-relaxed">
              {lang === 'ko' ? (
                <>스포츠의 불확실성을 데이터로 해결합니다.<br />애니원컴퍼니는 K리그 구단의 영입 성공과 선수의 성장을 위해 과학적인 분석 솔루션을 제공합니다.</>
              ) : (
                <>Solving uncertainty in sports with data.<br />Anyone Company provides scientific analysis solutions for recruitment success and player growth.</>
              )}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-brand hover:text-white transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-brand hover:text-white transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">{lang === 'ko' ? '메뉴' : 'Menu'}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#problem" className="hover:text-white transition-colors">{lang === 'ko' ? '문제 정의' : 'Problem'}</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">{lang === 'ko' ? '솔루션' : 'Solution'}</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">{lang === 'ko' ? '핵심 기술' : 'Tech'}</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">{lang === 'ko' ? '팀 소개' : 'Team'}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">{lang === 'ko' ? '문의' : 'Contact'}</h4>
            <ul className="space-y-4 text-sm">
              <li>contact@anyonecompany.kr</li>
              <li>+82 10-4920-8727 | +82 10-3831-7704</li>
              <li>{lang === 'ko' ? '경기도 안산시 상록구 한양대학로 55' : '55 Hanyangdaehak-ro, Sangnok-gu, Ansan, Gyeonggi-do'}</li>
              <li>{lang === 'ko' ? '제5공학관 knowledge Bunker B1 SW창업실4' : 'Engineering Building 5, Knowledge Bunker B1, SW Startup Lab 4'}</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px]">
          <p>© 2024 Anyone Company Inc. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}</a>
            <a href="#" className="hover:text-white transition-colors">{lang === 'ko' ? '이용약관' : 'Terms of Service'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
