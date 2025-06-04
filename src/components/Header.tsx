'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
      scrolled ? 'py-2 shadow-lg' : 'py-4 shadow-md'
    }`}>
      <div className={`absolute inset-0 transition-all duration-300 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200" />
      </div>
      
      <nav className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
            <Image 
              src="/logo.png" 
              alt="Smart Fluent Logo" 
              width={180} 
              height={36} 
              priority 
              className="relative"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '/about', label: '会社概要' },
              { href: '/services', label: '事業内容' },
              { href: '/cases', label: '導入事例' },
              { href: '/contact', label: 'お問い合わせ', isButton: true }
            ].map((item) => (
              item.isButton ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="brand-button text-sm"
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-gray-700 hover:text-[#ff8c00] transition-all duration-300 group"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff8c00] group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              )
            ))}
          </div>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2 text-gray-700"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute left-0 top-0 w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`} />
              <span className={`absolute left-0 top-2.5 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`absolute left-0 top-5 w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`} />
            </div>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-x-0 transition-all duration-500 z-40 ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`} style={{ top: scrolled ? '60px' : '76px' }}>
        <div className="bg-white border-t border-gray-200 shadow-lg min-h-screen">
          <div className="container mx-auto px-6 py-8">
            <div className="space-y-6">
              {[
                { href: '/about', label: '会社概要' },
                { href: '/services', label: '事業内容' },
                { href: '/cases', label: '導入事例' },
                { href: '/contact', label: 'お問い合わせ' }
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 text-lg hover:text-[#ff8c00] transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative inline-block animate-fadeIn">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;