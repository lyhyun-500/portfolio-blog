import Link from 'next/link'
import { profile, cover } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-800 bg-gradient-to-br from-stone-900/90 via-stone-900/70 to-accent/10 p-4 sm:p-6 md:p-10 lg:p-14 xl:p-20 text-center"
    >
      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-100">
          {cover.headline}
        </h1>
        <ul className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
          {cover.metrics.map((m, i) => (
            <li key={i} className="text-base sm:text-lg md:text-xl text-stone-300">
              {m}
            </li>
          ))}
        </ul>
        <div className="mt-6 sm:mt-10 space-y-1">
          <p className="text-sm sm:text-base text-stone-500">
            Portfolio by <span className="font-semibold text-stone-400">{profile.name}</span>
          </p>
          <p className="text-xs sm:text-sm font-medium text-accent">{profile.title}</p>
        </div>
        <p className="mt-4 sm:mt-6 text-xs leading-relaxed text-stone-600 max-w-lg mx-auto px-2">
          {profile.disclaimer}
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          <Link
            href="#executive"
            className="rounded-lg sm:rounded-xl bg-accent px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white transition-all hover:bg-accent-dark"
          >
            요약 보기
          </Link>
          <Link
            href="#projects"
            className="rounded-lg sm:rounded-xl border border-stone-600 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-stone-300 transition-colors hover:border-stone-500 hover:bg-stone-800/50"
          >
            핵심 프로젝트
          </Link>
          <Link
            href="#timeline"
            className="rounded-lg sm:rounded-xl border border-stone-600 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-stone-400 transition-colors hover:border-stone-500 hover:text-stone-100"
          >
            3년 성장
          </Link>
        </div>
      </div>
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-stone-600/10 blur-2xl" />
    </section>
  )
}
