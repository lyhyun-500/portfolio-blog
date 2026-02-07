'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-stone-800 bg-[#0f0f11]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8">
        <Link
          href="/"
          className="text-base sm:text-lg font-semibold tracking-tight text-stone-100 transition-colors hover:text-accent"
        >
          Portfolio
        </Link>
        
        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`shrink-0 rounded-lg px-2 py-2 text-xs lg:text-sm font-medium transition-colors lg:px-3 ${
                pathname === href ? 'text-accent' : 'text-stone-400 hover:bg-stone-800/50 hover:text-stone-100'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 모바일 햄버거 메뉴 */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-400 hover:text-stone-100"
          aria-label="메뉴"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-stone-800 bg-[#0f0f11]">
          <div className="mx-auto max-w-6xl px-4 py-2 space-y-1">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-accent bg-stone-800/50'
                    : 'text-stone-400 hover:bg-stone-800/50 hover:text-stone-100'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
