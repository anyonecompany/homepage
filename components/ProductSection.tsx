
import React from 'react';
import { ArrowRight, FileText, Monitor } from 'lucide-react';

interface ProductSectionProps {
  lang: 'ko' | 'en';
}

const ProductSection: React.FC<ProductSectionProps> = ({ lang }) => {
  const content = {
    ko: {
      label: "PRODUCT",
      title: "영입 전 검증, 영입 후 관리",
      p1: {
        title: "Adapt Score Report",
        sub: "영입 전 리스크를 완벽하게 차단하는 심층 분석 보고서",
        features: [
          "50~70페이지 분량의 심층 분석 리포트",
          "전술·환경·문화 3대 축 통합 적응 분석",
          "건당 300만 원으로 15억 원 손실 방어"
        ],
        badge: "리포트 샘플 보기"
      },
      p2: {
        title: "AdaptFit Manager SaaS",
        sub: "영입 후 선수의 퍼포먼스 연착륙을 돕는 통합 관리 플랫폼",
        features: [
          "실시간 주간 적응 모니터링 대시보드",
          "SNS 감성 분석 기반 멘탈 조기 경보",
          "구단 맞춤형 적응 가이드 자동 생성"
        ],
        badge: "대시보드 미리보기"
      },
      more: "자세히 보기"
    },
    en: {
      label: "PRODUCT",
      title: "Verification Before, Management After",
      p1: {
        title: "Adapt Score Report",
        sub: "Deep analysis reports that block recruitment risks",
        features: [
          "50~70 page in-depth analysis report",
          "Integrated Tactical/Env/Cultural analysis",
          "Prevent $1.2M loss with a $2.5K verification"
        ],
        badge: "View Report Sample"
      },
      p2: {
        title: "AdaptFit Manager SaaS",
        sub: "Integrated platform for performance landing management",
        features: [
          "Real-time weekly adaptation dashboards",
          "Mental early warning via SNS sentiment analysis",
          "Auto-generated custom adaptation guides"
        ],
        badge: "Preview Dashboard"
      },
      more: "View Details"
    }
  };

  const active = content[lang];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-gradient mb-4 block">{active.label}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E]">{active.title}</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl relative">
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-[1px] bg-gradient-brand opacity-30 -translate-x-1/2" />

          {/* Product 1: Report */}
          <div className="flex-1 p-10 md:p-16 bg-white hover:bg-orange-50/30 transition-colors group">
            <div className="mb-8 p-4 bg-orange-100/50 rounded-2xl w-fit">
              <FileText className="w-10 h-10 text-[#FF6A37]" />
            </div>
            <h3 className="text-3xl font-bold text-[#1A1A2E] mb-4">{active.p1.title}</h3>
            <p className="text-lg text-[#6B7280] mb-8">{active.p1.sub}</p>
            
            <ul className="space-y-4 mb-10">
              {active.p1.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1A1A2E] font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-brand" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-8 bg-gray-100 border border-gray-100 group-hover:scale-[1.02] transition-transform duration-500">
               <img src="https://picsum.photos/800/600?random=1" alt="Report Sample" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
               <div className="absolute bottom-4 left-4 text-white text-xs font-bold bg-black/40 px-3 py-1.5 rounded-full backdrop-blur">{active.p1.badge}</div>
            </div>

            <button className="flex items-center gap-2 text-gradient font-bold group">
              {active.more} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Product 2: SaaS */}
          <div className="flex-1 p-10 md:p-16 bg-white hover:bg-pink-50/30 transition-colors group">
            <div className="mb-8 p-4 bg-pink-100/50 rounded-2xl w-fit">
              <Monitor className="w-10 h-10 text-[#FE3D67]" />
            </div>
            <h3 className="text-3xl font-bold text-[#1A1A2E] mb-4">{active.p2.title}</h3>
            <p className="text-lg text-[#6B7280] mb-8">{active.p2.sub}</p>
            
            <ul className="space-y-4 mb-10">
              {active.p2.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1A1A2E] font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-brand" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-8 bg-gray-100 border border-gray-100 group-hover:scale-[1.02] transition-transform duration-500">
               <img src="https://picsum.photos/800/600?random=2" alt="SaaS Sample" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
               <div className="absolute bottom-4 left-4 text-white text-xs font-bold bg-black/40 px-3 py-1.5 rounded-full backdrop-blur">{active.p2.badge}</div>
            </div>

            <button className="flex items-center gap-2 text-gradient font-bold group">
              {active.more} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
