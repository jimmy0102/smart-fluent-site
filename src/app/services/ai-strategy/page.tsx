import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "AI戦略コンサルティング | スマフルのAI活用支援",
  description: "スマートフルエント（スマフル）のAI戦略コンサルティングサービス。伊丹市・尼崎市・宝塚市で中小企業のAI導入・活用を支援。ChatGPT活用から機械学習まで幅広く対応。",
  keywords: ["兵庫 AIコンサル", "スマフル AI", "ChatGPT 活用", "AI導入支援", "機械学習", "AI戦略"],
};

export default function AIStrategyPage() {
  const isVisible = true;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI戦略コンサルティングサービス",
    "provider": {
      "@type": "Organization",
      "name": "SMART FLUENT合同会社",
      "alternateName": ["スマートフルエント", "スマフル"]
    },
    "description": "伊丹市を中心とした阪神間で中小企業のAI導入・活用戦略を支援",
    "areaServed": ["伊丹市", "尼崎市", "宝塚市", "西宮市"],
    "serviceType": "AI戦略コンサルティング",
    "url": "https://smartfluent.jp/services/ai-strategy"
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
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-brand-orange-light/20 to-transparent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-brand-orange-dark/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="brand-gradient-text">AI戦略コンサルティング</span>
          </h1>
          <p className={`text-xl text-brand-gray max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            兵庫県・伊丹市を中心とした阪神間の中小企業向け<br />
            スマフルのAI活用・導入支援サービス
          </p>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-24 relative bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="brand-gradient-text">スマフルのAI導入コンサル</span>
            </h2>

            <div className="brand-card rounded-xl p-8 mb-12 bg-white shadow-brand-soft">
              <p className="text-xl text-brand-gray leading-relaxed mb-6">
                スマートフルエント（スマフル）では、伊丹市を中心とした阪神間で中小企業の<strong className="text-brand-orange">AI活用・導入戦略を支援</strong>しています。
                ChatGPTなどの生成AIから機械学習まで、お客様の業務課題に最適なAIソリューションをご提案します。
              </p>
              <p className="text-lg text-brand-gray leading-relaxed">
                AI研修から実装まで、豊富な実績に基づく実用的なAI活用方法をお客様と一緒に構築いたします。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="brand-card rounded-xl p-6 bg-white shadow-brand-soft">
                <h3 className="text-2xl font-bold mb-4 text-brand-orange-light">主要AI技術</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li>• ChatGPT・生成AI活用</li>
                  <li>• 機械学習・予測分析</li>
                  <li>• 自然言語処理（NLP）</li>
                  <li>• 画像認識・解析</li>
                  <li>• カスタムAIソリューション</li>
                </ul>
              </div>

              <div className="brand-card rounded-xl p-6 bg-white shadow-brand-soft">
                <h3 className="text-2xl font-bold mb-4 text-brand-orange">活用領域</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li>• 顧客対応・チャットボット</li>
                  <li>• 文書作成・要約</li>
                  <li>• データ分析・予測</li>
                  <li>• 品質検査・異常検知</li>
                  <li>• 業務プロセス最適化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">AI活用ソリューション</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "ChatGPT活用支援",
                description: "社内でのChatGPT活用方法の策定から、カスタムGPTの構築まで、生成AIを最大限活用するための支援を提供します。",
                icon: "🤖",
                gradient: "from-brand-orange to-brand-orange-light",
                features: ["プロンプト設計", "社内ガイドライン策定", "カスタムGPT構築"]
              },
              {
                title: "予測分析システム",
                description: "売上予測、需要予測、品質予測など、機械学習を活用した予測分析システムの構築をサポートします。",
                icon: "📊",
                gradient: "from-brand-orange-dark to-brand-orange",
                features: ["売上・需要予測", "品質予測", "リスク分析"]
              },
              {
                title: "業務自動化AI",
                description: "文書処理、データ分析、画像認識など、AI技術を活用した高度な業務自動化ソリューションを提供します。",
                icon: "⚡",
                gradient: "from-brand-orange-light to-brand-orange",
                features: ["文書自動処理", "画像解析", "音声認識"]
              }
            ].map((solution, index) => (
              <div
                key={index}
                className="brand-card rounded-xl p-8 bg-white shadow-brand-soft hover:shadow-brand-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{solution.icon}</div>
                <h3 className={`text-xl font-bold mb-4 text-center bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                  {solution.title}
                </h3>
                <p className="text-brand-gray leading-relaxed mb-6">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-brand-orange-dark mb-2">主な機能：</div>
                  {solution.features.map((feature, fIndex) => (
                    <div key={fIndex} className="text-sm text-brand-gray flex items-center">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 relative bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">AI導入プロセス</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "AI活用可能性診断",
                  description: "現在の業務プロセスを分析し、AI活用による効果が期待できる領域を特定します。"
                },
                {
                  step: "02", 
                  title: "AI戦略策定・計画立案",
                  description: "お客様の事業目標に合わせた最適なAI活用戦略と導入計画を策定します。"
                },
                {
                  step: "03",
                  title: "AI研修・教育",
                  description: "社員の皆様にAI技術の基礎から実践的な活用方法まで、段階的に研修を実施します。"
                },
                {
                  step: "04",
                  title: "AIシステム構築・導入",
                  description: "選定したAIソリューションの開発・構築から本番導入まで一貫してサポートします。"
                },
                {
                  step: "05",
                  title: "効果測定・改善",
                  description: "導入効果を継続的に測定し、AI活用の最適化と追加施策を推進します。"
                }
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-orange-light to-brand-orange-dark rounded-full flex items-center justify-center">
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

      {/* Success Stories */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">AI導入成功事例</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                industry: "製造業E社",
                solution: "品質検査AI導入",
                effect: "検査精度95%向上",
                details: "画像認識AIによる製品品質の自動検査システムを構築。人的検査の限界を突破。"
              },
              {
                industry: "小売業F社", 
                solution: "ChatGPT活用推進",
                effect: "文書作成時間60%削減",
                details: "商品説明文、メルマガ、SNS投稿などにChatGPTを活用し、マーケティング効率化を実現。"
              },
              {
                industry: "サービス業G社",
                solution: "顧客対応チャットボット",
                effect: "問い合わせ対応80%自動化",
                details: "FAQを学習したAIチャットボットで、基本的な顧客対応を24時間自動化。"
              },
              {
                industry: "建設業H社",
                solution: "需要予測システム",
                effect: "在庫コスト30%削減",
                details: "過去データと外部要因を分析した需要予測により、適正在庫管理を実現。"
              }
            ].map((story, index) => (
              <div key={index} className="brand-card rounded-xl p-6 bg-white shadow-brand-soft hover:shadow-brand-glow transition-all duration-300">
                <div className="text-sm text-brand-orange-light font-semibold mb-2">{story.industry}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-black">{story.solution}</h3>
                <div className="text-2xl font-bold text-brand-orange-dark mb-3">{story.effect}</div>
                <p className="text-brand-gray leading-relaxed">{story.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-brand-orange-light/10 to-brand-orange-dark/10">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-brand-black">スマフルと一緒に</span><br />
            <span className="brand-gradient-text">AI活用を始めませんか？</span>
          </h2>
          <p className="text-xl text-brand-gray mb-12 max-w-2xl mx-auto">
            兵庫県・伊丹市・尼崎市・宝塚市でAI導入をお考えの中小企業様、<br />
            まずはお気軽にご相談ください。
          </p>
          
          <Link href="/contact" className="brand-button inline-flex items-center space-x-2 text-lg shadow-brand-hover hover:shadow-brand-glow-lg">
            <span>無料AI活用診断のお申し込み</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}