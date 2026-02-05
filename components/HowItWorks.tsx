
import React from 'react';

interface HowItWorksProps {
  lang: 'ko' | 'en';
}

const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
  const steps = lang === 'ko' ? [
    "구단이 후보 선수 검토",
    "AdaptFit AI에 분석 의뢰",
    "3대 축 통합 분석 수행",
    "HSI 점수 및 리포트 전달",
    "데이터 기반 영입 결정"
  ] : [
    "Club reviews candidates",
    "Request AdaptFit AI analysis",
    "Integrated 3-axis analysis",
    "HSI scoring & report delivery",
    "Data-driven recruitment"
  ];

  return (
    <section className="py-24 bg-[#0D0D1A] px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="url(#grad2)" strokeWidth="0.5" />
        </svg>
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#FF6A37", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#FE3D67", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-bold tracking-[0.2em] text-gradient mb-4 block">
            {lang === 'ko' ? 'HOW IT WORKS' : 'PROCESS'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {lang === 'ko' ? '이렇게 작동합니다' : 'How It Works'}
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:flex justify-between items-start relative mb-12">
          <div className="absolute top-7 left-0 right-0 h-[2px] bg-gradient-brand opacity-30" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center relative group">
              <div className="w-14 h-14 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg group-hover:scale-110 transition-transform duration-300 font-accent">
                {idx + 1}
              </div>
              <p className="mt-8 text-white font-bold text-center px-4 leading-relaxed group-hover:text-[#FF6A37] transition-colors">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative font-accent">
                {idx + 1}
                {idx < steps.length - 1 && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gradient-brand opacity-30" />
                )}
              </div>
              <div className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl">
                <p className="text-white font-bold text-sm">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
