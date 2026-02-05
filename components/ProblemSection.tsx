
import React, { useEffect, useState, useRef } from 'react';

interface ProblemSectionProps {
  lang: 'ko' | 'en';
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const metrics = lang === 'ko' ? [
    { value: 59.2, suffix: '%', label: '영입 실패율' },
    { value: 1525, suffix: '억 원', label: '건당 매몰 비용' },
    { value: 150, suffix: '억 원+', label: 'K리그 연간 누적 손실' },
    { value: 0, suffix: '개', label: '현존 적응 분석 솔루션' },
  ] : [
    { value: 59.2, suffix: '%', label: 'Failure Rate' },
    { value: 125, suffix: 'M USD', label: 'Sunk Cost per Case' },
    { value: 15, suffix: 'M USD+', label: 'Annual K-League Loss' },
    { value: 0, suffix: '', label: 'Existing Solutions' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-gradient mb-4 block">
            {lang === 'ko' ? 'PROBLEM' : 'THE PROBLEM'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] leading-tight">
            {lang === 'ko' ? '왜 10명 중 6명이 실패하는가' : 'Why 6 Out of 10 Recruits Fail'}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gradient font-accent mb-2">
                <CountUp end={metric.value} duration={2000} start={isVisible} />
                <span className="text-lg md:text-xl lg:text-2xl ml-1">{metric.suffix}</span>
              </div>
              <p className="text-[#6B7280] font-medium text-xs md:text-base">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-[#1A1A2E] italic leading-relaxed font-light">
            {lang === 'ko' ? (
              <>"기존 데이터 회사는 <span className="font-semibold">'이 선수가 얼마나 잘하는가'</span>만 봅니다.<br className="hidden md:block" />아무도 <span className="font-semibold text-[#FF6A37]"> '이 선수가 우리 팀에서 적응할 수 있는가'</span>를 묻지 않았습니다."</>
            ) : (
              <>"Traditional data firms only look at <span className="font-semibold">'how good a player is.'</span><br className="hidden md:block" />Nobody asked <span className="font-semibold text-[#FF6A37]"> 'if this player can actually adapt to our team.'</span>"</>
            )}
          </p>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mt-8 rounded-full opacity-30" />
        </div>
      </div>
    </section>
  );
};

const CountUp: React.FC<{ end: number, duration: number, start: boolean }> = ({ end, duration, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(progress * end);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return <>{end % 1 === 0 ? Math.floor(count).toLocaleString() : count.toFixed(1)}</>;
};

export default ProblemSection;
