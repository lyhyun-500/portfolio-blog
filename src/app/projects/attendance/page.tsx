import Link from 'next/link'
import { CaseStudyBlock } from '@/components/portfolio/CaseStudyBlock'

export const metadata = {
  title: '출석체크 기능 추가 | 포트폴리오',
  description: '룰렛 출석체크로 하루 평균 3만명 고정 회원 확보, 체류시간 및 재방문율 상승',
}

export default function AttendancePage() {
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
          출석체크 기능 추가
        </h1>
        <p className="mt-2 text-sm sm:text-base text-stone-400">2024 ~ 진행 중</p>
      </header>

      <div className="space-y-6 sm:space-y-8">
        <CaseStudyBlock label="배경">
          <p>
            회원 체류시간 증가 및 재방문율 상승을 위해 기획. 매일 무료 출석 룰렛권을 지급하여 지속적인 재방문을 유도하는 기능.
          </p>
        </CaseStudyBlock>

        <CaseStudyBlock label="담당 업무">
          <ul className="list-disc pl-5 space-y-2 text-sm text-stone-300">
            <li>출석체크 룰렛 기능 기획 및 설계</li>
            <li>매일 무료 출석 룰렛권 지급 시스템 구축</li>
            <li>각 상품의 확률 관리 시스템 설계 (관리자가 확률을 통해 관리 가능)</li>
            <li>리워드 &apos;코인&apos; (현재는 PT) 지급 시스템 설계</li>
            <li>데이터 모니터링을 통한 리워드 금액 및 확률 최적화</li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="문제점과 해결법">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-stone-200 mb-2">문제점 1: 구형 핸드폰 호환성</h4>
              <p className="text-sm text-stone-300 mb-2">
                일본의 경우 핸드폰 기종이 옛날 버전인 회원이 많다는 점을 확인. 룰렛에 사용되는 WebP 이미지의 경우 엑박 및 정상적인 경험을 줄 수 없음.
              </p>
              <p className="text-sm text-stone-400">
                <strong>해결법:</strong> 구 버전 폰까지 무리없이 활용 가능한 <strong>JPG 이미지</strong>를 사용하도록 사이트 개편.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-stone-200 mb-2">문제점 2: 리워드 데이터 정밀화 필요</h4>
              <p className="text-sm text-stone-300 mb-2">
                지속적인 재방문을 유도하기 위해 지급되는 리워드 &apos;코인&apos;에 대한 유효 기간 및 확률에 대한 데이터 정밀화 필요.
              </p>
              <p className="text-sm text-stone-400">
                <strong>해결법:</strong> 리워드 금액에 대한 데이터 모니터링을 통해 하루 평균 <strong>3만명의 룰렛 고정 회원</strong>을 확보.
              </p>
            </div>
          </div>
        </CaseStudyBlock>

        <CaseStudyBlock label="성과 (임팩트)" accent>
          <ul className="list-disc pl-5 space-y-2 text-sm text-stone-300">
            <li><strong>하루 평균 3만명의 룰렛 고정 회원</strong> 확보</li>
            <li>회원 체류시간 증가</li>
            <li>재방문율 상승</li>
            <li>일일 활성 사용자(DAU) 증가 기여</li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="배운 점">
          <ul className="list-disc pl-5 space-y-2 text-sm text-stone-300">
            <li>글로벌 서비스에서 <strong>지역별 디바이스 특성을 고려한 기술 선택</strong>의 중요성 (WebP → JPG)</li>
            <li>리워드 시스템의 <strong>데이터 기반 최적화</strong>를 통한 지속적인 개선</li>
            <li>확률 기반 리워드 시스템 설계 및 운영 경험</li>
            <li>사용자 행동 데이터 분석을 통한 기능 개선</li>
          </ul>
        </CaseStudyBlock>
      </div>
    </article>
  )
}
