// 개인 프로젝트 — 설계·고민 정리 (준비 중이어도 생각만 넣어두기 좋게)

export interface DesignItem {
  title: string
  content: string
}

export interface ConsiderationItem {
  question: string
  options?: string[]
  note?: string
}

export interface ImplementationItem {
  feature: string
  description: string
  status: '완료' | '진행 중' | '예정'
}

export interface PostManagementItem {
  category: string
  items: string[]
  priority?: '높음' | '중간' | '낮음'
}

export interface ProductionConsiderationItem {
  title: string
  description: string
  considerations: string[]
  impact: '높음' | '중간' | '낮음'
}

export const personalProject = {
  status: '구현 완료',
  intro: '포트폴리오 블로그에 적용한 모듈 레이아웃 시스템입니다. 실제로 작동하는 시스템으로 구현되었습니다.',

  design: [
    {
      title: 'Modular Page Layout System',
      content: `페이지를 섹션 단위로 모듈(Part)로 나누고, 설정에 따라 각 섹션의 위치, 순서, 노출을 제어할 수 있는 시스템. 개발자 개입 없이 레이아웃 변경이 가능하도록 하여 운영 및 실험 속도를 개선하는 것이 목표.`,
    },
  ] as DesignItem[],

  implementations: [
    {
      feature: '모듈 시스템 핵심 구조',
      description: 'ModuleRenderer, LayoutEngine을 통한 모듈 기반 렌더링 시스템 구축',
      status: '완료',
    },
    {
      feature: '어드민 페이지',
      description: '/admin 페이지에서 모듈 순서 변경, 표시/숨김 제어 가능한 관리 UI',
      status: '완료',
    },
    {
      feature: '권한 시스템',
      description: '비밀번호 기반 인증으로 관리자만 접근 가능 (/admin/auth)',
      status: '완료',
    },
    {
      feature: '설정 저장/로드',
      description: '로컬스토리지 기반 설정 저장으로 변경사항 영구 보존',
      status: '완료',
    },
    {
      feature: '미리보기 기능',
      description: '어드민에서 변경사항을 실시간으로 미리보기 가능',
      status: '완료',
    },
  ] as ImplementationItem[],

  considerations: [
    {
      question: '문제점: 페이지 레이아웃이 코드에 고정되어 있음',
      options: [
        '콘텐츠 위치 변경 시마다 개발 리소스 필요',
        '레이아웃 변경 비용이 높음',
        'A/B 테스트나 개인화 실험을 빠르게 반복하기 어려움',
      ],
      note: '✅ 해결: 모듈 시스템으로 설정 기반 레이아웃 제어 가능',
    },
    {
      question: '목표: 모듈화된 페이지 레이아웃 시스템',
      options: [
        '페이지를 섹션 단위로 모듈(Part)로 분리',
        '설정에 따라 각 섹션의 위치, 순서, 노출 제어',
        '개발자 개입 없이 레이아웃 변경 가능',
        '운영 및 실험 속도 개선',
      ],
      note: '✅ 구현 완료: 모든 목표 달성',
    },
    {
      question: '왜 중요한가?',
      options: [
        '콘텐츠 운영의 병목 제거',
        '실험 사이클 단축으로 데이터 기반 의사결정 가능',
        '페이지를 "화면"에서 운영 가능한 자산으로 전환',
      ],
    },
    {
      question: '다음 단계 (향후 개선)',
      options: [
        '서버 사이드 설정 저장 (현재는 로컬스토리지)',
        'A/B 테스트 기능 통합',
        '드래그 앤 드롭으로 순서 변경',
        '모듈별 개별 설정 (예: 색상, 스타일)',
      ],
    },
  ] as ConsiderationItem[],

  postManagement: [
    {
      category: '데이터 수집 및 분석',
      priority: '높음',
      items: [
        'GA4 연동을 통해 각 모듈(컴포넌트)별 노출/클릭 이벤트 수집',
        '모듈별 스크롤 깊이(Scroll Depth) 추적',
        '레이아웃 변경 전후 사용자 행동 비교 분석',
        '모듈 순서에 따른 전환율(CTR) 측정',
        '숨김 처리된 모듈의 영향도 분석',
      ],
    },
    {
      category: '성능 모니터링',
      priority: '중간',
      items: [
        '모듈별 로딩 시간 측정',
        '레이아웃 변경 시 렌더링 성능 추적',
        '로컬스토리지 설정 로드 시간 모니터링',
      ],
    },
    {
      category: '사용자 경험 분석',
      priority: '높음',
      items: [
        '어드민 페이지 사용 패턴 분석 (어떤 모듈을 자주 변경하는지)',
        '미리보기 기능 사용 빈도 측정',
        '설정 저장/초기화 빈도 추적',
      ],
    },
    {
      category: 'A/B 테스트 준비',
      priority: '중간',
      items: [
        '모듈별 노출 비율 제어 기능 (예: 50% 사용자에게만 표시)',
        '랜덤 배치 실험 자동화',
        '실험 결과 자동 리포트 생성',
      ],
    },
  ] as PostManagementItem[],

  productionConsiderations: [
    {
      title: '캐시 처리 전략',
      description: '모듈 레이아웃 설정이 변경될 때 캐시 무효화 및 갱신 전략이 필요합니다.',
      impact: '높음',
      considerations: [
        'CDN 캐시 무효화: 레이아웃 변경 시 CDN 캐시 즉시 갱신 필요',
        '브라우저 캐시: 설정 변경 시 사용자 브라우저 캐시 강제 갱신 (Cache-Control 헤더)',
        '서버 사이드 캐시: Redis 등에 모듈 설정 캐싱 시 TTL 관리',
        '점진적 배포: 설정 변경을 단계적으로 배포하여 캐시 충돌 방지',
        '캐시 버전 관리: 설정 버전을 URL 파라미터나 헤더에 포함하여 캐시 키 분리',
      ],
    },
    {
      title: '회원 그룹별 분리 및 성능 최적화',
      description: '회원 그룹(세그먼트)별로 다른 레이아웃을 제공할 때 성능 고려가 필수입니다.',
      impact: '높음',
      considerations: [
        '서버 사이드 렌더링(SSR): 회원 그룹별 레이아웃을 서버에서 미리 렌더링하여 전달',
        'Edge Computing: Vercel Edge Functions, Cloudflare Workers 등으로 사용자 그룹 판별 및 레이아웃 결정',
        '데이터베이스 최적화: 회원 그룹 정보 조회를 위한 인덱싱 및 쿼리 최적화',
        '설정 파일 분리: 그룹별 설정을 별도 파일로 분리하여 불필요한 데이터 로드 방지',
        'Lazy Loading: 그룹별 모듈을 동적으로 로드하여 초기 로딩 시간 단축',
        '캐시 전략: 그룹별 레이아웃을 별도로 캐싱하여 재사용 (그룹 ID를 캐시 키에 포함)',
        'A/B 테스트 성능: 실시간 그룹 할당 대신 사전 계산된 그룹 정보 사용',
      ],
    },
    {
      title: '확장성 고려사항',
      description: '대규모 트래픽과 다양한 사용자 그룹을 고려한 아키텍처 설계',
      impact: '중간',
      considerations: [
        '수평 확장: 여러 서버 인스턴스에서 일관된 레이아웃 설정 공유',
        '설정 동기화: 분산 환경에서 설정 변경 시 모든 서버에 동기화 메커니즘 필요',
        '데이터베이스 부하: 회원 그룹 조회 시 DB 부하 최소화 (캐싱, 읽기 전용 복제본 활용)',
      ],
    },
  ] as ProductionConsiderationItem[],
}
