'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: '홈' },
  { href: '/#executive', label: '요약' },
  { href: '/#differentiators', label: '차별화' },
  { href: '/#projects', label: '프로젝트' },
  { href: '/personal', label: '개인 프로젝트' },
  { href: '/#data', label: '데이터' },
  { href: '/#timeline', label: '성장' },
  { href: '/about', label: '소개' },
]

export function Header() {
  const pathname = usePathname() ?? ''

  return (
    <header className="sticky top-0 z-50 border-b border-stone-800 bg-[#0f0f11]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-stone-100 transition-colors hover:text-accent"
        >
          Portfolio
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto sm:gap-2 md:gap-4">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`shrink-0 rounded-lg px-2 py-2 text-sm font-medium transition-colors md:px-3 ${
                pathname === href ? 'text-accent' : 'text-stone-400 hover:bg-stone-800/50 hover:text-stone-100'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
