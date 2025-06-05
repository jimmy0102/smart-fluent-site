import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | Smart Fluent - AIで実務に集中できる環境をつくる",
  description: "合同会社SMART FLUENTのサービス利用規約。AI活用支援、DX導入支援、システム開発等のサービスを安心してご利用いただくための規約です。",
  robots: "noindex, nofollow", // Generally recommended for legal pages
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">利用規約</h1>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 prose dark:prose-invert lg:prose-lg">
        {/* Placeholder Content */}
        <h2>第1条（適用）</h2>
        <p>本規約は、合同会社SMART FLUENT（以下、「当社」といいます。）が提供する一切のサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆様（以下、「ユーザー」といいます。）には、本規約に従って本サービスをご利用いただきます。</p>

        <h2>第2条（定義）</h2>
        <p>（ここに本規約で使用する用語の定義を記載します。）</p>

        <h2>第3条（利用登録）</h2>
        <p>（サービスに利用登録が必要な場合のプロセスを記載します。）</p>

        <h2>第4条（利用料金および支払方法）</h2>
        <p>（有料サービスの場合の料金、支払方法等を記載します。）</p>

        <h2>第5条（禁止事項）</h2>
        <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。<br />（禁止行為のリストを記載します。）</p>

        <h2>第6条（本サービスの提供の停止等）</h2>
        <p>（サービス停止の条件等を記載します。）</p>

        <h2>第7条（著作権）</h2>
        <p>（コンテンツの著作権に関する規定を記載します。）</p>

        <h2>第8条（免責事項）</h2>
        <p>（当社の免責事項について記載します。）</p>

        <h2>第9条（規約の変更）</h2>
        <p>当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。</p>

        <h2>第10条（準拠法・裁判管轄）</h2>
        <p>本規約の解釈にあたっては、日本法を準拠法とします。<br />本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>

        <p><strong>[注意]</strong> これはサンプルテキストです。実際の利用規約は、法務担当者（仕様書のLegalステークホルダー）にご確認の上、SaaS提供なども見据えた正式な内容を記載してください。</p>

        <p>制定日：YYYY年MM月DD日</p>
      </div>
    </div>
  );
}

