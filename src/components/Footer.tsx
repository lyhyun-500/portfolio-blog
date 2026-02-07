import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-stone-800 bg-surface py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 sm:flex-row">
          <p className="text-xs sm:text-sm text-stone-500 text-center sm:text-left">
            © {year} 포트폴리오. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="/about"
              className="text-xs sm:text-sm text-stone-500 transition-colors hover:text-accent"
            >
              소개
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
