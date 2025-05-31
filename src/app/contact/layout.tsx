import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | Smart Fluent - AIで実務に集中できる環境をつくる",
  description: "DXとAI導入でお客様が本来の業務に集中できる環境づくりを全力で伴走します。業務効率化・自動化のご相談、AI活用支援、システム開発など、どんな課題でもお気軽にお問い合わせください。",
  keywords: "お問い合わせ, AI導入相談, DX支援, 業務効率化, 自動化, 無料相談, Smart Fluent",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}