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
        <p className="mt-2 text-sm sm:text-base text-stone-400">2025.12 ~ 2026.01</p>
      </header>

      <div className="space-y-6 sm:space-y-8">
        <CaseStudyBlock label="배경">
          <p>
            일본 3대 출판사 중 하나인 카도카와와의 협업. 요구사항에 맞춘 EPUB 뷰어 기능 연동 및 일본 출판 표준화 작업 참여. 
            미디어두 업체의 API 연동 선행과제로, 카도카와 기준 충족이 필수 조건이었음.
          </p>
        </CaseStudyBlock>

        <CaseStudyBlock label="담당 업무">
          <ul className="list-disc pl-5 space-y-2 text-sm text-stone-300">
            <li>요구사항에 맞춰 EPUB 파일에 대한 <strong>뷰어 기능 연동</strong></li>
            <li><strong>이미지맵</strong> 연동, EPUB 내 메타데이터를 통한 뷰어별 이미지맵·목차(네비게이터) 이동 구현</li>
            <li>일본 출판 <strong>표준화 작업</strong> 참여</li>
            <li>카도카와 사이트의 모든 뷰어에 대한 <strong>기술적 분석 및 역공학</strong></li>
            <li>개발 문서와 실제 구현 사례 간의 <strong>매칭 및 검증</strong></li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="문제점과 해결법">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-stone-200 mb-2">문제점 1: 일본 비즈니스 문화의 긴 일정</h4>
              <p className="text-sm text-stone-300 mb-2">
                일본 문화 자체가 비즈니스 일정이 너무 긴 것이 우리에게는 문제점이었음. 일본 업체와의 커뮤니케이션 싱크를 맞추는 데 한 세월이 걸림.
              </p>
              <p className="text-sm text-stone-400">
                <strong>영향:</strong> 프로젝트 일정이 지연될 위험이 있었고, 빠른 의사결정이 필요한 상황에서 답답함을 느낌.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-stone-200 mb-2">문제점 2: 기술 문서의 용어 차이</h4>
              <p className="text-sm text-stone-300 mb-2">
                개발 문서가 있지만 결국 용어가 다르기 때문에, 내가 보는 EPUB에 대한 데이터를 <strong>직접 분해해서 해석</strong>해야 함.
              </p>
              <p className="text-sm text-stone-400">
                <strong>도전:</strong> 글로벌 스탠다드와 다른 일본식 기술 용어와 구조를 이해하고, 실제 EPUB 파일 구조를 직접 분석해야 했음.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-stone-200 mb-2">해결법: 직접적인 기술 분석 및 역공학</h4>
              <p className="text-sm text-stone-300 mb-2">
                일본 업체와 커뮤니케이션 싱크를 맞추면 한 세월이 걸리기 때문에, <strong>직접 카도카와 사이트에 들어가서 모든 뷰어에 대한 기술적 분석을 끝내고</strong>, 개발 문서와 매칭해서 진행.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-stone-400 mt-2">
                <li>카도카와 공식 사이트의 모든 EPUB 뷰어 기능을 직접 테스트 및 분석</li>
                <li>EPUB 파일 구조를 직접 분해하여 메타데이터, 이미지맵, 네비게이터 구조 파악</li>
                <li>개발 문서의 용어와 실제 구현 사례를 매칭하여 정확한 요구사항 도출</li>
                <li>커뮤니케이션 시간을 단축하고, 기술적 검증을 통해 빠른 개발 진행</li>
              </ul>
            </div>
          </div>
        </CaseStudyBlock>

        <CaseStudyBlock label="기술적 도전과 해결 과정">
          <div className="space-y-3 text-sm text-stone-300">
            <p>
              EPUB 뷰어 연동을 위해 카도카와의 기술 문서를 분석했지만, 일본식 용어와 글로벌 스탠다드 간의 차이로 인해 
              문서만으로는 정확한 구현이 어려웠습니다.
            </p>
            <p>
              <strong>역공학 접근:</strong> 카도카와 사이트에서 실제로 사용 중인 EPUB 뷰어를 직접 분석하여:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>이미지맵이 어떻게 구현되어 있는지</li>
              <li>목차(네비게이터) 이동이 어떤 방식으로 작동하는지</li>
              <li>메타데이터가 어떻게 활용되는지</li>
              <li>뷰어별 차이점과 공통점은 무엇인지</li>
            </ul>
            <p className="mt-3">
              이를 바탕으로 개발 문서와 매칭하여, 일본 업체와의 긴 커뮤니케이션 과정 없이도 
              정확한 요구사항을 파악하고 빠르게 개발을 진행할 수 있었습니다.
            </p>
          </div>
        </CaseStudyBlock>

        <CaseStudyBlock label="성과" accent>
          <ul className="list-disc pl-5 space-y-2 text-sm text-stone-300">
            <li>미디어두 업체의 API 연동 선행과제인 <strong>카도카와 기준 충족</strong> 달성</li>
            <li><strong>소설·사진집에 대한 출판 계약 확보</strong>에 기여</li>
            <li>일본 업체와의 긴 커뮤니케이션 시간을 단축하고, <strong>직접적인 기술 분석을 통한 빠른 문제 해결</strong></li>
            <li>글로벌 스탠다드와 다른 일본 기술 환경에 대한 <strong>적응력과 문제 해결 능력</strong> 입증</li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="배운 점">
          <ul className="list-disc pl-5 space-y-2 text-sm text-stone-300">
            <li><strong>글로벌 협업에서 문화적 차이를 극복하는 방법:</strong> 직접적인 기술 분석과 역공학을 통한 빠른 문제 해결</li>
            <li><strong>문서만으로는 부족할 때:</strong> 실제 구현 사례를 직접 분석하여 정확한 요구사항 도출</li>
            <li><strong>일본 비즈니스 문화 이해:</strong> 긴 일정과 신중한 커뮤니케이션 특성을 고려한 프로젝트 관리</li>
            <li><strong>기술적 독립성:</strong> 외부 의존 없이 직접 분석하고 해결하는 능력의 중요성</li>
          </ul>
        </CaseStudyBlock>
      </div>
    </article>
  )
}
