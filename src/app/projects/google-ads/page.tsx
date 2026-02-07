import Link from 'next/link'
import { CaseStudyBlock } from '@/components/portfolio/CaseStudyBlock'

export const metadata = {
  title: '구글 광고 유입 시도 | 포트폴리오',
  description: '실패 프로젝트에서 배운 교훈',
}

export default function GoogleAdsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/#projects" className="mb-8 inline-block text-sm text-stone-500 hover:text-accent">
        ← 프로젝트 목록
      </Link>

      <header className="mb-12">
        <span className="rounded-full bg-stone-700 px-2.5 py-0.5 text-xs font-medium text-stone-400">
          실패 → 피벗
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-100">
          케이스 스터디: 구글 광고 유입 시도
        </h1>
        <p className="mt-2 text-stone-400">문제 → 시도 → 실패 원인 → 대안 · 배운 점</p>
      </header>

      <div className="space-y-8">
        <CaseStudyBlock label="문제">
          <ul className="list-disc pl-5 space-y-1">
            <li>성인 콘텐츠 → 구글 광고 정책 위반으로 광고 불가</li>
            <li>CAC(고객 획득 비용) 높음, 경쟁사도 동일 이슈</li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="시도">
          <ul className="list-disc pl-5 space-y-1">
            <li>전략 1: 전연령 작품만 광고에 노출, 가입 후 연령 인증</li>
            <li>전략 2: 선정적 소재 배제, &quot;로맨스 웹툰&quot; 등 중립 문구</li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="실패 원인">
          <ul className="list-disc pl-5 space-y-1">
            <li>구글 정책팀 수동 검수 → 사이트 내부 확인 후 적발</li>
            <li>법적 리스크: 미성년자 유입, 기만 광고 소지</li>
            <li>경영진: &quot;꼼수로 성장하지 말자&quot;</li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="대안 전환">
          <p>네이버/카카오 집중, 인플루언서 마케팅, SEO, 자체 커뮤니티 강화</p>
        </CaseStudyBlock>

        <CaseStudyBlock label="배운 점">
          <ul className="list-disc pl-5 space-y-1">
            <li>플랫폼 정책 우회는 단기 해법, 장기적으론 독</li>
            <li>제약 조건 내에서 창의성 발휘</li>
            <li>실패도 포트폴리오: 시도와 피벗 능력 증명</li>
            <li>법적/윤리적 경계선 판단 중요</li>
          </ul>
        </CaseStudyBlock>
      </div>
    </article>
  )
}
