
import React from 'react';

interface TrustBarProps {
  lang: 'ko' | 'en';
}

const TrustBar: React.FC<TrustBarProps> = ({ lang }) => {
  const partners = lang === 'ko' ? [
    "한양대학교 ERICA",
    "K리그 구단 PoC 진행 중",
    "GNN 기술 특허 출원",
    "SW/AI 연구개발 과제 선정"
  ] : [
    "Hanyang University ERICA",
    "K-League PoC Ongoing",
    "GNN Technology Patent",
    "SW/AI R&D Projects"
  ];

  return (
    <div className="py-10 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm md:text-base font-bold text-[#1A1A2E] whitespace-nowrap">
                {p}
              </span>
              {i < partners.length - 1 && (
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-brand hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
