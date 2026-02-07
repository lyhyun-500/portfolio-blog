import Link from 'next/link'
import { CaseStudyBlock } from '@/components/portfolio/CaseStudyBlock'
import { ChartPlaceholder } from '@/components/portfolio/ChartPlaceholder'

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
          케이스 스터디: 작품 업로드 자동화
        </h1>
        <p className="mt-2 text-stone-400">문제 → 해결 과정 → 결과 → 배운 점</p>
      </header>

      <div className="space-y-8">
        <CaseStudyBlock label="문제">
          <ul className="list-disc pl-5 space-y-1">
            <li>플랫폼 규모: 3만 작품 운영, 신작·회차 업데이트 빈번</li>
            <li>기존: 이메일 수령 → 관리자 페이지에서 1개씩 수동 업로드 → 메타데이터 수동 입력</li>
            <li>작품 1개(10회차) 업로드 약 1시간 / 1만 작품 약 2달 (야근 포함)</li>
            <li>운영팀 번아웃, 휴먼 에러, 확장성 제로</li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="해결 과정">
          <p className="mb-3"><strong>1단계: 수동 프로세스 체계화</strong></p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>엑셀 메타데이터 템플릿 (컬럼 표준화, 드롭다운)</li>
            <li>이미지 파일 명명 규칙: [작품ID]_[회차]_[페이지].jpg</li>
            <li>검증 체크리스트 도입 → 업로드 시간 30% 단축, 오류율 50% 감소</li>
          </ul>
          <p className="mb-3"><strong>2단계: 완전 자동화</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Python 기반 일괄 업로드 스크립트 (pandas, MySQL)</li>
            <li>엑셀 + 이미지 매칭 → DB INSERT, 오류 로그 자동 생성</li>
          </ul>
        </CaseStudyBlock>

        <ChartPlaceholder
          title="Before / After 업로드 시간"
          description="2달 → 2시간 (96% 단축) 시각화"
          aspect="wide"
        />
        <ChartPlaceholder
          title="프로세스 플로우 또는 스크립트/데모 스크린샷"
          description="자동화 전후 프로세스 다이어그램"
          aspect="video"
        />

        <CaseStudyBlock label="결과 (숫자·임팩트)" accent>
          <ul className="space-y-2">
            <li><strong>업로드 시간:</strong> 2달 → 스크립트 실행 2시간 (96% 단축)</li>
            <li><strong>오류율:</strong> 거의 0%, 수정 작업 90% 감소</li>
            <li><strong>인프라:</strong> 3만 작품 규모로 확장 가능</li>
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock label="배운 점">
          <ul className="list-disc pl-5 space-y-1">
            <li>1차 체계화 → 2차 자동화 (단계적으로)</li>
            <li>운영팀 피드백이 핵심 — 실사용자 의견 반영해야 실전 활용</li>
            <li>확장성 고려한 설계 (3만 → 10만 작품으로 늘어나도 작동)</li>
          </ul>
        </CaseStudyBlock>
      </div>
    </article>
  )
}
