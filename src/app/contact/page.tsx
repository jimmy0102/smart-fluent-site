"use client";

import type { Metadata } from "next";
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formFocused, setFormFocused] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Placeholder for form submission logic
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: Implement actual form submission logic here.
    // This could involve sending data to an API endpoint, a serverless function, or a third-party service.
    // Example: const formData = new FormData(event.currentTarget);
    // Example: await fetch('/api/contact', { method: 'POST', body: formData });

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success/error
    const success = Math.random() > 0.2; // Simulate 80% success rate
    if (success) {
      setSubmitStatus("success");
      // Optionally reset the form: event.currentTarget.reset();
    } else {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  // TODO: Add reCAPTCHA v3 integration (as per spec)
  // This typically involves loading the reCAPTCHA script and including a token with the form submission.

  return (
    <>
      {/* Hero Section with Brand Theme */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-gray-light/30 to-white" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-orange-light/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-brand-orange-dark/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="brand-gradient-text">お問い合わせ</span>
          </h1>
          <p className={`text-xl md:text-2xl text-brand-gray max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            AIの力で、あなたのビジネスを次のステージへ
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 md:py-20 bg-white">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* CTA Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="brand-card text-center group bg-white shadow-brand-soft">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-lg font-semibold text-brand-gray-dark mb-2">無料相談</h3>
              <p className="text-sm text-brand-gray">AIの可能性を一緒に探してみませんか？まずはお気軽にご相談ください</p>
            </div>
            
            <div className="brand-card text-center group bg-white shadow-brand-soft">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-orange-dark to-brand-orange flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-brand-gray-dark mb-2">迅速対応</h3>
              <p className="text-sm text-brand-gray">お問い合わせから24時間以内にご返信いたします</p>
            </div>
            
            <div className="brand-card text-center group bg-white shadow-brand-soft">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-orange-light to-brand-orange flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>
              <h3 className="text-lg font-semibold text-brand-gray-dark mb-2">最適提案</h3>
              <p className="text-sm text-brand-gray">お客様の課題に最適なAIソリューションをご提案します</p>
            </div>
          </div>

          {/* Main Contact Form */}
          <div className="brand-card rounded-3xl p-8 md:p-12 relative overflow-hidden bg-white shadow-brand-soft">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange-dark" 
                   style={{ backgroundSize: '200% 100%', animation: 'gradient 8s ease infinite' }} />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                <span className="brand-gradient-text">メッセージを送信</span>
              </h2>
              
              <p className="text-brand-gray mb-8 text-center text-lg">
                AI活用、DX推進、業務改善に関するご相談、サービスに関するご質問など、<br className="hidden md:block" />
                お気軽にお問い合わせください。
              </p>

              {submitStatus === "success" && (
                <div className="mb-6 brand-card rounded-xl p-6 border-green-500/30 bg-green-50">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <p className="text-green-600">
                      お問い合わせありがとうございます。内容を確認の上、担当者よりご連絡いたします。
                    </p>
                  </div>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 brand-card rounded-xl p-6 border-red-500/30 bg-red-50">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚠️</span>
                    <p className="text-red-600">
                      送信中にエラーが発生しました。お手数ですが、時間をおいて再度お試しいただくか、別の方法でお問い合わせください。
                    </p>
                  </div>
                </div>
              )}

              {submitStatus !== "success" && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-gray-dark mb-2">
                        お名前<span className="text-brand-orange ml-1">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        disabled={isSubmitting}
                        onFocus={() => setFormFocused('name')}
                        onBlur={() => setFormFocused(null)}
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-brand-black placeholder-brand-gray-light transition-all duration-300 ${
                          formFocused === 'name' ? 'border-brand-orange shadow-brand-glow' : 'border-brand-border hover:border-brand-orange/30'
                        } focus:outline-none disabled:opacity-50`}
                        placeholder="山田 太郎"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-brand-gray-dark mb-2">
                        会社名
                      </label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        disabled={isSubmitting}
                        onFocus={() => setFormFocused('company')}
                        onBlur={() => setFormFocused(null)}
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-brand-black placeholder-brand-gray-light transition-all duration-300 ${
                          formFocused === 'company' ? 'border-brand-orange-dark shadow-brand-glow' : 'border-brand-border hover:border-brand-orange/30'
                        } focus:outline-none disabled:opacity-50`}
                        placeholder="株式会社サンプル"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-gray-dark mb-2">
                      メールアドレス<span className="text-brand-orange ml-1">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      disabled={isSubmitting}
                      onFocus={() => setFormFocused('email')}
                      onBlur={() => setFormFocused(null)}
                      className={`w-full px-4 py-3 bg-white border rounded-xl text-brand-black placeholder-brand-gray-light transition-all duration-300 ${
                        formFocused === 'email' ? 'border-brand-orange-light shadow-brand-glow' : 'border-brand-border hover:border-brand-orange/30'
                      } focus:outline-none disabled:opacity-50`}
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-gray-dark mb-2">
                      お問い合わせ内容<span className="text-brand-orange ml-1">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      disabled={isSubmitting}
                      onFocus={() => setFormFocused('message')}
                      onBlur={() => setFormFocused(null)}
                      className={`w-full px-4 py-3 bg-white border rounded-xl text-brand-black placeholder-brand-gray-light transition-all duration-300 ${
                        formFocused === 'message' ? 'border-brand-orange shadow-brand-glow' : 'border-brand-border hover:border-brand-orange/30'
                      } focus:outline-none disabled:opacity-50 resize-none`}
                      placeholder="お問い合わせ内容をご記入ください..."
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      id="privacy" 
                      name="privacy" 
                      type="checkbox" 
                      required 
                      disabled={isSubmitting}
                      className="h-5 w-5 bg-white border-brand-border rounded text-brand-orange focus:ring-brand-orange focus:ring-offset-0 mt-0.5"
                    />
                    <label htmlFor="privacy" className="ml-3 text-sm text-brand-gray">
                      <a href="/legal/privacy" target="_blank" rel="noopener noreferrer" 
                         className="text-brand-orange hover:text-brand-orange-dark transition-colors duration-200 underline">
                        プライバシーポリシー
                      </a>
                      に同意します。<span className="text-brand-orange ml-1">*</span>
                    </label>
                  </div>
                  
                  <div>
                    {/* TODO: Add reCAPTCHA element here if needed */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="brand-button w-full relative overflow-hidden group shadow-brand-hover hover:shadow-brand-glow-lg"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            送信中...
                          </>
                        ) : (
                          <>
                            送信する
                            <span className="text-xl">→</span>
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}