import Link from 'next/link'
import { personalProject } from '@/lib/personal-project-data'

export const metadata = {
  title: '개인 프로젝트',
  description: '개인 프로젝트 설계와 고민 정리',
}

export default function PersonalPage() {
  const { status, intro, design, considerations } = personalProject

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/" className="mb-8 inline-block text-sm text-stone-500 hover:text-accent">
        ← 홈
      </Link>

      <header className="mb-12">
        <span className="rounded-full bg-stone-700 px-2.5 py-0.5 text-xs font-medium text-stone-400">
          {status}
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-100">
          개인 프로젝트
        </h1>
        <p className="mt-4 text-stone-400 leading-relaxed">
          {intro}
        </p>
      </header>

      {/* 설계 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-6">
          설계
        </h2>
        {design && design.length > 0 ? (
          <ul className="space-y-6">
            {design.map((d, i) => (
              <li key={i} className="rounded-xl border border-stone-800 bg-stone-900/30 p-5">
                <h3 className="font-medium text-accent">{d.title}</h3>
                <p className="mt-2 text-stone-400 text-sm leading-relaxed">{d.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-stone-500 text-sm">아직 적어둔 설계가 없습니다. <code className="rounded bg-stone-800 px-1.5 py-0.5 text-stone-400">src/lib/personal-project-data.ts</code>의 design 배열에 추가하면 여기에 표시됩니다.</p>
        )}
      </section>

      {/* 고민·선택지 */}
      <section>
        <h2 className="text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-6">
          고민 · 선택지
        </h2>
        {considerations && considerations.length > 0 ? (
          <ul className="space-y-6">
            {considerations.map((c, i) => (
              <li key={i} className="rounded-xl border border-stone-800 bg-stone-900/30 p-5">
                <p className="font-medium text-stone-200">{c.question}</p>
                {c.options && c.options.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 text-stone-400 text-sm space-y-1">
                    {c.options.map((o, j) => (
                      <li key={j}>{o}</li>
                    ))}
                  </ul>
                )}
                {c.note && <p className="mt-2 text-stone-500 text-sm">{c.note}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-stone-500 text-sm">고민 중인 선택지를 적어두면 여기에 정리됩니다. <code className="rounded bg-stone-800 px-1.5 py-0.5 text-stone-400">personal-project-data.ts</code>의 considerations 배열을 채워 보세요.</p>
        )}
      </section>
    </div>
  )
}
