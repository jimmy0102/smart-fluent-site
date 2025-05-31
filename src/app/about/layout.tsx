import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | Smart Fluent - 全力で伴走する技術パートナー",
  description: "Smart Fluent合同会社は、DXとAI技術を駆使して企業が実務に集中できる環境を創造します。豊富な業務効率化・技術支援の実績を活かし、全力で伴走しながらお客様の業務課題を解決します。",
  keywords: "会社概要, Smart Fluent, 伴走型支援, 技術パートナー, DX, AI, 業務効率化, 実績",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}