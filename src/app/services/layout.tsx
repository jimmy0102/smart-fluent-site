import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "事業内容 | Smart Fluent - BPO・AI活用支援・DX導入・システム開発",
  description: "BPO（Business Process Outsourcing）、AI活用支援、AI研修、DX導入支援、技術支援、システム開発、コミュニティ運営。AI技術を活用した効率的な業務プロセス外部化、定型業務から専門業務までのアウトソーシング。Smart Fluentは豊富な実績を活かし、全力で伴走しながらお客様が実務に集中できる環境を創造します。",
  keywords: "BPO, Business Process Outsourcing, アウトソーシング, AI活用支援, AI研修, DX導入支援, 技術支援, システム開発, コミュニティ運営, 業務効率化, 自動化, 補助金活用, 業務プロセス外部化",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}