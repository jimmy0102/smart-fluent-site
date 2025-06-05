import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | SMART FLUENT - AIで実務に集中できる環境をつくる",
  description: "合同会社SMART FLUENTの特定商取引法に基づく表記。事業者情報、サービス内容、お支払方法等の詳細情報をご確認いただけます。",
  robots: "noindex, nofollow",
};

export default function TokuteiPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">特定商取引法に基づく表記</h1>
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        
        <div className="space-y-8">
          <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">事業者名</h3>
            <p className="text-gray-700 dark:text-gray-300">合同会社SMART FLUENT</p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">代表者</h3>
            <p className="text-gray-700 dark:text-gray-300">代表 林 和樹</p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">所在地</h3>
            <p className="text-gray-700 dark:text-gray-300">〒664-0842<br />兵庫県伊丹市西台3丁目9番22号 西台駅前ビル208-17</p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">連絡先</h3>
            <p className="text-gray-700 dark:text-gray-300">
              メールアドレス：contact@smart-fluent.net<br />
              ※お電話でのお問い合わせは、メールにてご連絡いただければ折り返しご連絡いたします。
            </p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">設立日</h3>
            <p className="text-gray-700 dark:text-gray-300">2025年5月23日</p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">事業内容</h3>
            <div className="text-gray-700 dark:text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>DX事業（デジタルトランスフォーメーション支援）</li>
                <li>AIソリューション事業（AI活用支援、AI研修等）</li>
                <li>BPO（Business Process Outsourcing）</li>
                <li>システム開発・導入支援</li>
                <li>補助金申請支援</li>
                <li>業務効率化・自動化コンサルティング</li>
              </ul>
            </div>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">販売価格</h3>
            <p className="text-gray-700 dark:text-gray-300">
              サービスの種類・内容により異なります。<br />
              詳細は、お見積もり時またはサービス契約時に個別にご提示いたします。<br />
              価格はすべて税込表示です。
            </p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">支払方法</h3>
            <div className="text-gray-700 dark:text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>銀行振込（前払い）</li>
                <li>クレジットカード決済（Stripe決済システム利用）</li>
                <li>その他、当社が指定する方法</li>
              </ul>
              <p className="mt-3 text-sm">※支払方法の詳細は、契約時に個別にご案内いたします。</p>
            </div>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">支払時期</h3>
            <p className="text-gray-700 dark:text-gray-300">
              サービス契約時に個別に定める支払スケジュールに従います。<br />
              一般的には、契約締結時の前払い、または月末締め翌月末支払いとなります。
            </p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">サービス提供時期</h3>
            <p className="text-gray-700 dark:text-gray-300">
              契約締結後、個別に定めるスケジュールに基づいてサービスを提供いたします。<br />
              具体的な開始時期・納期は、サービス内容により異なるため、契約時に個別にご案内いたします。
            </p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">キャンセル・返金について</h3>
            <div className="text-gray-700 dark:text-gray-300">
              <p className="mb-3">サービスの性質上、以下の条件でキャンセル・返金を承ります：</p>
              <ul className="list-disc list-inside space-y-2">
                <li>サービス開始前：契約締結から8日以内であれば、理由を問わずキャンセル可能（全額返金）</li>
                <li>サービス開始後：原則として返金不可。ただし、当社都合による場合は協議の上対応</li>
                <li>月額サービス：当月末までに解約申し出をいただければ、翌月以降の課金停止</li>
              </ul>
              <p className="mt-3 text-sm">※詳細は利用規約およびサービス契約書をご確認ください。</p>
            </div>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">動作環境</h3>
            <div className="text-gray-700 dark:text-gray-300">
              <p className="mb-3">ウェブサービス利用時の推奨環境：</p>
              <ul className="list-disc list-inside space-y-2">
                <li>インターネット接続環境</li>
                <li>最新版のWebブラウザ（Chrome、Firefox、Safari、Edge等）</li>
                <li>JavaScript有効</li>
              </ul>
              <p className="mt-3 text-sm">※システム開発等の個別サービスの動作環境は、契約時に個別にご案内いたします。</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">その他</h3>
            <div className="text-gray-700 dark:text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>サービス内容の詳細は、お問い合わせまたは契約時に個別にご説明いたします</li>
                <li>本表記内容は、法令等の改正により予告なく変更する場合があります</li>
                <li>苦情・相談については、上記連絡先までお問い合わせください</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-600 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>制定日:</strong> 2025年5月23日<br />
            <strong>最終更新日:</strong> 2025年6月5日
          </p>
        </div>
      </div>
    </div>
  );
}