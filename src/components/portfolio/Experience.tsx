import { experiences } from '@/lib/profile'

export function Experience() {
  return (
    <section
      id="experience"
      className="rounded-3xl border border-stone-800 bg-stone-900/30 p-8 sm:p-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-stone-100">
          경력
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
          Experience
        </span>
      </div>

      <div className="relative">
        {/* 타임라인 세로선 */}
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-stone-700 to-transparent" />

        <ul className="space-y-0">
          {experiences.map((exp, i) => (
            <li key={i} className="relative flex gap-6 pb-10 last:pb-0">
              {/* 타임라인 점 */}
              <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center">
                <div
                  className={`h-3 w-3 rounded-full ${
                    i === 0 ? 'bg-accent ring-4 ring-accent/20' : 'bg-stone-600'
                  }`}
                />
              </div>

              <div className="flex-1 rounded-xl border border-stone-800 bg-stone-900/50 p-5 transition-colors hover:border-stone-700">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-stone-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-accent">
                      {exp.company}
                    </p>
                  </div>
                  <span className="rounded-lg bg-stone-800 px-3 py-1 text-xs font-medium text-stone-400">
                    {exp.period}
                  </span>
                </div>
                {exp.description && (
                  <p className="mt-3 text-sm leading-relaxed text-stone-400">
                    {exp.description}
                  </p>
                )}
                {exp.tags && exp.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-stone-800/80 px-2 py-0.5 text-xs text-stone-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
