import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "RPA導入支援 | スマフルの業務自動化サービス",
  description: "スマートフルエント（スマフル）のRPA導入支援サービス。伊丹市・尼崎市・宝塚市で業務自動化・効率化を実現。Power Automate等のツール活用で繰り返し作業を自動化。",
  keywords: ["伊丹 RPA導入支援", "スマフル RPA", "業務自動化", "Power Automate", "繰り返し作業 自動化", "効率化"],
};

export default function RPASupportPage() {
  const isVisible = true;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "RPA導入支援サービス",
    "provider": {
      "@type": "Organization",
      "name": "SMART FLUENT合同会社",
      "alternateName": ["スマートフルエント", "スマフル"]
    },
    "description": "伊丹市を中心とした阪神間で中小企業の業務自動化・RPA導入を支援",
    "areaServed": ["伊丹市", "尼崎市", "宝塚市", "西宮市"],
    "serviceType": "RPA導入支援",
    "url": "https://smartfluent.jp/services/rpa-support"
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
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-brand-orange-dark/20 to-transparent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="brand-gradient-text">RPA導入支援</span>
          </h1>
          <p className={`text-xl text-brand-gray max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            伊丹市・尼崎市・宝塚市の中小企業向け<br />
            スマフルの業務自動化・RPA導入サービス
          </p>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-24 relative bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="brand-gradient-text">スマフルのRPA導入支援</span>
            </h2>

            <div className="brand-card rounded-xl p-8 mb-12 bg-white shadow-brand-soft">
              <p className="text-xl text-brand-gray leading-relaxed mb-6">
                スマートフルエント（スマフル）では、伊丹市を中心とした阪神間で中小企業の<strong className="text-brand-orange">業務自動化・RPA導入を支援</strong>しています。
                繰り返し作業の自動化により、社員の皆様がより価値の高い業務に集中できる環境を創造します。
              </p>
              <p className="text-lg text-brand-gray leading-relaxed">
                Power AutomateやUiPathなどの各種RPAツールを活用し、お客様の業務特性に最適な自動化ソリューションを提供します。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="brand-card rounded-xl p-6 bg-white shadow-brand-soft">
                <h3 className="text-2xl font-bold mb-4 text-brand-orange-dark">主要RPAツール</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li>• Microsoft Power Automate</li>
                  <li>• UiPath</li>
                  <li>• WinActor</li>
                  <li>• Automation Anywhere</li>
                  <li>• カスタム自動化ツール</li>
                </ul>
              </div>

              <div className="brand-card rounded-xl p-6 bg-white shadow-brand-soft">
                <h3 className="text-2xl font-bold mb-4 text-brand-orange">自動化対象業務</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li>• データ入力・転記作業</li>
                  <li>• レポート作成</li>
                  <li>• メール送信・配信</li>
                  <li>• ファイル操作・整理</li>
                  <li>• 各種システム連携</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">RPA導入のメリット</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "作業時間の大幅短縮",
                description: "繰り返し作業を自動化することで、従来の作業時間を50-80%削減。社員の皆様がより創造的な業務に集中できます。",
                icon: "⏰",
                gradient: "from-brand-orange to-brand-orange-light"
              },
              {
                title: "ヒューマンエラーの削減",
                description: "手作業によるミスを大幅に削減。データ入力や計算処理の精度向上により、品質の安定化を実現します。",
                icon: "✅",
                gradient: "from-brand-orange-dark to-brand-orange"
              },
              {
                title: "コスト削減効果",
                description: "人件費削減だけでなく、ミスによる損失やリワーク時間の削減により、総合的なコスト効果を実現します。",
                icon: "💰",
                gradient: "from-brand-orange-light to-brand-orange"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="brand-card rounded-xl p-8 bg-white shadow-brand-soft hover:shadow-brand-glow transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                  {benefit.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 relative bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">RPA導入プロセス</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "業務分析・自動化対象選定",
                  description: "現在の業務プロセスを詳細に分析し、自動化効果の高い業務を特定します。"
                },
                {
                  step: "02", 
                  title: "RPAツール選定・設計",
                  description: "業務特性に最適なRPAツールを選定し、自動化の詳細設計を行います。"
                },
                {
                  step: "03",
                  title: "開発・テスト",
                  description: "RPAロボットの開発から各種テストまで、品質を重視した開発を実施します。"
                },
                {
                  step: "04",
                  title: "導入・研修",
                  description: "本番環境への導入と社員の皆様への操作研修を実施します。"
                },
                {
                  step: "05",
                  title: "運用サポート・改善",
                  description: "導入後の運用をサポートし、継続的な改善を通じて効果を最大化します。"
                }
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-orange-dark to-brand-orange rounded-full flex items-center justify-center">
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

      {/* Case Studies Preview */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">導入実績（例）</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                industry: "製造業A社",
                task: "受注データ入力の自動化",
                effect: "作業時間75%削減",
                details: "ExcelからERPシステムへの データ転記作業を自動化"
              },
              {
                industry: "サービス業B社", 
                task: "請求書作成の自動化",
                effect: "月40時間の削減",
                details: "顧客データから請求書を自動生成し、メール送信まで自動化"
              },
              {
                industry: "小売業C社",
                task: "在庫管理レポート自動化",
                effect: "ミス率90%削減",
                details: "複数システムのデータを統合した 在庫レポートを自動作成"
              },
              {
                industry: "建設業D社",
                task: "見積書作成支援",
                effect: "作業効率3倍向上",
                details: "過去データを活用した見積書の 半自動作成システムを構築"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="brand-card rounded-xl p-6 bg-white shadow-brand-soft hover:shadow-brand-glow transition-all duration-300">
                <div className="text-sm text-brand-orange font-semibold mb-2">{caseStudy.industry}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-black">{caseStudy.task}</h3>
                <div className="text-2xl font-bold text-brand-orange-dark mb-3">{caseStudy.effect}</div>
                <p className="text-brand-gray leading-relaxed">{caseStudy.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-brand-orange-dark/10 to-brand-orange/10">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-brand-black">スマフルと一緒に</span><br />
            <span className="brand-gradient-text">業務自動化を始めませんか？</span>
          </h2>
          <p className="text-xl text-brand-gray mb-12 max-w-2xl mx-auto">
            伊丹市・尼崎市・宝塚市でRPA・業務自動化をお考えの中小企業様、<br />
            まずはお気軽にご相談ください。
          </p>
          
          <Link href="/contact" className="brand-button inline-flex items-center space-x-2 text-lg shadow-brand-hover hover:shadow-brand-glow-lg">
            <span>無料RPA診断のお申し込み</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}