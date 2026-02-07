import Link from 'next/link'
import { CaseStudyBlock } from '@/components/portfolio/CaseStudyBlock'

export const metadata = {
  title: '일본 카도카와 협업 · EPUB 뷰어 연동 | 포트폴리오',
  description: '일본 3대 출판사 카도카와 요구사항 대응, 출판 계약 확보',
}

export default function KadokawaPage() {
  return (
    <article className="mx-auto max-w-3xl px-3 py-8 sm:px-4 sm:py-12 md:px-6">
      <Link href="/#projects" className="mb-6 sm:mb-8 inline-block text-xs sm:text-sm text-stone-500 hover:text-accent">
        ← 프로젝트 목록
      </Link>

      <header className="mb-8 sm:mb-12">
        <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent">
          성공
        </span>
        <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-stone-100">
          일본 3대 출판사 카도카와 협업 · EPUB 뷰어 연동
        </h1>
        <p className="mt-2 text-sm sm:text-base text-stone-400">2025.12 ~ 2026.11</p>
      </header>

      <div className="space-y-6 sm:space-y-8">
        <CaseStudyBlock label="배경">
          <p>일본 3대 출판사 중 하나인 카도카와와의 협업. 요구사항에 맞춘 EPUB 뷰어 기능 연동 및 일본 출판 표준화 작업 참여.</p>
        </CaseStudyBlock>

        <CaseStudyBlock label="담당 업무">
          <ul className="list-disc pl-5 space-y-1">
            <li>요구사항에 맞춰 EPUB 파일에 대한 <strong>뷰어 기능 연동</strong></li>
            <li><strong>이미지맵</strong> 연동, EPUB 내 메타데이터를 통한 뷰어별 이미지맵·목차(네비게이터) 이동 구현</li>
            <li>일본 출판 <strong>표준화 작업</strong> 참여</li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="성과 (임팩트)" accent>
          <p>미디어 2개 업체의 API 연동 선행과제인 <strong>카도카와 기준 충족</strong>으로, <strong>소설·사진집에 대한 출판 계약 확보</strong>에 기여.</p>
        </CaseStudyBlock>
      </div>
    </article>
  )
}
