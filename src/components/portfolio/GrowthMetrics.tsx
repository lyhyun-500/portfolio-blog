import { growthMetrics } from '@/lib/portfolio-data'
import { MonthlyRevenueChart, YearlyRevenueChart, FirstPaymentRateChart } from './RevenueCharts'

export function GrowthMetrics() {
  const { revenue, milestones } = growthMetrics

  return (
    <section
      id="metrics"
      className="rounded-2xl sm:rounded-3xl border border-stone-800 bg-stone-900/30 p-4 sm:p-6 md:p-8 lg:p-10"
    >
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-100">
          플랫폼 성장 지표
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
          2페이지
        </span>
      </div>

      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        {/* 월별 매출 추이 그래프 */}
        <div>
          <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-accent">
            월별 매출 추이 (2022.06 ~ 2026.01)
          </h3>
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-stone-500">
            일본 시장 월별 매출 성장 추이 (억 원 단위)
          </p>
          <div className="rounded-lg border border-stone-800 bg-stone-950/50 p-3 sm:p-4">
            <MonthlyRevenueChart />
          </div>
        </div>

        {/* 연도별 매출 비교 */}
        <div>
          <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-accent">
            연도별 매출 비교
          </h3>
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-stone-500">
            2022년 대비 연도별 성장률 비교
          </p>
          <div className="rounded-lg border border-stone-800 bg-stone-950/50 p-3 sm:p-4">
            <YearlyRevenueChart />
          </div>
        </div>

        {/* 첫결율 추이 */}
        <div>
          <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-accent">
            첫 결제율 추이
          </h3>
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-stone-500">
            가입자 대비 첫 결제 전환율 변화 (2023.03 ~ 2026.01)
          </p>
          <div className="rounded-lg border border-stone-800 bg-stone-950/50 p-3 sm:p-4">
            <FirstPaymentRateChart />
          </div>
        </div>

        {/* 매출 성장 추이 (텍스트 요약) */}
        <div>
          <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-accent">매출 성장 요약</h3>
          <div className="space-y-3 sm:space-y-4">
            {revenue.map((r, i) => (
              <div key={i} className="flex flex-col gap-1.5 sm:gap-2 sm:flex-row sm:items-center">
                <span className="w-full sm:w-40 shrink-0 text-xs sm:text-sm font-medium text-stone-500">
                  {r.year}
                </span>
                <span className="text-sm sm:text-base text-stone-300">{r.value}</span>
                {i < revenue.length - 1 && (
                  <span className="hidden sm:inline text-stone-600">↓</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 주요 마일스톤 */}
        <div>
          <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-accent">주요 마일스톤</h3>
          <ul className="space-y-1.5 sm:space-y-2">
            {milestones.map((m, i) => (
              <li key={i} className="flex gap-2 text-sm sm:text-base text-stone-400">
                <span className="text-accent shrink-0">•</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
