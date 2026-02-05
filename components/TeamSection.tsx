
import React from 'react';
import { Award } from 'lucide-react';

interface TeamSectionProps {
  lang: 'ko' | 'en';
}

const TeamSection: React.FC<TeamSectionProps> = ({ lang }) => {
  const members = lang === 'ko' ? [
    {
      name: "이건용",
      role: "CEO",
      narrative: "K3리그 200경기 해설, 구단의 영입 실패를 200번 목격했습니다.",
      tags: ["K3리그 해설위원", "그로스 마케팅 전문가", "스포츠 비즈니스 10년"],
      img: "https://picsum.photos/400/400?random=10"
    },
    {
      name: "당현송",
      role: "CTO",
      narrative: "엘리트 축구선수 출신, 외국인 동료의 좌절을 그라운드에서 직접 경험했습니다.",
      tags: ["엘리트 선수 출신", "AI/데이터 사이언티스트", "데이터 기반 전술 분석"],
      img: "https://picsum.photos/400/400?random=11"
    }
  ] : [
    {
      name: "Gun-yong Lee",
      role: "CEO",
      narrative: "Commentated 200+ K3 matches, witnessed 200 recruitment failures first-hand.",
      tags: ["K3 League Commentator", "Growth Marketer", "10Y in Sports Biz"],
      img: "https://picsum.photos/400/400?random=10"
    },
    {
      name: "Hyun-song Dang",
      role: "CTO",
      narrative: "Former elite pro player, experienced foreign teammates' struggles on the pitch.",
      tags: ["Elite Player Background", "AI Data Scientist", "Tactical Data Specialist"],
      img: "https://picsum.photos/400/400?random=11"
    }
  ];

  const awards = lang === 'ko' ? [
    "AI 융합 아이디어톤 대상 (과학기술정보통신부)",
    "카카오 임팩트 챌린지 대상 수상"
  ] : [
    "AI Convergence Ideathon Grand Prize (MSIT)",
    "Kakao Impact Challenge Grand Prize"
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-gradient mb-4 block">TEAM</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E]">
            {lang === 'ko' ? '현장에서 문제를 발견한 사람들' : 'Finding Solutions on the Field'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {members.map((m, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col items-center md:items-start md:flex-row gap-8 group">
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-[-6px] bg-gradient-brand rounded-full z-0 group-hover:rotate-180 transition-transform duration-1000" />
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span className="text-2xl font-bold text-[#1A1A2E]">{m.name}</span>
                  <span className="text-gradient font-bold">{m.role}</span>
                </div>
                <p className="text-lg font-medium text-[#1A1A2E] mb-6 leading-relaxed">
                  "{m.narrative}"
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {m.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-[#6B7280] text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {awards.map((award, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border-2 border-orange-100 flex items-center gap-4 group hover:bg-gradient-brand transition-all duration-300">
              <div className="p-3 bg-orange-50 rounded-xl group-hover:bg-white/20 transition-colors">
                <Award className="w-6 h-6 text-[#FF6A37] group-hover:text-white" />
              </div>
              <span className="font-bold text-[#1A1A2E] group-hover:text-white transition-colors">{award}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
