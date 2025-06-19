'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const fullText = 'AIで実務に集中できる環境をつくる';
  const heroRef = useRef<HTMLElement>(null);

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "スマートフルエント（スマフル）のサービス対応エリアはどこですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "主に伊丹市・尼崎市・宝塚市・西宮市を中心とした阪神間エリアでサービスを提供しています。その他の兵庫県内や関西圏についてもご相談ください。"
        }
      },
      {
        "@type": "Question",
        "name": "DX導入に補助金は活用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IT導入補助金、ものづくり補助金、事業再構築補助金など、様々な補助金の活用をサポートしています。お客様の状況に応じて最適な補助金をご提案し、申請から採択後のフォローまで一貫してサポートします。"
        }
      },
      {
        "@type": "Question",
        "name": "中小企業でもAI・RPA導入は可能ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、可能です。スマフルでは中小企業様の規模や予算に応じたAI・RPA導入を支援しています。小規模から始められるソリューションもご用意しており、段階的な導入も可能です。"
        }
      },
      {
        "@type": "Question",
        "name": "導入後のサポート体制はどうなっていますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "スマートフルエントでは「伴走型支援」を掲げており、導入後も継続的にサポートします。運用支援、改善提案、追加機能開発など、お客様が安心してシステムを活用できる体制を整えています。"
        }
      },
      {
        "@type": "Question",
        "name": "無料相談では何ができますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "現在の業務課題のヒアリング、DX・AI・RPA導入の可能性診断、概算費用のご提示、補助金活用の可能性などについて無料でご相談いただけます。まずはお気軽にお問い合わせください。"
        }
      },
      {
        "@type": "Question",
        "name": "スマフルの強みは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "豊富な業務効率化・技術支援の実績、伴走型の支援スタイル、補助金活用による低コスト導入、地域密着型のサービスが主な強みです。単なるシステム導入ではなく、お客様の業務改善を真剣に考えてサポートします。"
        }
      }
    ]
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
        
        // Hide cursor after 2-3 seconds when typing is complete
        setTimeout(() => {
          setShowCursor(false);
        }, 2500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      
      {/* Hero Section with Brand Theme */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-white pt-16 md:pt-20">
        {/* Subtle Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-gray-light/30 to-white" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-orange-light/20 to-brand-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="brand-gradient-text inline-block">{typedText}</span>
              {showCursor && (
                <span className={`${typingComplete ? '' : 'animate-pulse'}`}>|</span>
              )}
            </h1>
            
            <p className={`text-lg md:text-xl text-brand-gray mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              スマートフルエント（スマフル）は伊丹市・尼崎市・宝塚市を中心とした阪神間で、
              中小企業のDX・AI・RPA導入を支援。業務効率化と自動化のプロフェッショナルとして、
              豊富な実績を最大限に活かし、全力で伴走しながら
              実務に集中できる環境づくりを支援します。
            </p>
            
            <div className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Link href="/contact" className="brand-button inline-flex items-center space-x-2 text-lg shadow-brand-hover hover:shadow-brand-glow-lg">
                <span>まずはお問い合わせ</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-brand-orange/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-orange rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden bg-brand-gray-light tech-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-gray-light/50 tech-grid-bg" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">SMART FLUENTの強み</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '伴走型の技術支援',
                description: '単なる導入支援ではなく、お客様と共に走り続け、業務効率化の実現まで全力でサポートします。',
                color: 'from-brand-orange to-brand-orange-light',
              },
              {
                title: '実績に基づく最適解',
                description: '豊富な業務効率化・技術支援の実績を活かし、お客様に最適なDX・AI活用方法をご提案します。',
                color: 'from-brand-orange-dark to-brand-orange',
              },
              {
                title: '補助金活用支援',
                description: '補助金を活用した開発にも対応。コストを抑えながら最大限の効果を実現します。',
                color: 'from-brand-orange-light to-brand-orange',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="brand-card group hover:scale-105 transition-all duration-500 bg-white premium-gradient"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">主要サービス</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              'DX事業', 'AIソリューション事業', '補助金申請支援'
            ].map((tech, index) => (
              <div
                key={index}
                className="brand-card rounded-lg p-6 text-center hover:border-brand-orange/30 transition-all duration-300 group bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-brand-gray font-mono group-hover:text-brand-orange transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient-text">よくあるご質問</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "スマートフルエント（スマフル）のサービス対応エリアはどこですか？",
                answer: "主に伊丹市・尼崎市・宝塚市・西宮市を中心とした阪神間エリアでサービスを提供しています。その他の兵庫県内や関西圏についてもご相談ください。"
              },
              {
                question: "DX導入に補助金は活用できますか？",
                answer: "IT導入補助金、ものづくり補助金、事業再構築補助金など、様々な補助金の活用をサポートしています。お客様の状況に応じて最適な補助金をご提案し、申請から採択後のフォローまで一貫してサポートします。"
              },
              {
                question: "中小企業でもAI・RPA導入は可能ですか？",
                answer: "はい、可能です。スマフルでは中小企業様の規模や予算に応じたAI・RPA導入を支援しています。小規模から始められるソリューションもご用意しており、段階的な導入も可能です。"
              },
              {
                question: "導入後のサポート体制はどうなっていますか？",
                answer: "スマートフルエントでは「伴走型支援」を掲げており、導入後も継続的にサポートします。運用支援、改善提案、追加機能開発など、お客様が安心してシステムを活用できる体制を整えています。"
              },
              {
                question: "無料相談では何ができますか？",
                answer: "現在の業務課題のヒアリング、DX・AI・RPA導入の可能性診断、概算費用のご提示、補助金活用の可能性などについて無料でご相談いただけます。まずはお気軽にお問い合わせください。"
              },
              {
                question: "スマフルの強みは何ですか？",
                answer: "豊富な業務効率化・技術支援の実績、伴走型の支援スタイル、補助金活用による低コスト導入、地域密着型のサービスが主な強みです。単なるシステム導入ではなく、お客様の業務改善を真剣に考えてサポートします。"
              }
            ].map((faq, index) => (
              <div key={index} className="brand-card rounded-xl p-6 bg-white shadow-brand-soft">
                <h3 className="text-lg font-bold mb-3 text-brand-black">{faq.question}</h3>
                <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-brand-black">あなたの業務に</span><br />
            <span className="brand-gradient-text">集中できる環境を実現</span>
          </h2>
          
          <p className="text-xl text-brand-gray mb-12 max-w-2xl mx-auto">
            伊丹市・尼崎市・宝塚市でDX・AI・RPA導入をお考えの中小企業様、
            スマフルが全力で伴走します。
          </p>
          
          <Link 
            href="/contact" 
            className="brand-button inline-flex items-center space-x-3 text-lg px-8 py-4 shadow-brand-hover hover:shadow-brand-glow-lg"
          >
            <span>無料DX診断はこちら</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}