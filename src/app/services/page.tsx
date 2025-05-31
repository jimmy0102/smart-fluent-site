'use client';

import type { Metadata } from "next";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const services = [
  {
    title: "DX事業",
    description: "企業のデジタルトランスフォーメーションを総合的に支援。業務プロセスの分析から改善提案、システム導入、運用まで一貫してサポートし、真の意味での業務効率化を実現します。",
    details: "補助金活用可能",
    gradient: "from-brand-orange to-brand-orange-light",
  },
  {
    title: "AIソリューション事業",
    description: "AI技術を活用したカスタムソリューションの開発・導入。機械学習、自然言語処理、画像認識など、お客様の課題に最適なAI技術で業務自動化と効率化を推進します。",
    details: "実績豊富",
    gradient: "from-brand-orange-dark to-brand-orange",
  },
  {
    title: "補助金申請支援",
    description: "IT導入補助金、ものづくり補助金、事業再構築補助金など、各種補助金の申請から採択後のフォローまで専門的にサポート。コストを抑えた効果的なDX・AI導入を実現します。",
    details: "高い採択実績",
    gradient: "from-brand-orange-light to-brand-orange",
  },
];

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-gray-light/30" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-brand-orange-light/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="brand-gradient-text">事業内容</span>
          </h1>
          <p className={`text-xl text-brand-gray max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            業務効率化・自動化の実績を最大限に活かし、
            お客様が実務に集中できる環境を創造します
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">提供サービス</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-brand-orange-light/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative brand-card h-full flex flex-col bg-white shadow-brand-soft">
                  {service.details && (
                    <div className="mb-4">
                      <span className="text-xs text-brand-orange font-mono bg-brand-orange/10 px-2 py-1 rounded">
                        {service.details}
                      </span>
                    </div>
                  )}
                  
                  <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-brand-gray flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gray-light/50 to-white" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-brand-black">なぜ</span>
            <span className="brand-gradient-text">Smart Fluent</span>
            <span className="text-brand-black">を選ぶのか</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                title: "実績に裏打ちされた提案",
                content: "豊富な業務効率化・技術支援の実績から最適解を導きます"
              },
              {
                title: "全力で伴走",
                content: "単なるコンサルではなく、成功まで一緒に走り続けます"
              },
              {
                title: "実務への集中",
                content: "余計な業務から解放し、本来の仕事に集中できる環境を実現"
              },
              {
                title: "補助金活用",
                content: "各種補助金を活用し、コストを抑えた導入をサポート"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="brand-card rounded-xl p-8 hover:border-brand-orange/30 transition-all duration-300 bg-white shadow-brand-soft"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-2xl font-bold text-brand-black mb-2">{item.title}</h3>
                <p className="text-brand-gray">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-24 relative bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">事業領域</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="brand-card rounded-xl p-8 bg-white shadow-brand-soft">
              <ol className="space-y-4 text-brand-gray">
                {[
                  "DX事業",
                  "AIソリューション事業",
                  "補助金申請支援"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 group">
                    <span className="text-brand-orange font-mono text-sm mt-0.5 group-hover:text-brand-orange-dark transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
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
            <span className="text-brand-black">今こそ、</span>
            <span className="brand-gradient-text">実務に集中できる環境へ</span>
          </h2>
          <p className="text-xl text-brand-gray mb-12 max-w-2xl mx-auto">
            業務効率化、AI導入、システム開発など、
            どんな課題でも全力で伴走します。
          </p>
          
          <Link href="/contact" className="brand-button inline-flex items-center space-x-2 text-lg shadow-brand-hover hover:shadow-brand-glow-lg">
            <span>お問い合わせはこちら</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}