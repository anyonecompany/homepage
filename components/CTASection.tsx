
import React, { useState } from 'react';

interface CTASectionProps {
  lang: 'ko' | 'en';
}

const CTASection: React.FC<CTASectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    club: '',
    name: '',
    email: '',
    product: 'report'
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if we are in development or production
      const isDev = import.meta.env.DEV;
      const apiUrl = isDev 
        ? 'http://localhost:5001/api/request-demo'
        : '/api/request-demo'; // In production, this will be handled by Vercel serverless function
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        const msg = lang === 'ko' ? '데모 요청이 전송되었습니다. 담당자가 곧 연락드리겠습니다.' : 'Demo request sent. Our team will contact you shortly.';
        alert(msg);
        setFormData({ club: '', name: '', email: '', product: 'report' });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMsg = lang === 'ko' ? '전송 중 오류가 발생했습니다. 나중에 다시 시도해주세요.' : 'An error occurred during transmission. Please try again later.';
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const content = {
    ko: {
      h2: <>15억 원의 불확실성,<br /><span className="underline decoration-white/30 underline-offset-8">300만 원으로 검증하세요</span></>,
      p: "지금 바로 구단 맞춤형 데모 리포트를 신청하고, 데이터가 보여주는 확실한 영입 지도를 확인하세요.",
      form: {
        club: "구단명 / 소속",
        name: "담당자명",
        email: "이메일",
        prod: "관심 제품",
        btn: "데모 요청하기",
        notice: "영업일 기준 24시간 이내에 담당자가 연락을 드립니다."
      }
    },
    en: {
      h2: <>$1.2M Uncertainty,<br /><span className="underline decoration-white/30 underline-offset-8">Verify with $2.5K</span></>,
      p: "Apply for a customized demo report today and see the definitive recruitment roadmap powered by data.",
      form: {
        club: "Club Name / Organization",
        name: "Your Name",
        email: "Email Address",
        prod: "Interested Product",
        btn: "Request Demo",
        notice: "Our team will respond within 24 business hours."
      }
    }
  };

  const active = content[lang];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand" />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              {active.h2}
            </h2>
            <p className="text-xl opacity-90 font-medium">
              {active.p}
            </p>
          </div>

          <div className="w-full max-w-md bg-white rounded-[32px] p-8 md:p-10 shadow-2xl shadow-black/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">{active.form.club}</label>
                <input 
                  type="text" 
                  required
                  value={formData.club}
                  onChange={e => setFormData({...formData, club: e.target.value})}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#FF6A37] focus:border-transparent outline-none transition-all"
                  placeholder={lang === 'ko' ? "예: 애니원 유나이티드" : "e.g. Anyone United"}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">{active.form.name}</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#FF6A37] focus:border-transparent outline-none transition-all"
                    placeholder={lang === 'ko' ? "성함" : "Name"}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">{active.form.email}</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#FF6A37] focus:border-transparent outline-none transition-all"
                    placeholder="contact@mail.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">{active.form.prod}</label>
                <select 
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#FF6A37] focus:border-transparent outline-none transition-all appearance-none"
                  value={formData.product}
                  onChange={e => setFormData({...formData, product: e.target.value})}
                >
                  <option value="report">Adapt Score Report</option>
                  <option value="saas">AdaptFit Manager SaaS</option>
                  <option value="both">{lang === 'ko' ? '제품 전체 문의' : 'All Products'}</option>
                </select>
              </div>
              <button 
                type="submit"
                disabled={loading}
                className={`w-full py-4 bg-[#0D0D1A] text-white font-bold rounded-xl text-lg hover:bg-black transition-colors shadow-lg hover:shadow-black/20 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? (lang === 'ko' ? '전송 중...' : 'Sending...') : active.form.btn}
              </button>
              <p className="text-center text-[10px] text-[#9CA3AF]">
                {active.form.notice}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
