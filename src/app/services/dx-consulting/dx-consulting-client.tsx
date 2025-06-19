'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function DXConsultingClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DXコンサルティングサービス",
    "provider": {
      "@type": "Organization",
      "name": "SMART FLUENT合同会社",
      "alternateName": ["スマートフルエント", "スマフル"]
    },
    "description": "伊丹市を中心とした阪神間で中小企業のデジタルトランスフォーメーションを支援",
    "areaServed": ["伊丹市", "尼崎市", "宝塚市", "西宮市"],
    "serviceType": "DXコンサルティング",
    "url": "https://smartfluent.jp/services/dx-consulting"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
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
            <span className="brand-gradient-text">DXコンサルティング</span>
          </h1>
          <p className={`text-xl text-brand-gray max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            伊丹市・尼崎市・宝塚市の中小企業向け<br />
            スマフルの伴走型DX支援サービス
          </p>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-24 relative bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="brand-gradient-text">スマフルのDX伴走支援</span>
            </h2>

            <div className="brand-card rounded-xl p-8 mb-12 bg-white shadow-brand-soft">
              <p className="text-xl text-brand-gray leading-relaxed mb-6">
                スマートフルエント（スマフル）では、伊丹市を中心とした阪神間で中小企業のデジタルトランスフォーメーションを支援しています。
                単なるシステム導入ではなく、<strong className="text-brand-orange">真に業務効率化を実現するための伴走型支援</strong>を提供します。
              </p>
              <p className="text-lg text-brand-gray leading-relaxed">
                補助金を活用した低コスト導入から、社内DXの推進まで、豊富な実績に基づく最適解をご提案いたします。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="brand-card rounded-xl p-6 bg-white shadow-brand-soft">
                <h3 className="text-2xl font-bold mb-4 text-brand-orange">対象エリア</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li>• 伊丹市（メインエリア）</li>
                  <li>• 尼崎市</li>
                  <li>• 宝塚市</li>
                  <li>• 西宮市</li>
                  <li>• その他阪神間エリア</li>
                </ul>
              </div>

              <div className="brand-card rounded-xl p-6 bg-white shadow-brand-soft">
                <h3 className="text-2xl font-bold mb-4 text-brand-orange-dark">補助金活用</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li>• IT導入補助金</li>
                  <li>• ものづくり補助金</li>
                  <li>• 事業再構築補助金</li>
                  <li>• 小規模事業者持続化補助金</li>
                  <li>• その他各種補助金</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">サービス特徴</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "伴走型の支援体制",
                description: "導入から運用まで、お客様と一緒に走り続ける支援体制。単発のコンサルティングではなく、継続的なパートナーシップを提供します。",
                gradient: "from-brand-orange to-brand-orange-light"
              },
              {
                title: "豊富な実績による提案",
                description: "多数の中小企業でのDX支援実績を基に、業界・規模に応じた最適なソリューションをご提案します。",
                gradient: "from-brand-orange-dark to-brand-orange"
              },
              {
                title: "補助金活用でコスト削減",
                description: "各種補助金を活用した導入提案により、初期コストを大幅に削減しながら効果的なDXを実現します。",
                gradient: "from-brand-orange-light to-brand-orange"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="brand-card rounded-xl p-8 bg-white shadow-brand-soft hover:shadow-brand-glow transition-all duration-300"
              >
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">支援プロセス</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "現状分析・課題整理",
                  description: "現在の業務プロセスを詳細に分析し、効率化すべき課題を明確にします。"
                },
                {
                  step: "02", 
                  title: "DX戦略策定",
                  description: "お客様の事業特性に合わせた最適なデジタル化戦略を策定します。"
                },
                {
                  step: "03",
                  title: "補助金申請支援",
                  description: "適用可能な補助金の選定から申請書作成まで、専門的にサポートします。"
                },
                {
                  step: "04",
                  title: "システム導入・構築",
                  description: "選定したシステムの導入から設定、カスタマイズまで一貫して対応します。"
                },
                {
                  step: "05",
                  title: "運用支援・改善",
                  description: "導入後の運用をサポートし、継続的な改善を通じて効果を最大化します。"
                }
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-orange to-brand-orange-light rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{process.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow brand-card rounded-xl p-6 bg-white shadow-brand-soft">
                    <h3 className="text-xl font-bold mb-2 text-brand-black">{process.title}</h3>
                    <p className="text-brand-gray leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-brand-orange/10 to-brand-orange-light/10">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-brand-black">スマフルと一緒に</span><br />
            <span className="brand-gradient-text">DXを始めませんか？</span>
          </h2>
          <p className="text-xl text-brand-gray mb-12 max-w-2xl mx-auto">
            伊丹市・尼崎市・宝塚市でDX・業務効率化をお考えの中小企業様、<br />
            まずはお気軽にご相談ください。
          </p>
          
          <Link href="/contact" className="brand-button inline-flex items-center space-x-2 text-lg shadow-brand-hover hover:shadow-brand-glow-lg">
            <span>無料DX診断のお申し込み</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}