
import React from 'react';
import { Network, Wind, Globe, ShieldCheck } from 'lucide-react';
import RadarChart from './RadarChart';

interface SolutionSectionProps {
  lang: 'ko' | 'en';
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ lang }) => {
  const solutions = lang === 'ko' ? [
    {
      title: "전술 적합성",
      weight: 30,
      desc: "GNN 기반 팀 패스 네트워크에 선수를 가상 투입하여 기대 위협(xT) 변화량을 시뮬레이션합니다.",
      icon: <Network className="w-6 h-6 text-white" />
    },
    {
      title: "환경 적응성",
      weight: 40,
      desc: "출신 리그와 K리그 간 기후·신체 부담 차이가 퍼포먼스에 미치는 영향을 예측합니다.",
      icon: <Wind className="w-6 h-6 text-white" />
    },
    {
      title: "문화 적응성",
      weight: 30,
      desc: "언어 거리, 해외 이적 이력, 동일 국적 커뮤니티 접근성을 정량화하여 분석합니다.",
      icon: <Globe className="w-6 h-6 text-white" />
    }
  ] : [
    {
      title: "Tactical Fit",
      weight: 30,
      desc: "Simulate Expected Threat (xT) by virtually injecting players into GNN-based pass networks.",
      icon: <Network className="w-6 h-6 text-white" />
    },
    {
      title: "Environmental Fit",
      weight: 40,
      desc: "Predict the impact of climate and physical intensity differences between leagues on performance.",
      icon: <Wind className="w-6 h-6 text-white" />
    },
    {
      title: "Cultural Fit",
      weight: 30,
      desc: "Quantify linguistic distance, transfer history, and accessibility to native communities.",
      icon: <Globe className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAF8] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-gradient mb-4 block">SOLUTION</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E]">
            {lang === 'ko' ? '적응을 과학으로 만들다' : 'Turning Adaptation into Science'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {solutions.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:translate-y-[-8px] transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-brand rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                {item.icon}
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-[#1A1A2E]">{item.title}</h3>
                <span className="text-sm font-bold text-[#FF6A37] font-accent bg-orange-50 px-3 py-1 rounded-full">{item.weight}%</span>
              </div>
              <p className="text-[#6B7280] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl shadow-gray-200/50 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <RadarChart lang={lang} />
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 text-[#FE3D67] rounded-full text-sm font-bold mb-6">
              <ShieldCheck size={18} />
              {lang === 'ko' ? 'HSI 분석 시스템' : 'HSI Analysis System'}
            </div>
            <h3 className="text-3xl font-bold text-[#1A1A2E] mb-6 leading-tight">
              {lang === 'ko' ? (
                <>Harmonic Synergy Index:<br /><span className="text-gradient">종합 적응 지수 산출</span></>
              ) : (
                <>Harmonic Synergy Index:<br /><span className="text-gradient">Total Adaptation Scoring</span></>
              )}
            </h3>
            <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
              {lang === 'ko' ? (
                "전술, 환경, 문화의 세 가지 축이 결합되어 HSI 종합 점수가 산출됩니다. 이는 단순한 평점이 아닌, 특정 구단과 특정 선수의 결합 시 발생하는 잠재적 리스크와 시너지를 정밀하게 예측한 수치입니다."
              ) : (
                "Tactical, environmental, and cultural axes are integrated to calculate the HSI score. This is not just a rating, but a precise prediction of synergy and risk potential when a specific player joins a specific club."
              )}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-2xl">
                <div className="text-2xl font-bold text-gradient font-accent mb-1">92.4</div>
                <div className="text-xs font-bold text-[#6B7280]">ESTIMATED SYNERGY</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <div className="text-2xl font-bold text-gradient font-accent mb-1">Low</div>
                <div className="text-xs font-bold text-[#6B7280]">RISK PROBABILITY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
