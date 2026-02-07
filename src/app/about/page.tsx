import { about } from '@/lib/about-data'

export const metadata = {
  title: '소개',
  description: '데이터 기반 그로스 기획자 소개 및 브랜딩 스토리',
}

export default function AboutPage() {
  const { headline, mindset, growthStory, forward, tools, contact } = about

  return (
    <div className="mx-auto max-w-3xl px-3 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-100">
        소개
      </h1>
      <p className="mt-3 sm:mt-4 text-base sm:text-lg text-accent font-medium">
        {headline}
      </p>

      {/* 어떻게 생각하는지 */}
      <section className="mt-8 sm:mt-12">
        <h2 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-3 sm:mb-4">
          어떻게 생각하는지
        </h2>
        <ul className="space-y-3 sm:space-y-4">
          {mindset.map((m, i) => (
            <li key={i} className="flex gap-2 sm:gap-3 text-sm sm:text-base text-stone-300">
              <span className="text-accent shrink-0">•</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 성장해온 과정 */}
      <section className="mt-8 sm:mt-12">
        <h2 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-3 sm:mb-4">
          성장해온 과정
        </h2>
        <ul className="space-y-4 sm:space-y-6">
          {growthStory.map((g, i) => (
            <li key={i} className="rounded-xl border border-stone-800 bg-stone-900/30 p-4 sm:p-5">
              <span className="text-xs sm:text-sm font-medium text-accent">{g.period}</span>
              <p className="mt-2 text-sm sm:text-base text-stone-300 leading-relaxed">{g.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 앞으로 하고 싶은 것 */}
      <section className="mt-8 sm:mt-12">
        <h2 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-3 sm:mb-4">
          앞으로 하고 싶은 것
        </h2>
        <ul className="space-y-2 sm:space-y-3">
          {forward.map((f, i) => (
            <li key={i} className="flex gap-2 sm:gap-3 text-sm sm:text-base text-stone-300">
              <span className="text-accent shrink-0">→</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 기술·도구 */}
      <section className="mt-8 sm:mt-12">
        <h2 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-3 sm:mb-4">
          사용 도구
        </h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-lg bg-stone-800 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-stone-400"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* 연락처 */}
      <section className="mt-8 sm:mt-12">
        <h2 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-3 sm:mb-4">
          연락처
        </h2>
        <p className="text-sm sm:text-base text-stone-400">{contact.email}</p>
        {contact.linkedin && (
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm sm:text-base text-accent hover:underline"
          >
            LinkedIn
          </a>
        )}
        <p className="mt-3 text-xs sm:text-sm text-stone-500">{contact.note}</p>
      </section>
    </div>
  )
}
