import Link from 'next/link'
import { CaseStudyBlock } from '@/components/portfolio/CaseStudyBlock'

export const metadata = {
  title: 'PG 연동 및 오퍼월 연동 | 포트폴리오',
  description: 'GMO PG 연동, PAYPAY 연동, 자동 결제 도입으로 매출 성장 기여',
}

export default function PgOfferwallPage() {
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
          PG 연동 및 오퍼월 연동
        </h1>
        <p className="mt-2 text-sm sm:text-base text-stone-400">2023.04 ~ 진행 중</p>
      </header>

      <div className="space-y-6 sm:space-y-8">
        <CaseStudyBlock label="배경">
          <p>
            일본 시장 진출을 위해 다양한 결제 수단 연동 및 오퍼월 도입을 통한 회원 유입 및 매출 증대를 목표로 한 프로젝트.
          </p>
        </CaseStudyBlock>

        <CaseStudyBlock label="담당 업무">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-stone-200 mb-2">오퍼월 연동</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-stone-300">
                <li>국내 플랫폼에 <strong>&apos;핀크럭스&apos; 오퍼월 연동</strong> 경험, 회원 가입 및 특정 미션 달성 시 업체에 수수료 지불 (ROI 150%)</li>
                <li>일본 GMO 테크와 협업하여 오퍼월 도입, 회원 가입 및 특정 행동 도달 시 광고비 지불</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-stone-200 mb-2">PG 연동</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-stone-300">
                <li>성인 컨텐츠의 특성상 PG 다이렉트 연동이 아닌 <strong>중개 업체와의 연동 필요</strong></li>
                <li>일본 최대 PG 중개사인 <strong>GMO와 협업</strong>하여 약 12종(Visa, Apple Pay 등)의 웹훅 방식 결제 수단 등록</li>
                <li><strong>PAYPAY 연동</strong>: 일본 국민 사용율 50% 이상인 PG 연동으로 기존 매출에 큰 상승분 기여 (사이트 연 매출의 60% 비중)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-stone-200 mb-2">자동 결제 도입</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-stone-300">
                <li>보유한 코인이 일정 코인 수치 미만으로 떨어질 경우 자동으로 코인 충전을 위해 결제 진행되는 기능 구현</li>
                <li>현재 사이트 월 매출의 <strong>10% 비중</strong>을 차지</li>
              </ul>
            </div>
          </div>
        </CaseStudyBlock>

        <CaseStudyBlock label="문제점과 해결법">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-stone-200 mb-2">문제점 1: 일본 개발 문서의 특수성</h4>
              <p className="text-sm text-stone-300 mb-2">
                기존 일본 개발 문서의 경우 글로벌 스탠다드와는 다르게 일본 개발자들만의 언어로 되어있는 케이스가 다수 존재.
              </p>
              <p className="text-sm text-stone-400">
                <strong>해결법:</strong> 개발자들끼리의 커뮤니케이션을 돕기 위해 진행한 소통에서 일본 개발 문화에 대한 점을 습득 및 해당 업체 관리자와 지속적인 커뮤니케이션으로 개발 싱크를 맞춤.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-stone-200 mb-2">문제점 2: 웹훅 처리 실패 케이스</h4>
              <p className="text-sm text-stone-300 mb-2">
                웹훅 방식의 경우 우리 쪽에서 훅을 던져도 상대방 쪽에서 네트워크나 기타 문제로 처리를 못하는 케이스가 종종 발생.
              </p>
              <p className="text-sm text-stone-400">
                <strong>해결법:</strong> 백엔드 개발자와 상의하여 배치 테이블을 실행. 웹훅이 성공적으로 처리되지 않을 경우에 로그로 이슈를 트래킹할 수 있는 시스템 구축.
              </p>
            </div>
          </div>
        </CaseStudyBlock>

        <CaseStudyBlock label="성과 (임팩트)" accent>
          <ul className="list-disc pl-5 space-y-2 text-sm text-stone-300">
            <li><strong>PAYPAY 연동:</strong> 사이트 연 매출의 60% 비중 차지</li>
            <li><strong>자동 결제 도입:</strong> 사이트 월 매출의 10% 비중 차지</li>
            <li><strong>오퍼월 연동:</strong> ROI 150% 달성</li>
            <li>다양한 결제 수단 제공으로 사용자 편의성 향상 및 매출 증대 기여</li>
          </ul>
        </CaseStudyBlock>
      </div>
    </article>
  )
}
