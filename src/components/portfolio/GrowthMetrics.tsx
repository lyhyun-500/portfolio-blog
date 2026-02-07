import { growthMetrics } from '@/lib/portfolio-data'

export function GrowthMetrics() {
  const { revenue, milestones } = growthMetrics

  return (
    <section
      id="metrics"
      className="rounded-3xl border border-stone-800 bg-stone-900/30 p-8 sm:p-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-stone-100">
          플랫폼 성장 지표
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
          2페이지
        </span>
      </div>

      <div className="space-y-10">
        {/* 매출 성장 추이 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-accent">매출 성장 추이</h3>
          <div className="space-y-4">
            {revenue.map((r, i) => (
              <div key={i} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <span className="w-40 shrink-0 text-sm font-medium text-stone-500">
                  {r.year}
                </span>
                <span className="text-stone-300">{r.value}</span>
                {i < revenue.length - 1 && (
                  <span className="hidden sm:inline text-stone-600">↓</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex h-3 w-full overflow-hidden rounded-full bg-stone-800">
            <div
              className="bg-gradient-to-r from-accent/80 to-accent transition-all"
              style={{ width: '100%' }}
              title="성장 추이"
            />
          </div>
        </div>

        {/* 주요 마일스톤 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-accent">주요 마일스톤</h3>
          <ul className="space-y-2">
            {milestones.map((m, i) => (
              <li key={i} className="flex gap-2 text-stone-400">
                <span className="text-accent">•</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
