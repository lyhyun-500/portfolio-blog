import Link from 'next/link'

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
          핵심 프로젝트 1: 첫 결제율 100% 개선
        </h1>
        <p className="mt-2 text-stone-400">3-5페이지</p>
      </header>

      <div className="space-y-12 prose-custom">
        <section>
          <h2>문제 정의 & 데이터 분석</h2>
          <h3>배경</h3>
          <ul>
            <li>문제: 무료 회원은 많지만 유료 전환율 낮음</li>
            <li>기존 첫 결제율: 5% (업계 평균 이하)</li>
            <li>MAU 300만명 중 15만명만 결제 경험 → 잠재 매출 손실 연 수십억</li>
          </ul>

          <h3>데이터 분석 프로세스</h3>
          <p>1단계: MySQL 쿼리로 회원 행동 패턴 분석</p>
          <pre className="rounded-xl bg-stone-950 p-4 text-sm overflow-x-auto">
            <code>{`SELECT 
  user_segment,
  AVG(page_views) as avg_views,
  COUNT(CASE WHEN first_payment_date IS NOT NULL THEN 1 END) 
    / COUNT(*) * 100 as conversion_rate,
  AVG(DATEDIFF(first_payment_date, signup_date)) as days_to_first_payment
FROM user_behavior
WHERE signup_date >= '2023-01-01'
GROUP BY user_segment;`}</code>
          </pre>
          <p><strong>2단계 주요 발견:</strong></p>
          <ul>
            <li>10회 이상 방문 무료 회원 전환율: 15% (평균 5%의 3배)</li>
            <li>첫 결제까지 평균 14일</li>
            <li>로맨스 12% vs BL 8% 장르별 전환율 차이</li>
          </ul>
          <p><strong>3단계 세그먼트:</strong> 고관여 무료 회원 / 저관여 / 장르 충성 회원</p>
        </section>

        <section>
          <h2>솔루션 & 실행</h2>
          <h3>행동 기반 타겟 프로모션</h3>
          <ul>
            <li><strong>전략 1:</strong> 고관여 무료 회원 → 10회 방문 달성 즉시 첫 결제 50% 할인 푸시</li>
            <li><strong>전략 2:</strong> 장르별 맞춤 제안 (로맨스/BL 선호 데이터 기반)</li>
            <li><strong>전략 3:</strong> 24시간 한정 FOMO 심리 활용</li>
          </ul>
          <p>Week 1-2 기획안 → Week 3-6 개발팀 협업 → Week 7-8 A/B 테스트</p>
        </section>

        <section>
          <h2>결과 & 임팩트</h2>
          <div className="rounded-xl border border-stone-700 bg-stone-900/50 p-6">
            <p className="font-semibold text-accent">첫 결제율: 5% → 10% (100% 개선)</p>
            <ul className="mt-2">
              <li>신규 결제 회원: 월 1.5만명 → 3만명 (2배)</li>
              <li>추정 월 매출 증가: +3,000만원 / 연간 +3.6억원</li>
            </ul>
            <p className="mt-4 font-semibold">고관여 세그먼트 전환율: 15% → 28%</p>
          </div>
          <h3>배운 점</h3>
          <ul>
            <li>✓ 데이터는 거짓말하지 않는다 — 수치로 설득</li>
            <li>✓ 5%p 개선 = 연 3.6억 매출 증가</li>
            <li>✓ 프로모션은 &quot;누구에게&quot;가 핵심</li>
          </ul>
        </section>
      </div>
    </article>
  )
}
