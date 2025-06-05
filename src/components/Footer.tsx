'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-gray-50 border-t border-gray-200">
      <div className="relative">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold brand-gradient-text">
                合同会社SMART FLUENT
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AIで実務に集中できる環境をつくる
              </p>
              <p className="text-gray-600 text-sm flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#ff8c00] rounded-full" />
                <span>兵庫県伊丹市西台3丁目9番22号</span>
              </p>
            </div>

            {/* Sitemap */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-6">サイトマップ</h3>
              <ul className="space-y-3">
                {[
                  { href: '/', label: 'ホーム' },
                  { href: '/about', label: '会社概要' },
                  { href: '/services', label: '事業内容' },
                  { href: '/cases', label: '導入事例' },
                  { href: '/contact', label: 'お問い合わせ' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="group flex items-center space-x-2 text-gray-600 hover:text-[#ff8c00] transition-all duration-300"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:w-4 group-hover:bg-[#ff8c00] transition-all duration-300" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-6">リーガル</h3>
              <ul className="space-y-3">
                {[
                  { href: '/legal/privacy', label: 'プライバシーポリシー' },
                  { href: '/legal/terms', label: '利用規約' },
                  { href: '/legal/tokutei', label: '特定商取引法に基づく表記' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="group flex items-center space-x-2 text-gray-600 hover:text-[#ff8c00] transition-all duration-300"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:w-4 group-hover:bg-[#ff8c00] transition-all duration-300" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gray-200" />
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 text-sm">
                &copy; {currentYear} 合同会社SMART FLUENT. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 text-xs">Powered by</span>
                <span className="brand-gradient-text font-mono text-sm font-semibold">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;