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
    default: "Smart Fluent 合同会社 | AIで実務に集中できる環境をつくる",
    template: "%s | Smart Fluent"
  },
  description: "DXとAI技術を駆使して業務効率化・自動化を実現。BPO（Business Process Outsourcing）、AI活用支援、システム開発など幅広いサービスで、お客様が実務に集中できる環境づくりを全力で支援します。",
  keywords: ["BPO", "Business Process Outsourcing", "AI活用支援", "DX導入", "業務効率化", "自動化", "システム開発", "技術支援", "AI研修", "伴走型支援", "アウトソーシング"],
  authors: [{ name: "Smart Fluent合同会社" }],
  creator: "Smart Fluent合同会社",
  publisher: "Smart Fluent合同会社",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Smart Fluent 合同会社 | AIで実務に集中できる環境をつくる",
    description: "BPO、AI活用支援、システム開発。DXとAI技術を駆使して業務効率化・自動化を実現。豊富な実績で全力伴走します。",
    url: "https://smartfluent.jp",
    siteName: "Smart Fluent",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Fluent 合同会社 | AIで実務に集中できる環境をつくる",
    description: "BPO、AI活用支援、システム開発。DXとAI技術を駆使して業務効率化・自動化を実現。豊富な実績で全力伴走します。",
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
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

