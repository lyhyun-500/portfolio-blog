import Link from 'next/link'

const projects = [
  {
    slug: 'first-payment',
    title: '첫 결제율 100% 개선',
    description: '행동 기반 타겟 프로모션으로 5% → 10% 전환율 달성, 연 3.6억 매출 증가',
    type: '성공',
    color: 'accent' as const,
  },
  {
    slug: 'automation',
    title: '작품 업로드 자동화',
    description: '수동 2달 → 스크립트 2시간, 1만 작품 업로드 프로세스 혁신',
    type: '성공',
    color: 'accent' as const,
  },
  {
    slug: 'kadokawa',
    title: '일본 카도카와 협업 · EPUB 뷰어 연동',
    description: '일본 3대 출판사 카도카와 요구사항 대응, 소설·사진집 출판 계약 확보',
    type: '성공',
    color: 'accent' as const,
  },
  {
    slug: 'google-ads',
    title: '구글 광고 유입 시도',
    description: '정책 위반으로 실패 → 대안 전략으로 전환, 실패에서 배운 교훈',
    type: '실패',
    color: 'stone' as const,
  },
  {
    slug: 'personal',
    href: '/personal',
    title: '개인 프로젝트',
    description: '설계·고민 정리. 준비 중이어도 생각을 쌓아두는 공간',
    type: '준비 중',
    color: 'stone' as const,
  },
]

export function ProjectCards() {
  return (
    <section
      id="projects"
      className="rounded-3xl border border-stone-800 bg-stone-900/30 p-8 sm:p-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-stone-100">
          핵심 프로젝트
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
          3-8페이지
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={p.href ?? `/projects/${p.slug}`}
            className="group block overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/50 p-6 transition-all hover:border-stone-600 hover:bg-stone-800/50"
          >
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                p.type === '성공'
                  ? 'bg-accent/20 text-accent'
                  : 'bg-stone-700 text-stone-400'
              }`}
            >
              {p.type}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-stone-100 group-hover:text-accent">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-stone-400 line-clamp-2">
              {p.description}
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-accent">
              상세 보기 →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
