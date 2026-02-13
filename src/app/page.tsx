import { LayoutEngine } from '@/components/layout/LayoutEngine'
import { defaultLayoutConfig } from '@/lib/module-config'
import { ClientLayoutWrapper } from '@/components/layout/ClientLayoutWrapper'

/**
 * 홈 페이지 - SSR로 핵심 콘텐츠 먼저 렌더링
 * JS가 비활성화되어도 기본 콘텐츠는 표시됨
 */
export default function HomePage() {
  return (
    <>
      {/* 서버에서 기본 콘텐츠 먼저 렌더링 (SSR) */}
      <LayoutEngine config={defaultLayoutConfig} />
      
      {/* 클라이언트에서 관리자 설정 적용 (하이드레이션) */}
      <ClientLayoutWrapper />
    </>
  )
}
