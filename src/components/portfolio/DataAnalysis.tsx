export function DataAnalysis() {
  return (
    <section
      id="data"
      className="rounded-2xl sm:rounded-3xl border border-stone-800 bg-stone-900/30 p-4 sm:p-6 md:p-8 lg:p-10"
    >
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-100">
          데이터 분석 역량
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
          9페이지
        </span>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div>
          <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-accent">SQL 쿼리 작성 능력</h3>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base text-stone-400">작업 빈도: 주 수십 건</p>
          <ul className="mb-3 sm:mb-4 space-y-1 text-xs sm:text-sm text-stone-500">
            <li>• 매출 집계: 일/주/월 단위</li>
            <li>• 회원 세그먼트: RFM 분석</li>
            <li>• 코호트 분석: 가입 시점별 리텐션</li>
            <li>• 작품 성과: 조회수/구매율/완독률</li>
            <li>• 프로모션 효과: A/B 테스트 결과</li>
          </ul>
          <pre className="overflow-x-auto rounded-lg sm:rounded-xl bg-stone-950 p-3 sm:p-4 text-xs sm:text-sm text-stone-300">
            <code>{`-- 일본 vs 한국 시장 매출 비교
SELECT 
  country,
  DATE(payment_date) as date,
  SUM(amount) as daily_revenue,
  COUNT(DISTINCT user_id) as paying_users
FROM payments
WHERE payment_date >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY country, DATE(payment_date)
ORDER BY date DESC;`}</code>
          </pre>
        </div>

        <div>
          <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-accent">Tableau 활용</h3>
          <p className="mb-2 text-xs sm:text-sm text-stone-400">
            가능한 대시보드: 매출 모니터링, 회원 행동 Funnel, 프로모션 효과 A/B 비교
          </p>
          <p className="text-xs text-stone-500">
            ※ SQL 쿼리 결과를 Tableau에 연결하여 즉시 시각화 가능한 역량 보유
          </p>
        </div>

        <div>
          <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-accent">Python 활용</h3>
          <p className="text-sm sm:text-base text-stone-400">
            작품 업로드 자동화 (pandas, DB 연동), 주간 리포트 자동 생성, 데이터 전처리
          </p>
        </div>
      </div>
    </section>
  )
}
