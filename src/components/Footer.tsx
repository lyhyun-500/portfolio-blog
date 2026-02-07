import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-stone-800 bg-surface py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-stone-500">
            © {year} 포트폴리오 블로그. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/blog"
              className="text-sm text-stone-500 transition-colors hover:text-accent"
            >
              블로그
            </Link>
            <Link
              href="/about"
              className="text-sm text-stone-500 transition-colors hover:text-accent"
            >
              소개
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
