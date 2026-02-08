import Link from 'next/link'
import { CaseStudyBlock } from '@/components/portfolio/CaseStudyBlock'

export const metadata = {
  title: '이상형 월드컵 기능 | 포트폴리오',
  description: '체류시간 증가를 위한 이상형 월드컵 기능 설계 및 구현',
}

export default function WorldcupPage() {
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
          이상형 월드컵 기능
        </h1>
        <p className="mt-2 text-sm sm:text-base text-stone-400">2024.10 ~ 2024.11</p>
      </header>

      <div className="space-y-6 sm:space-y-8">
        <CaseStudyBlock label="배경">
          <p>사이트 내 <strong>유저 체류시간을 높이기</strong> 위해 설계·테스트한 비디오 영상 삽입 기능.</p>
        </CaseStudyBlock>

        <CaseStudyBlock label="기능 설명">
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>각 작품별 캐릭터 값 부여</strong> — 작품 내 캐릭터에 속성값 할당</li>
            <li><strong>캐릭터 값에 따른 매칭 진행</strong> — 사용자 선택에 따라 캐릭터 매칭 알고리즘 실행</li>
            <li><strong>어드민에서 시즌별 이상형 월드컵 세팅</strong> — 관리자 페이지에서 시즌·캐릭터 풀 설정</li>
            <li><strong>회원 개별에게 우승 캐릭터에 대한 작품 리워드 지급</strong> — 우승 캐릭터가 나온 작품에 대한 혜택 제공</li>
          </ul>
        </CaseStudyBlock>

        {/* 비디오 */}
        <div className="rounded-lg sm:rounded-xl border border-stone-800 bg-stone-900/30 p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
            데모 영상
          </p>
          <video
            controls
            className="w-full rounded-lg"
            preload="metadata"
          >
            <source src="/videos/worldcup-demo.mp4" type="video/mp4" />
            브라우저가 비디오 태그를 지원하지 않습니다.
          </video>
        </div>

        <CaseStudyBlock label="성과" accent>
          <ul className="space-y-2">
            <li><strong>평균 체류시간:</strong> 2분 증가</li>
            <li><strong>고정 회원:</strong> 매일 1만명 확보</li>
          </ul>
        </CaseStudyBlock>
      </div>
    </article>
  )
}
