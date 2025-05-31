import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Fluent 合同会社 | AIで実務に集中できる環境をつくる",
  description: "業務効率化と自動化のプロフェッショナル。BPO、AI活用支援、DX導入でお客様の業務課題を解決。AI技術を活用した効率的な業務プロセス外部化で、実務に集中できる環境づくりを全力で支援します。",
  keywords: "Smart Fluent, BPO, Business Process Outsourcing, AI活用, DX推進, 業務効率化, 自動化, 伴走型支援, 技術支援, システム開発, アウトソーシング",
  openGraph: {
    title: "Smart Fluent 合同会社 | AIで実務に集中できる環境をつくる",
    description: "業務効率化と自動化のプロフェッショナル。BPO、AI活用支援、DX導入でお客様の業務課題を解決します。",
    type: "website",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}