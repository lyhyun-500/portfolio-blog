import { timeline, coreCapabilities } from '@/lib/portfolio-data'

export function Timeline() {
  return (
    <section
      id="timeline"
      className="rounded-3xl border border-stone-800 bg-stone-900/30 p-8 sm:p-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-stone-100">
          3년간의 성장 및 역량
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
          11페이지
        </span>
      </div>

      <div className="relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-stone-700 to-transparent" />
        <div className="space-y-0">
          {timeline.map((t, i) => (
            <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center">
                <div
                  className={`h-3 w-3 rounded-full ${
                    i === 0 ? 'bg-accent ring-4 ring-accent/20' : 'bg-stone-600'
                  }`}
                />
              </div>
              <div className="flex-1 rounded-xl border border-stone-800 bg-stone-900/50 p-5">
                <h3 className="font-semibold text-accent">{t.year}</h3>
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-stone-500">배운 것: {t.learned.join(', ')}</p>
                  <p className="text-sm text-stone-400">담당: {t.work.join(', ')}</p>
                  {t.achievement && (
                    <p className="text-sm font-medium text-stone-200">
                      성과: {t.achievement}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-stone-800 pt-8">
        <h3 className="mb-4 text-lg font-semibold text-accent">핵심 역량 요약</h3>
        <ul className="space-y-2">
          {coreCapabilities.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-stone-400">
              <span className="text-accent">✓</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
