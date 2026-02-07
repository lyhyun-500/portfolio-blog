import { skills } from '@/lib/profile'

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
  design: 'Design',
}

export function Skills() {
  const grouped = skills.reduce(
    (acc, s) => {
      if (!acc[s.category]) acc[s.category] = []
      acc[s.category].push(s.name)
      return acc
    },
    {} as Record<string, string[]>
  )

  return (
    <section
      id="skills"
      className="rounded-3xl border border-stone-800 bg-stone-900/30 p-8 sm:p-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-stone-100">
          스킬
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
          Skills
        </span>
      </div>

      <div className="space-y-6">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
              {categoryLabels[category] ?? category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((name) => (
                <span
                  key={name}
                  className="rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-2 text-sm font-medium text-stone-300 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
