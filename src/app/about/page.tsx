'use client';

import type { Metadata } from "next";
import Image from 'next/image';
import { useEffect, useState } from 'react';

// export const metadata: Metadata = {
//   title: "会社概要 | Smart Fluent 合同会社",
//   description: "Smart Fluent合同会社の会社概要、ビジョン、代表メッセージをご紹介します。",
// };

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Animate value indicators
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with Brand Theme */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-gray-light/30 to-white" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-orange-light/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-3/4 w-96 h-96 bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="brand-gradient-text">会社概要</span>
          </h1>
          <p className={`text-xl md:text-2xl text-brand-gray max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            スマートフルエント（スマフル）は伊丹市・阪神間で、<br />
            中小企業のDX・AI導入により実務に集中できる環境を創造する
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 md:py-20 bg-white">
      {/* Vision/Mission with AI Glass Card */}
      <section className={`mb-20 transition-all duration-1000 delay-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="brand-card rounded-3xl p-12 relative overflow-hidden group hover:border-brand-orange/30 transition-all duration-500 bg-white shadow-brand-soft">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange" 
                 style={{ backgroundSize: '200% 100%', animation: 'gradient 8s ease infinite' }} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 relative z-10">
            <span className="brand-gradient-text">実務に集中できる環境を創造する</span>
            <br />
            <span className="text-2xl md:text-3xl text-brand-gray mt-4 block font-medium">
              全力で伴走する技術パートナー
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <div className="brand-card rounded-xl p-6 border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1 bg-white">
              <h3 className="text-2xl font-bold mb-3 text-brand-orange">ビジョン</h3>
              <p className="text-brand-gray leading-relaxed text-lg">
                <span className="text-brand-orange font-semibold">「企業が本来の価値創造に集中できる世界」</span>を実現します。DXとAI技術を駆使して、煮雑な業務や繰り返し作業から企業を解放し、本当に重要な実務にリソースを集中できる環境を提供します。
              </p>
            </div>
            
            <div className="brand-card rounded-xl p-6 border-brand-orange-dark/20 hover:border-brand-orange-dark/40 transition-all duration-300 hover:-translate-y-1 bg-white">
              <h3 className="text-2xl font-bold mb-3 text-brand-orange-dark">ミッション</h3>
              <p className="text-brand-gray leading-relaxed text-lg">
                業務効率化と技術支援の<span className="text-brand-orange-dark font-semibold">豊富な実績を最大限に活かし</span>、全力で伴走しながらお客様の業務課題をクリアしていきます。単なるシステム導入ではなく、真の意味で実務に集中できる環境づくりをサポートします。
              </p>
            </div>
            
            <div className="brand-card rounded-xl p-6 border-brand-orange-light/20 hover:border-brand-orange-light/40 transition-all duration-300 hover:-translate-y-1 bg-white">
              <h3 className="text-2xl font-bold mb-3 text-brand-orange-light">バリュー</h3>
              <p className="text-brand-gray leading-relaxed text-lg">
                <span className="text-brand-orange-light font-semibold">「伴走・実績・成果」</span>を基本価値とし、お客様と共に走り続けるパートナーであり続けます。豊富な実績に基づく確かな技術力で、必ず成果をお届けします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details with Brand Cards */}
      <section className={`mb-20 transition-all duration-1000 delay-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="brand-gradient-text">基本情報</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 premium-shadow-lg tech-shine overflow-hidden relative">
            {/* 全体を通る縦罫線 */}
            <div className="absolute top-8 bottom-8 left-1/4 w-px bg-brand-border hidden md:block"></div>
            
            <div className="space-y-8">
              <div className="group flex flex-col md:flex-row md:items-center hover:bg-brand-orange/3 transition-colors duration-300 rounded-lg p-4 -m-4">
                <div className="md:w-1/4 mb-2 md:mb-0 md:pr-6">
                  <span className="text-lg font-semibold text-brand-orange-dark">会社名</span>
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <span className="text-xl font-medium text-brand-black">SMART FLUENT合同会社（スマートフルエント・スマフル）</span>
                </div>
              </div>
              
              <div className="group flex flex-col md:flex-row md:items-center hover:bg-brand-orange/3 transition-colors duration-300 rounded-lg p-4 -m-4">
                <div className="md:w-1/4 mb-2 md:mb-0 md:pr-6">
                  <span className="text-lg font-semibold text-brand-orange-dark">所在地</span>
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <span className="text-xl font-medium text-brand-black">〒664-0842 兵庫県伊丹市西台3丁目9番22号 西台駅前ビル208-17</span>
                </div>
              </div>
              
              <div className="group flex flex-col md:flex-row md:items-center hover:bg-brand-orange/3 transition-colors duration-300 rounded-lg p-4 -m-4">
                <div className="md:w-1/4 mb-2 md:mb-0 md:pr-6">
                  <span className="text-lg font-semibold text-brand-orange-dark">設立日</span>
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <span className="text-xl font-medium text-brand-black">2025年5月23日</span>
                </div>
              </div>
              
              <div className="group flex flex-col md:flex-row md:items-center hover:bg-brand-orange/3 transition-colors duration-300 rounded-lg p-4 -m-4">
                <div className="md:w-1/4 mb-2 md:mb-0 md:pr-6">
                  <span className="text-lg font-semibold text-brand-orange-dark">従業員数</span>
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <span className="text-xl font-medium text-brand-black">7名（パートタイム・インターン・業務委託含む）</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Message with Brand Design */}
      <section className={`mb-20 transition-all duration-1000 delay-900 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="brand-gradient-text">代表メッセージ</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="brand-card rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-brand-orange/30 transition-all duration-500 bg-white shadow-brand-soft">
            {/* Subtle floating effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-2 h-2 bg-brand-orange rounded-full opacity-20 animate-float" style={{ top: '20%', left: '10%' }} />
              <div className="absolute w-3 h-3 bg-brand-orange-light rounded-full opacity-15 animate-float" style={{ top: '60%', right: '20%', animationDelay: '2s' }} />
              <div className="absolute w-2 h-2 bg-brand-orange-dark rounded-full opacity-20 animate-float" style={{ bottom: '30%', left: '30%', animationDelay: '4s' }} />
            </div>
            
            <div className="relative z-10 text-center">
              {/* Avatar placeholder with gradient border */}
              <div className="w-32 h-32 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange-dark rounded-full animate-spin-slow" />
                <div className="absolute inset-1 bg-white rounded-full" />
                <div className="absolute inset-2 bg-gradient-to-br from-brand-gray-light to-gray-200 rounded-full">
                </div>
              </div>
              
              <div className="mb-8">
                <p className="text-brand-gray text-lg leading-relaxed italic mb-6">
                  "私たちは、DXとAI技術を駆使して、企業のみなさまが真に重要な業務に集中できる環境を創造します。豊富な実績を持つ私たちが、全力で伴走しながら、お客様の業務課題を一つずつ確実にクリアしていきます。一緒に、未来の働き方を創りましょう。"
                </p>
                <div className="brand-card rounded-xl p-4 inline-block bg-white border-brand-orange/20">
                  <p className="text-2xl font-bold brand-gradient-text mb-1">林 和樹</p>
                  <p className="text-sm text-brand-gray">代表</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Values Section */}
      <section className={`mb-20 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="brand-gradient-text">私たちの価値観</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className={`brand-card rounded-2xl p-8 text-center hover:border-brand-orange/30 transition-all duration-500 hover:-translate-y-2 bg-white shadow-brand-soft ${
            activeValue === 0 ? 'border-brand-orange/50 shadow-brand-glow' : ''
          }`}>
            <h3 className="text-2xl font-bold mb-4 text-brand-orange">伴走</h3>
            <p className="text-brand-gray">単なる支援ではなく、お客様と共に走り続ける</p>
          </div>
          
          <div className={`brand-card rounded-2xl p-8 text-center hover:border-brand-orange-dark/30 transition-all duration-500 hover:-translate-y-2 bg-white shadow-brand-soft ${
            activeValue === 1 ? 'border-brand-orange-dark/50 shadow-brand-glow' : ''
          }`}>
            <h3 className="text-2xl font-bold mb-4 text-brand-orange-dark">実績</h3>
            <p className="text-brand-gray">豊富な経験と確かな技術力で最適解を提供</p>
          </div>
          
          <div className={`brand-card rounded-2xl p-8 text-center hover:border-brand-orange-light/30 transition-all duration-500 hover:-translate-y-2 bg-white shadow-brand-soft ${
            activeValue === 2 ? 'border-brand-orange-light/50 shadow-brand-glow' : ''
          }`}>
            <h3 className="text-2xl font-bold mb-4 text-brand-orange-light">成果</h3>
            <p className="text-brand-gray">必ず成果をお届けし、実務に集中できる環境を実現</p>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}