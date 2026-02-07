import { timeline, coreCapabilities } from '@/lib/portfolio-data'

export function Timeline() {
  return (
    <section
      id="timeline"
      className="rounded-2xl sm:rounded-3xl border border-stone-800 bg-stone-900/30 p-4 sm:p-6 md:p-8 lg:p-10"
    >
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-100">
          경력 및 성장
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
          11페이지
        </span>
      </div>

      <div className="relative">
        <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-stone-700 to-transparent" />
        <div className="space-y-0">
          {timeline.map((t, i) => (
            <div key={i} className="relative flex gap-3 sm:gap-4 md:gap-6 pb-6 sm:pb-8 md:pb-10 last:pb-0">
              <div className="relative z-10 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center">
                <div
                  className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full ${
                    i === 0 ? 'bg-accent ring-2 sm:ring-4 ring-accent/20' : 'bg-stone-600'
                  }`}
                />
              </div>
              <div className="flex-1 rounded-lg sm:rounded-xl border border-stone-800 bg-stone-900/50 p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold text-accent">{t.year}</h3>
                <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                  {t.learned.length > 0 && (
                    <p className="text-xs sm:text-sm text-stone-500">배운 것: {t.learned.join(', ')}</p>
                  )}
                  {t.work.length > 0 && (
                    <p className="text-xs sm:text-sm text-stone-400">담당: {t.work.join(', ')}</p>
                  )}
                  {t.achievement && (
                    <p className="text-xs sm:text-sm font-medium text-stone-200">
                      성과: {t.achievement}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10 border-t border-stone-800 pt-6 sm:pt-8">
        <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-accent">핵심 역량 요약</h3>
        <ul className="space-y-1.5 sm:space-y-2">
          {coreCapabilities.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-stone-400">
              <span className="text-accent shrink-0">✓</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
