
import React from 'react';

interface TechnologySectionProps {
  lang: 'ko' | 'en';
}

const TechnologySection: React.FC<TechnologySectionProps> = ({ lang }) => {
  const layers = lang === 'ko' ? [
    {
      title: "Tactical Engine",
      subtitle: "GNN/GAT 기반 팀 네트워크 시뮬레이션",
      desc: "기존 데이터에서 추출한 패스 맵을 기반으로, 선수가 투입되었을 때 팀 전체 유기성이 어떻게 변하는지 수조 번의 시뮬레이션을 수행합니다.",
      tag: "Graph Neural Networks"
    },
    {
      title: "Temporal Prediction",
      subtitle: "Axial Transformer 기반 퍼포먼스 시계열 예측",
      desc: "시즌별 기후, 부상 이력, 출전 시간 등의 시계열 데이터를 다차원으로 분석하여 향후 24개월의 퍼포먼스 추이를 예측합니다.",
      tag: "Time-Series AI"
    },
    {
      title: "Explainability",
      subtitle: "SHAP/LIME 기반 의사결정 근거 투명 공개",
      desc: "AI가 내린 판단의 근거를 구단 담당자가 이해할 수 있는 언어로 설명합니다. 왜 적응 점수가 낮은지 구체적인 변수를 제시합니다.",
      tag: "XAI (Explainable AI)"
    }
  ] : [
    {
      title: "Tactical Engine",
      subtitle: "GNN/GAT-based Network Simulation",
      desc: "Perform trillions of simulations to predict changes in team cohesion after player injection using legacy pass maps.",
      tag: "Graph Neural Networks"
    },
    {
      title: "Temporal Prediction",
      subtitle: "Axial Transformer-based Time-Series",
      desc: "Analyze seasonal climate, injury history, and play-time multi-dimensionally to predict performance trends for 24 months.",
      tag: "Time-Series AI"
    },
    {
      title: "Explainability",
      subtitle: "SHAP/LIME-based Decision Transparency",
      desc: "Translate AI decision logic into human-readable language for club officials, highlighting specific factors behind adaptation scores.",
      tag: "XAI (Explainable AI)"
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <span className="text-sm font-bold tracking-[0.2em] text-gradient mb-4 block">TECHNOLOGY</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E]">
              {lang === 'ko' ? '3-Layer AI 엔진' : '3-Layer AI Engine'}
            </h2>
          </div>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-orange-50 text-[#FF6A37] rounded-full text-xs font-bold border border-orange-100">
              {lang === 'ko' ? '특허 출원 중' : 'Patent Pending'}
            </span>
            <span className="px-4 py-2 bg-pink-50 text-[#FE3D67] rounded-full text-xs font-bold border border-pink-100">
              {lang === 'ko' ? '예측 정확도 75%+' : '75%+ Accuracy'}
            </span>
          </div>
        </div>

        <div className="space-y-12">
          {layers.map((layer, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 bg-[#F5F5F7] rounded-[32px] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100"
            >
              <div className="flex-shrink-0 text-8xl font-black text-gradient opacity-10 font-accent select-none group-hover:opacity-30 transition-opacity">
                0{idx + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                   <h3 className="text-3xl font-bold text-[#1A1A2E]">{layer.title}</h3>
                   <span className="text-[10px] uppercase tracking-widest bg-white px-2 py-1 rounded text-[#6B7280] font-bold">{layer.tag}</span>
                </div>
                <p className="text-lg font-bold text-[#FF6A37] mb-4">{layer.subtitle}</p>
                <p className="text-[#6B7280] text-lg leading-relaxed max-w-2xl">
                  {layer.desc}
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-video rounded-2xl bg-[#0D0D1A] overflow-hidden relative shadow-xl">
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-full h-full flex items-center justify-center p-4">
                      {idx === 0 && <svg className="w-full h-full text-[#FF6A37]/50" viewBox="0 0 100 60"><path d="M10,30 L30,10 L30,50 L50,30 L70,10 L70,50 L90,30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      {idx === 1 && <svg className="w-full h-full text-[#FE3D67]/50" viewBox="0 0 100 60"><path d="M10,50 Q25,10 40,30 T70,50 T90,10" fill="none" stroke="currentColor" strokeWidth="2"/></svg>}
                      {idx === 2 && <svg className="w-full h-full text-white/50" viewBox="0 0 100 60"><rect x="10" y="10" width="80" height="10" rx="2"/><rect x="10" y="25" width="50" height="10" rx="2"/><rect x="10" y="40" width="65" height="10" rx="2"/></svg>}
                   </div>
                 </div>
                 <div className="absolute top-2 right-2 flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
