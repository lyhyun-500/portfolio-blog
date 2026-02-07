import Link from 'next/link'

export const metadata = {
  title: '작품 업로드 자동화 | 포트폴리오',
  description: '수동 2달 → 스크립트 2시간, 업로드 프로세스 혁신',
}

export default function AutomationPage() {
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
          핵심 프로젝트 2: 작품 업로드 자동화
        </h1>
        <p className="mt-2 text-stone-400">6-7페이지</p>
      </header>

      <div className="space-y-12 prose-custom">
        <section>
          <h2>문제: 대규모 콘텐츠 운영의 병목</h2>
          <ul>
            <li>플랫폼 규모: 3만 작품 운영</li>
            <li>기존 프로세스: 이메일 수령 → 관리자 페이지 1개씩 업로드 → 수동 메타데이터</li>
            <li>작품 1개(10회차) 업로드: 약 1시간 / 1만 작품: 약 2달</li>
            <li>운영팀 번아웃, 휴먼 에러, 확장성 제로</li>
          </ul>
        </section>

        <section>
          <h2>1단계: 수동 프로세스 체계화</h2>
          <ul>
            <li>엑셀 메타데이터 템플릿 (컬럼 표준화, 드롭다운)</li>
            <li>이미지 파일 명명 규칙: [작품ID]_[회차]_[페이지].jpg</li>
            <li>검증 체크리스트 도입 → 업로드 시간 30% 단축, 오류율 50% 감소</li>
          </ul>
        </section>

        <section>
          <h2>2단계: 완전 자동화 시스템</h2>
          <p>Python 기반 일괄 업로드 스크립트</p>
          <ul>
            <li>엑셀 읽기 (pandas) → 이미지·메타데이터 매칭 → MySQL INSERT</li>
            <li>오류 로그 자동 생성</li>
          </ul>
          <p className="font-semibold text-accent">1만 작품: 2달 → 스크립트 실행 2시간 (96% 단축)</p>
        </section>

        <section>
          <h2>정량적 성과</h2>
          <ul>
            <li>업로드 시간: 96% 단축</li>
            <li>오류율: 거의 0%</li>
            <li>3만 작품 규모로 확장 가능한 인프라</li>
          </ul>
          <h3>배운 점</h3>
          <ul>
            <li>✓ 1차 체계화 → 2차 자동화 (단계적)</li>
            <li>✓ 운영팀 피드백이 핵심</li>
            <li>✓ 확장성 고려한 설계</li>
          </ul>
        </section>
      </div>
    </article>
  )
}
