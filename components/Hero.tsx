
import React, { useEffect, useRef } from 'react';

interface HeroProps {
  lang: 'ko' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 60;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 106, 55, 0.4)';
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.update(canvas.width, canvas.height);
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = 1 - dist / 150;
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(255, 106, 55, ${opacity * 0.3})`);
            gradient.addColorStop(1, `rgba(254, 61, 103, ${opacity * 0.3})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const content = {
    ko: {
      h1: <>외국인 선수 영입,<br /><span className="text-gradient">감이 아닌 데이터로.</span></>,
      p: <>K리그 외국인 선수 영입 실패율 <span className="text-gradient font-bold font-accent">59.2%</span>.<br className="hidden md:block" />AdaptFit AI가 이 숫자를 바꿉니다.</>,
      cta1: "데모 요청하기",
      cta2: "솔루션 알아보기"
    },
    en: {
      h1: <>Foreign Recruitment,<br /><span className="text-gradient">Data over Intuition.</span></>,
      p: <>K-League recruitment failure rate <span className="text-gradient font-bold font-accent">59.2%</span>.<br className="hidden md:block" />AdaptFit AI changes this number.</>,
      cta1: "Request Demo",
      cta2: "Explore Solution"
    }
  };

  const active = content[lang];

  return (
    <div className="relative h-screen bg-[#0D0D1A] overflow-hidden flex items-center justify-center px-6">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />
      
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-8">
          {active.h1}
        </h1>
        
        <p className="text-lg md:text-2xl text-[#B0B0B0] mb-12 font-medium">
          {active.p}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-10 py-4 bg-gradient-brand text-white font-bold rounded-full text-lg shadow-2xl shadow-orange-500/20 hover:scale-105 transition-all duration-300 animate-glow"
          >
            {active.cta1}
          </button>
          <button 
            onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-10 py-4 bg-transparent text-white font-bold rounded-full text-lg border-2 border-[#FF6A37] hover:bg-[#FF6A37]/10 transition-all duration-300"
          >
            {active.cta2}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
      </div>
    </div>
  );
};

export default Hero;
