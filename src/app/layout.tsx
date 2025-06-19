import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    default: "スマートフルエント（SMART FLUENT）｜伊丹でAI・RPA DXコンサル",
    template: "%s | スマフル"
  },
  description: "スマフル（SMART FLUENT合同会社）がAI・RPA導入をワンストップ支援。伊丹市を中心に阪神間で中小企業のDX・業務効率化を実現。",
  keywords: ["スマートフルエント", "スマフル", "伊丹 DXコンサル", "伊丹 RPA導入支援", "兵庫 AIコンサル", "社内DX 伴走支援", "中小企業 DX 補助金", "AI活用支援", "DX導入", "業務効率化"],
  authors: [{ name: "SMART FLUENT合同会社（スマートフルエント）" }],
  creator: "SMART FLUENT合同会社（スマートフルエント）",
  publisher: "SMART FLUENT合同会社（スマートフルエント）",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "スマートフルエント（SMART FLUENT）｜伊丹でAI・RPA DXコンサル",
    description: "スマフル（SMART FLUENT合同会社）がAI・RPA導入をワンストップ支援。伊丹市・尼崎市・宝塚市でDX・業務効率化を実現。",
    url: "https://smartfluent.jp",
    siteName: "スマートフルエント（SMART FLUENT）",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "スマートフルエント（SMART FLUENT）｜伊丹でAI・RPA DXコンサル",
    description: "スマフル（SMART FLUENT合同会社）がAI・RPA導入をワンストップ支援。伊丹市・尼崎市・宝塚市でDX・業務効率化を実現。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ConsultingService",
    "name": "SMART FLUENT合同会社",
    "alternateName": ["スマートフルエント", "スマフル"],
    "brand": {
      "@type": "Brand",
      "name": "SMART FLUENT",
      "alternateName": ["スマートフルエント", "スマフル"]
    },
    "description": "伊丹市を中心とした阪神間でDX・AI・RPA導入を支援するコンサルティング会社",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "西台3丁目9番22号 西台駅前ビル208-17",
      "addressLocality": "伊丹市",
      "addressRegion": "兵庫県",
      "postalCode": "664-0842",
      "addressCountry": "JP"
    },
    "areaServed": {
      "@type": "State",
      "name": "兵庫県",
      "containsPlace": [
        {"@type": "City", "name": "伊丹市"},
        {"@type": "City", "name": "尼崎市"},
        {"@type": "City", "name": "宝塚市"},
        {"@type": "City", "name": "西宮市"}
      ]
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.785,
      "longitude": 135.406
    },
    "founder": {
      "@type": "Person",
      "name": "林 和樹"
    },
    "foundingDate": "2025-05-23",
    "url": "https://smartfluent.jp",
    "sameAs": [],
    "serviceType": ["DXコンサルティング", "AI導入支援", "RPA導入支援", "補助金申請支援"],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "DX事業",
          "description": "企業のデジタルトランスフォーメーション支援"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AIソリューション事業",
          "description": "AI技術を活用したカスタムソリューション開発・導入"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "補助金申請支援",
          "description": "IT導入補助金・ものづくり補助金等の申請支援"
        }
      }
    ]
  };

  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

