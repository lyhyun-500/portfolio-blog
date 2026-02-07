import { executiveSummary } from '@/lib/portfolio-data'

export function ExecutiveSummary() {
  const { platform, myRole, tech } = executiveSummary

  return (
    <section
      id="executive"
      className="rounded-3xl border border-stone-800 bg-stone-900/30 p-8 sm:p-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-stone-100">
          Executive Summary
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
          1페이지
        </span>
      </div>

      <div className="space-y-10">
        {/* 플랫폼 개요 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-accent">플랫폼 개요</h3>
          <ul className="space-y-2 text-stone-400">
            <li><span className="text-stone-500">유형:</span> {platform.type}</li>
            <li><span className="text-stone-500">비즈니스 모델:</span> {platform.businessModel}</li>
            <li className="pt-2 font-medium text-stone-300">주요 지표:</li>
            <li className="pl-4">━ 일매출: {platform.indicators.dailyRevenue}</li>
            <li className="pl-4">━ 연 거래액: {platform.indicators.annualTransaction}</li>
            <li className="pl-4">━ 콘텐츠: {platform.indicators.works}</li>
            <li className="pl-4">━ MAU: {platform.indicators.mau}</li>
            <li className="pl-4">━ 시장: {platform.indicators.market}</li>
          </ul>
        </div>

        {/* 나의 역할 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-accent">나의 역할 ({myRole.period})</h3>
          <ul className="space-y-2 text-stone-400">
            <li><span className="text-stone-500">직급:</span> {myRole.career}</li>
            <li><span className="text-stone-500">직무:</span> {myRole.job}</li>
            <li className="pt-2 font-medium text-stone-300">핵심 성과:</li>
            {myRole.achievements.map((a, i) => (
              <li key={i} className="pl-4">━ {a}</li>
            ))}
          </ul>
        </div>

        {/* 사용 기술 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-accent">사용 기술</h3>
          <div className="flex flex-wrap gap-2">
            {tech.data.map((t) => (
              <span key={t} className="rounded-lg bg-stone-800 px-3 py-1 text-sm text-stone-400">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-2 text-sm text-stone-500">
            협업: {tech.collaboration.join(', ')}
          </p>
        </div>
      </div>
    </section>
  )
}
