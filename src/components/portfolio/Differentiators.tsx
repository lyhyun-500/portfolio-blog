import { differentiators } from '@/lib/portfolio-data'

export function Differentiators() {
  return (
    <section
      id="differentiators"
      className="rounded-3xl border border-stone-800 bg-stone-900/30 p-8 sm:p-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-stone-100">
          핵심 포지셔닝
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
          3대 차별화 포인트
        </span>
      </div>

      <div className="space-y-6">
        {differentiators.map((d, i) => (
          <div
            key={i}
            className="rounded-2xl border border-stone-700 bg-stone-800/30 p-6 transition-colors hover:border-stone-600"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold text-stone-100">{d.title}</h3>
            </div>
            <ul className="space-y-1.5 pl-10 text-stone-400">
              {d.points.map((p, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-stone-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
