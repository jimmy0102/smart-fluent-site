import type { Metadata } from "next";
import DXConsultingClient from './dx-consulting-client';

export const metadata: Metadata = {
  title: "DXコンサルティング | スマフルの伴走型DX支援",
  description: "スマートフルエント（スマフル）のDXコンサルティングサービス。伊丹市・尼崎市・宝塚市で中小企業の業務効率化・デジタル化を支援。補助金活用で低コスト導入を実現。",
  keywords: ["伊丹 DXコンサル", "スマフル DX", "中小企業 DX", "業務効率化", "デジタル化支援", "補助金活用"],
};

export default function DXConsultingPage() {
  return <DXConsultingClient />;
}