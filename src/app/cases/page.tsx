'use client';

import type { Metadata } from "next";
import Link from 'next/link';
import { useEffect, useState } from 'react';

// export const metadata: Metadata = {
//   title: "導入事例 | Smart Fluent 合同会社",
//   description: "DXとAI技術による業務効率化・自動化の成功事例をご紹介。製造業、小売業、サービス業など様々な業界での実績をご覧ください。",
//   keywords: "導入事例, 成功事例, AI活用事例, DX事例, 業務効率化事例, システム開発事例",
// };

const caseStudies = [
  {
    id: 1,
    company: "製造業A社",
    industry: "製造業",
    title: "AI画像検査システムで不良品検出率を99.8%に向上",
    challenge: "目視検査による品質のばらつきと検査工数の増大",
    solution: "独自開発のAI画像認識システムを導入し、リアルタイムで製品の不良を検出",
    results: ["不良品検出率: 85% → 99.8%", "検査時間: 60% 削減", "年間コスト: 2,000万円削減"],
    technologies: ["Computer Vision", "Deep Learning", "Edge AI"],
    gradient: "from-brand-orange to-brand-orange-light",
  },
  {
    id: 2,
    company: "小売業B社",
    industry: "小売業",
    title: "AI需要予測で在庫回転率を2.5倍に改善",
    challenge: "過剰在庫と欠品による機会損失の同時発生",
    solution: "購買データと外部データを組み合わせたAI需要予測モデルを構築",
    results: ["在庫回転率: 2.5倍向上", "欠品率: 78% 削減", "廃棄ロス: 65% 削減"],
    technologies: ["Machine Learning", "データ分析", "クラウド"],
    gradient: "from-brand-orange-dark to-brand-orange",
  },
  {
    id: 3,
    company: "サービス業C社",
    industry: "サービス業",
    title: "AIチャットボットで問い合わせ対応を自動化",
    challenge: "増加する問い合わせへの対応遅延とオペレーターの負担増",
    solution: "自然言語処理を活用したAIチャットボットを開発・導入",
    results: ["問い合わせ対応時間: 80% 削減", "顧客満足度: 15% 向上", "オペレーター工数: 60% 削減"],
    technologies: ["NLP", "ChatGPT API", "LangChain"],
    gradient: "from-brand-orange-light to-brand-orange",
  },
  {
    id: 4,
    company: "物流業D社",
    industry: "物流業",
    title: "AI配送最適化で配送効率を40%改善",
    challenge: "複雑な配送ルートの最適化と燃料コストの削減",
    solution: "AIによる動的ルート最適化システムを開発",
    results: ["配送効率: 40% 向上", "燃料コスト: 25% 削減", "CO2排出量: 30% 削減"],
    technologies: ["最適化アルゴリズム", "リアルタイム処理", "IoT"],
    gradient: "from-brand-orange to-brand-orange-dark",
  },
  {
    id: 5,
    company: "医療機関E",
    industry: "医療",
    title: "AI診断支援システムで診断精度を向上",
    challenge: "医師の業務負担増と診断の効率化",
    solution: "医療画像解析AIと電子カルテ連携システムを構築",
    results: ["診断時間: 50% 短縮", "見落とし率: 70% 削減", "医師の残業時間: 30% 削減"],
    technologies: ["医療AI", "画像解析", "セキュアクラウド"],
    gradient: "from-brand-orange-light to-brand-orange-dark",
  },
  {
    id: 6,
    company: "IT企業F社",
    industry: "IT",
    title: "BPOによる事務処理業務の完全外部化",
    challenge: "急成長による事務処理業務の増大とコア業務への影響",
    solution: "定型事務作業をBPOで外部化し、AI技術で処理効率を最大化",
    results: ["事務処理時間: 90% 削減", "人件費: 60% 削減", "エラー率: 85% 削減"],
    technologies: ["BPO", "RPA", "AI自動化"],
    gradient: "from-brand-orange to-brand-orange-light",
  },
];

export default function CasesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("すべて");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const industries = ["すべて", ...Array.from(new Set(caseStudies.map(c => c.industry)))];
  const filteredCases = selectedIndustry === "すべて" 
    ? caseStudies 
    : caseStudies.filter(c => c.industry === selectedIndustry);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-gray-light/30" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-orange-light/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
            <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-gradient-to-br from-brand-orange-dark/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }} />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="brand-gradient-text">導入事例</span>
          </h1>
          <p className={`text-xl text-brand-gray max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            DXとAI技術で実現した業務効率化・自動化の成功事例をご紹介します
          </p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 relative bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'brand-button shadow-brand-hover'
                    : 'brand-card bg-white hover:border-brand-orange/30'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="brand-card rounded-2xl overflow-hidden h-full hover:border-brand-orange/30 transition-all duration-500 hover:-translate-y-2 bg-white shadow-brand-soft">
                  {/* Header */}
                  <div className={`p-8 bg-gradient-to-r ${caseStudy.gradient} bg-opacity-20`}>
                    <div className="mb-4">
                      <span className="text-sm text-brand-gray">{caseStudy.industry}</span>
                      <h3 className="text-2xl font-bold text-brand-black mt-1">{caseStudy.company}</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-brand-gray-dark leading-tight">
                      {caseStudy.title}
                    </h4>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    {/* Challenge */}
                    <div>
                      <h5 className="text-sm font-semibold text-brand-orange mb-2">課題</h5>
                      <p className="text-brand-gray">{caseStudy.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h5 className="text-sm font-semibold text-brand-orange-dark mb-2">ソリューション</h5>
                      <p className="text-brand-gray">{caseStudy.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h5 className="text-sm font-semibold text-brand-orange-light mb-3">成果</h5>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-brand-gray">
                            <span className="w-2 h-2 bg-brand-orange rounded-full mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="pt-4 border-t border-brand-border">
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-mono text-brand-orange bg-brand-orange/10 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden bg-brand-gray-light">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-brand-gray-light/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">導入実績</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { label: "導入企業数", value: "50+" },
              { label: "業務効率化", value: "平均60%" },
              { label: "コスト削減", value: "平均40%" },
              { label: "顧客満足度", value: "95%" },
            ].map((stat, index) => (
              <div
                key={index}
                className="brand-card rounded-xl p-8 text-center hover:border-brand-orange/30 transition-all duration-300 bg-white shadow-brand-soft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold brand-gradient-text mb-2">{stat.value}</div>
                <div className="text-brand-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-brand-orange/10 to-brand-orange-light/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 to-brand-orange-light/5" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-brand-black">あなたの会社でも</span><br />
            <span className="brand-gradient-text">同じ成果を実現しませんか？</span>
          </h2>
          <p className="text-xl text-brand-gray mb-12 max-w-2xl mx-auto">
            豊富な実績と確かな技術力で、必ず成果をお届けします。
            まずはお気軽にご相談ください。
          </p>
          
          <Link href="/contact" className="brand-button inline-flex items-center space-x-2 text-lg shadow-brand-hover hover:shadow-brand-glow-lg">
            <span>無料相談はこちら</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}