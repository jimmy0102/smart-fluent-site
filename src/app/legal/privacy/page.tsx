import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Smart Fluent - AIで実務に集中できる環境をつくる",
  description: "Smart Fluent合同会社のプライバシーポリシー。お客様の個人情報を適切に保護し、業務効率化・AI活用支援サービスを安心してご利用いただくための取り組みをご説明します。",
  robots: "noindex, nofollow", // Generally recommended for legal pages
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">プライバシーポリシー</h1>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 prose dark:prose-invert lg:prose-lg">
        {/* Placeholder Content */}
        <h2>1. 基本方針</h2>
        <p>Smart Fluent合同会社（以下、「当社」といいます。）は、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令及び社内規程等を遵守し、当社で取扱う個人情報の取得、利用、管理を適正に行います。</p>

        <h2>2. 適用範囲</h2>
        <p>本プライバシーポリシーは、当社が行う各種サービスにおいて、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、当社が遵守する方針を示したものです。</p>

        <h2>3. 個人情報の取得と利用目的</h2>
        <p>（ここに具体的な取得方法と利用目的を記載します。例：お問い合わせフォームからの取得、サービス提供のため、等）</p>
        <p><strong>[注意]</strong> これはサンプルテキストです。実際のプライバシーポリシーは、法務担当者（仕様書のLegalステークホルダー）にご確認の上、正式な内容を記載してください。特に改正個人情報保護法への準拠が必要です。</p>

        <h2>4. 個人情報の管理</h2>
        <p>（ここに安全管理措置に関する内容を記載します。）</p>

        <h2>5. 第三者提供の有無</h2>
        <p>（ここに第三者提供に関する内容を記載します。）</p>

        <h2>6. 個人情報の開示・訂正・利用停止等</h2>
        <p>（ここに開示請求等への対応に関する内容を記載します。）</p>

        <h2>7. Cookie（クッキー）の使用について</h2>
        <p>（Cookieポリシーに関する内容、または別ページへのリンクを記載します。）</p>

        <h2>8. プライバシーポリシーの変更について</h2>
        <p>当社は、法令等の制定改廃や情勢の変化により、本ポリシーを適宜見直し、予告なく変更する場合があります。</p>

        <h2>9. お問い合わせ</h2>
        <p>当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。<br />Smart Fluent合同会社<br />（連絡先情報を記載）</p>

        <p>制定日：YYYY年MM月DD日</p>
      </div>
    </div>
  );
}

