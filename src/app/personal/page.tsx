import Link from 'next/link'
import { personalProject } from '@/lib/personal-project-data'

export const metadata = {
  title: '개인 프로젝트',
  description: '개인 프로젝트 설계와 고민 정리',
}

export default function PersonalPage() {
  const { status, intro, design, implementations, considerations, postManagement, productionConsiderations } = personalProject

  return (
    <div className="mx-auto max-w-3xl px-3 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16">
      <Link href="/" className="mb-6 sm:mb-8 inline-block text-xs sm:text-sm text-stone-500 hover:text-accent">
        ← 홈
      </Link>

      <header className="mb-8 sm:mb-12">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
          status === '구현 완료' 
            ? 'bg-accent/20 text-accent' 
            : 'bg-stone-700 text-stone-400'
        }`}>
          {status}
        </span>
        <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-stone-100">
          개인 프로젝트
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-400 leading-relaxed">
          {intro}
        </p>
        <div className="mt-4 p-3 bg-accent/10 border border-accent/20 rounded-lg">
          <p className="text-xs sm:text-sm text-stone-300">
            💡 <strong>체험하기:</strong> <Link href="/admin" className="text-accent hover:underline">/admin</Link> 페이지에서 모듈 레이아웃을 직접 관리해보세요!
          </p>
        </div>
      </header>

      {/* 설계 */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-4 sm:mb-6">
          설계
        </h2>
        {design && design.length > 0 ? (
          <ul className="space-y-4 sm:space-y-6">
            {design.map((d, i) => (
              <li key={i} className="rounded-xl border border-stone-800 bg-stone-900/30 p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-medium text-accent">{d.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">{d.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs sm:text-sm text-stone-500">아직 적어둔 설계가 없습니다. <code className="rounded bg-stone-800 px-1.5 py-0.5 text-stone-400">src/lib/personal-project-data.ts</code>의 design 배열에 추가하면 여기에 표시됩니다.</p>
        )}
      </section>

      {/* 구현 내용 */}
      {implementations && implementations.length > 0 && (
        <section className="mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-4 sm:mb-6">
            구현 내용
          </h2>
          <ul className="space-y-3 sm:space-y-4">
            {implementations.map((impl, i) => (
              <li key={i} className="rounded-xl border border-stone-800 bg-stone-900/30 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-medium text-stone-200">{impl.feature}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-stone-400 leading-relaxed">{impl.description}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    impl.status === '완료'
                      ? 'bg-green-900/30 text-green-400 border border-green-800'
                      : impl.status === '진행 중'
                        ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                        : 'bg-stone-700 text-stone-400'
                  }`}>
                    {impl.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 구현 내용 */}
      {implementations && implementations.length > 0 && (
        <section className="mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-4 sm:mb-6">
            구현 내용
          </h2>
          <ul className="space-y-3 sm:space-y-4">
            {implementations.map((impl, i) => (
              <li key={i} className="rounded-xl border border-stone-800 bg-stone-900/30 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-medium text-stone-200">{impl.feature}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-stone-400 leading-relaxed">{impl.description}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    impl.status === '완료'
                      ? 'bg-green-900/30 text-green-400 border border-green-800'
                      : impl.status === '진행 중'
                        ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                        : 'bg-stone-700 text-stone-400'
                  }`}>
                    {impl.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 사후 관리 */}
      {postManagement && postManagement.length > 0 && (
        <section className="mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-4 sm:mb-6">
            사후 관리 계획
          </h2>
          <ul className="space-y-4 sm:space-y-6">
            {postManagement.map((pm, i) => (
              <li key={i} className="rounded-xl border border-stone-800 bg-stone-900/30 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-sm sm:text-base font-medium text-accent">{pm.category}</h3>
                  {pm.priority && (
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      pm.priority === '높음'
                        ? 'bg-red-900/30 text-red-400 border border-red-800'
                        : pm.priority === '중간'
                          ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                          : 'bg-stone-700 text-stone-400'
                    }`}>
                      우선순위: {pm.priority}
                    </span>
                  )}
                </div>
                {pm.items && pm.items.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 text-stone-400 text-xs sm:text-sm space-y-1.5">
                    {pm.items.map((item, j) => (
                      <li key={j} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 실서비스 적용 시 고려사항 */}
      {productionConsiderations && productionConsiderations.length > 0 && (
        <section className="mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-4 sm:mb-6">
            실서비스 적용 시 고려사항
          </h2>
          <ul className="space-y-4 sm:space-y-6">
            {productionConsiderations.map((pc, i) => (
              <li key={i} className="rounded-xl border border-stone-800 bg-stone-900/30 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-sm sm:text-base font-semibold text-stone-200">{pc.title}</h3>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    pc.impact === '높음'
                      ? 'bg-red-900/30 text-red-400 border border-red-800'
                      : pc.impact === '중간'
                        ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                        : 'bg-stone-700 text-stone-400'
                  }`}>
                    영향도: {pc.impact}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-400 mb-3 leading-relaxed">{pc.description}</p>
                {pc.considerations && pc.considerations.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 text-stone-400 text-xs sm:text-sm space-y-1.5">
                    {pc.considerations.map((consideration, j) => (
                      <li key={j} className="leading-relaxed">{consideration}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 고민·선택지 */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-4 sm:mb-6">
          고민 · 선택지
        </h2>
        {considerations && considerations.length > 0 ? (
          <ul className="space-y-4 sm:space-y-6">
            {considerations.map((c, i) => (
              <li key={i} className="rounded-xl border border-stone-800 bg-stone-900/30 p-4 sm:p-5">
                <p className="text-sm sm:text-base font-medium text-stone-200">{c.question}</p>
                {c.options && c.options.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 text-stone-400 text-xs sm:text-sm space-y-1">
                    {c.options.map((o, j) => (
                      <li key={j}>{o}</li>
                    ))}
                  </ul>
                )}
                {c.note && <p className="mt-2 text-xs sm:text-sm text-stone-500">{c.note}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs sm:text-sm text-stone-500">고민 중인 선택지를 적어두면 여기에 정리됩니다. <code className="rounded bg-stone-800 px-1.5 py-0.5 text-stone-400">personal-project-data.ts</code>의 considerations 배열을 채워 보세요.</p>
        )}
      </section>
    </div>
  )
}
