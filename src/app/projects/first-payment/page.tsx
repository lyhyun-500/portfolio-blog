import Link from 'next/link'
import { CaseStudyBlock } from '@/components/portfolio/CaseStudyBlock'

export const metadata = {
  title: '첫 결제율 100% 개선 | 포트폴리오',
  description: '행동 기반 타겟 프로모션으로 전환율 2배 달성',
}

export default function FirstPaymentPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/#projects" className="mb-8 inline-block text-sm text-stone-500 hover:text-accent">
        ← 프로젝트 목록
      </Link>

      <header className="mb-12">
        <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent">
          성공
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-100">
          케이스 스터디: 첫 결제율 100% 개선
        </h1>
        <p className="mt-2 text-stone-400">문제 → 가설 → 실행 → 성과 → 배운 점</p>
      </header>

      <div className="space-y-8">
        <CaseStudyBlock label="문제">
          <ul className="list-disc pl-5 space-y-1">
            <li>무료 회원은 많지만 유료 전환율 낮음</li>
            <li>기존 첫 결제율: 5% (업계 평균 이하)</li>
            <li>MAU 300만명 중 15만명만 결제 경험 → 잠재 매출 손실 연 수십억</li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="가설">
          <p>타겟 세그먼테이션 — “전체 뿌리기”가 아니라 <strong>행동 기반 세그먼트</strong>로 나눠 맞춤 프로모션을 주면 전환율이 올라갈 것이다.</p>
        </CaseStudyBlock>

        <CaseStudyBlock label="실행">
          <ul className="list-disc pl-5 space-y-1">
            <li>SQL 기반 회원 행동 패턴 분석 (방문 횟수, 장르 선호, 첫 결제까지 일수)</li>
            <li>세그먼트 정의: 고관여 무료 / 저관여 / 장르 충성</li>
            <li>고관여 무료 회원 타겟: 10회 방문 달성 시 첫 결제 50% 할인 + 푸시</li>
            <li>장르별 맞춤 제안, 24시간 한정 FOMO 프로모션</li>
            <li>Week 1–2 기획안 → Week 3–6 개발 협업 → Week 7–8 A/B 테스트</li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="성과 (숫자·임팩트)" accent>
          <ul className="space-y-2">
            <li><strong>첫 결제율:</strong> 5% → 10% (100% 개선)</li>
            <li><strong>신규 결제 회원:</strong> 월 1.5만명 → 3만명 (2배)</li>
            <li><strong>추정 월 매출 증가:</strong> +3,000만원 / 연간 +3.6억원</li>
            <li><strong>고관여 세그먼트 전환율:</strong> 15% → 28%</li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="배운 점">
          <ul className="list-disc pl-5 space-y-1">
            <li>데이터는 거짓말하지 않는다 — 수치로 설득</li>
            <li>5%p 개선 = 연 3.6억 매출 증가 (규모가 크면 작은 개선도 임팩트 큼)</li>
            <li>프로모션은 “누구에게”가 핵심 → A/B 테스트 설계·분석 루틴 도입</li>
          </ul>
        </CaseStudyBlock>

        <div className="rounded-xl border border-stone-700 bg-stone-900/30 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">참고: SQL 예시</p>
          <pre className="overflow-x-auto rounded-lg bg-stone-950 p-4 text-sm text-stone-300">
            <code>{`SELECT user_segment, AVG(page_views), conversion_rate, days_to_first_payment
FROM user_behavior WHERE signup_date >= '2023-01-01' GROUP BY user_segment;`}</code>
          </pre>
        </div>
      </div>
    </article>
  )
}
