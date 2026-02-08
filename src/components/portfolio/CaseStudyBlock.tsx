// 케이스 스터디 한 블록 — 문제 / 가설 / 실행 / 성과 / 배운 점

interface CaseStudyBlockProps {
  label: string
  children: React.ReactNode
  accent?: boolean
}

export function CaseStudyBlock({ label, children, accent }: CaseStudyBlockProps) {
  return (
    <div className={`rounded-lg sm:rounded-xl border p-3 sm:p-4 md:p-5 ${accent ? 'border-accent/40 bg-accent/5' : 'border-stone-800 bg-stone-900/30'}`}>
      <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2 sm:mb-3">
        {label}
      </p>
      <div className="case-study-content text-sm sm:text-base text-stone-300 whitespace-pre-line">{children}</div>
    </div>
  )
}
