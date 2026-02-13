import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: '일본 웹툰 플랫폼 10배 성장 | Data-Driven PM 포트폴리오',
  description: '일매출 1,000% 성장, 3만 작품·300만 유저 운영. 데이터 기반 그로스 기획 포트폴리오',
  keywords: ['포트폴리오', 'PM', 'Product Manager', '웹툰', '그로스', '데이터 분석', '일본 시장'],
  authors: [{ name: '이용현' }],
  openGraph: {
    title: '일본 웹툰 플랫폼 10배 성장 | Data-Driven PM 포트폴리오',
    description: '일매출 1,000% 성장, 3만 작품·300만 유저 운영. 데이터 기반 그로스 기획 포트폴리오',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: '일본 웹툰 플랫폼 10배 성장 | Data-Driven PM 포트폴리오',
    description: '일매출 1,000% 성장, 3만 작품·300만 유저 운영. 데이터 기반 그로스 기획 포트폴리오',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-[#0f0f11]" suppressHydrationWarning>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
