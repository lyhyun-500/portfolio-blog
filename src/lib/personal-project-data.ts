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

export interface ScreenshotItem {
  label: string
  imagePath: string
  description?: string
}

export interface PersonalProject {
  id: string
  title: string
  status: '구현 완료' | '진행 중' | '준비 중'
  intro: string
  design?: DesignItem[]
  implementations?: ImplementationItem[]
  considerations?: ConsiderationItem[]
  postManagement?: PostManagementItem[]
  productionConsiderations?: ProductionConsiderationItem[]
  adminLink?: string
  screenshots?: ScreenshotItem[]
}

export const personalProjects: PersonalProject[] = [
  {
    id: 'modular-layout-system',
    title: 'Modular Page Layout System',
    status: '구현 완료',
    intro: '포트폴리오 블로그에 적용한 모듈 레이아웃 시스템입니다. 실제로 작동하는 시스템으로 구현되었습니다.',
    adminLink: '/admin',
    screenshots: [
      {
        label: '메인 화면',
        imagePath: '/screenshots/modular-system/main.png',
        description: '기본 메인 페이지 레이아웃',
      },
      {
        label: '어드민 화면',
        imagePath: '/screenshots/modular-system/admin.png',
        description: '모듈 순서 및 표시/숨김 관리 인터페이스',
      },
      {
        label: '변경 적용',
        imagePath: '/screenshots/modular-system/applied.png',
        description: '어드민에서 변경한 설정이 적용된 메인 페이지',
      },
    ],
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
  },
  {
    id: 'mailcraft',
    title: 'MailCraft - AI 이메일 어시스턴트 크롬 확장프로그램',
    status: '진행 중',
    intro: 'Gmail에서 이메일을 요약하고, 완벽한 답장을 자동으로 생성하는 PM/기획자 특화 도구. 하루 30분을 아끼는 AI 어시스턴트.',
    design: [
      {
        title: 'MailCraft',
        content: `Gmail 사이드바에서 작동하는 AI 어시스턴트. 이메일을 열면 자동으로 요약하고, 클릭 한 번으로 답장 초안을 생성합니다. 사용자는 Gmail을 떠나지 않고 모든 것을 처리합니다.`,
      },
      {
        title: '핵심 문제 해결',
        content: `PM/기획자/마케터는 하루 업무 시간의 상당 부분을 이메일에 쓰고 있습니다. 긴 스레드 읽기(15~20분), 답장 작성 고민(10분), 컨텍스트 스위칭 등으로 인해 비효율이 발생합니다. MailCraft는 이러한 문제를 해결하여 하루 30~60분을 절약할 수 있도록 도와줍니다.`,
      },
    ] as DesignItem[],
    implementations: [
      {
        feature: '스마트 요약 (Smart Summary)',
        description: '이메일/스레드를 열면 사이드바에 3줄 요약이 자동 표시. 핵심 결정사항, 액션 아이템, 마감일을 추출',
        status: '완료',
      },
      {
        feature: '답장 초안 생성 (Smart Reply)',
        description: '받은 이메일의 맥락과 톤을 파악하여 답장 초안 3개를 생성. PM 특화 톤: 협업적, 구조적, 액션 중심',
        status: '진행 중',
      },
      {
        feature: 'Gmail 사이드바 UI',
        description: 'Gmail을 떠나지 않고 모든 인터랙션이 사이드바 내에서 완결되는 UX',
        status: '완료',
      },
      {
        feature: '사용량 제한 시스템',
        description: '무료 티어: 요약 5회/일, 답장 3회/일. 사용량 추적 및 제한 로직 구현',
        status: '완료',
      },
      {
        feature: '비용 최적화',
        description: '이메일 본문 1000자 제한, 응답 토큰 300으로 제한, 클라이언트 사이드 캐싱으로 중복 API 호출 방지',
        status: '완료',
      },
      {
        feature: '플로팅 버튼',
        description: '사이드바 닫기 후에도 플로팅 버튼으로 다시 열 수 있는 기능',
        status: '완료',
      },
    ] as ImplementationItem[],
    considerations: [
      {
        question: '문제점: PM/기획자의 이메일 처리 비효율',
        options: [
          '긴 스레드 읽기에 평균 15~20분 소요',
          '답장 작성 고민에 평균 10분 소요',
          '이메일 처리에 하루 평균 2.5시간 소비 (28% of 업무시간)',
        ],
        note: '✅ 해결: AI 요약 및 답장 초안 생성으로 하루 30~60분 절약 가능',
      },
      {
        question: '목표: PM 특화 AI 이메일 어시스턴트',
        options: [
          'Gmail 사이드바에서 모든 기능 제공',
          '요약 정확도 만족도 > 4.0/5.0',
          '답장 초안 채택률 > 40%',
          '주간 활성 사용자(WAU) 중 답장 기능 사용자 비율 40% 이상',
        ],
      },
      {
        question: '왜 중요한가?',
        options: [
          'PM의 핵심 업무인 커뮤니케이션 효율화',
          '이메일 처리 시간 30% 절감으로 핵심 업무에 집중 가능',
          'PM 특화 톤/템플릿으로 답장 품질 향상',
        ],
      },
      {
        question: '기술적 고려사항',
        options: [
          'Gmail UI 변경에 대응하기 위한 MutationObserver 활용',
          'AI API 비용 통제를 위한 캐싱 및 사용량 제한',
          'Chrome Web Store 심사를 위한 권한 최소화',
        ],
      },
    ] as ConsiderationItem[],
    postManagement: [
      {
        category: '사용자 확보',
        priority: '높음',
        items: [
          'Product Hunt 런칭으로 초기 사용자 확보',
          'PM 커뮤니티(슬랙, 디스코드)에서 공유',
          '무료 티어로 사용자 습관 형성 유도',
        ],
      },
      {
        category: '유료 전환',
        priority: '높음',
        items: [
          '무료 티어 사용량 제한으로 자연스러운 업그레이드 유도',
          'Pro 플랜($9/월) 가격 전략으로 수익화',
          'Team 플랜($19/인/월)으로 B2B 확장',
        ],
      },
      {
        category: '성공 지표 추적',
        priority: '높음',
        items: [
          'DAU, WAU 추적',
          'Activation Rate (설치 후 7일 이내 기능 사용 비율)',
          '요약 사용률, 답장 채택률 측정',
          'MRR, NPS 추적',
        ],
      },
      {
        category: '기능 확장',
        priority: '중간',
        items: [
          '톤 변환 기능 (v1.1)',
          '영한/한영 번역 후 톤 조정 (v1.2)',
          '스레드 타임라인 요약 (v1.3)',
          '팀 공유 템플릿 (v2.0)',
        ],
      },
    ] as PostManagementItem[],
    productionConsiderations: [
      {
        title: 'AI API 비용 관리',
        description: 'Claude API 사용량에 따른 비용을 효과적으로 관리해야 합니다.',
        impact: '높음',
        considerations: [
          'Haiku 모델 사용으로 비용 최적화 (월 $5~15 예상)',
          '이메일 본문 1000자 제한으로 입력 토큰 절감',
          '응답 토큰 300으로 제한하여 출력 비용 절감',
          '클라이언트 사이드 캐싱으로 동일 이메일 재요약 방지',
          '사용량 제한으로 무료 티어 비용 통제',
        ],
      },
      {
        title: 'Gmail UI 변경 대응',
        description: 'Gmail의 DOM 구조 변경에 대응할 수 있는 유연한 구조가 필요합니다.',
        impact: '높음',
        considerations: [
          'DOM 셀렉터를 최소한으로 사용',
          'MutationObserver로 DOM 변경 감지',
          'Gmail 업데이트 시 빠른 대응을 위한 모니터링 체계',
        ],
      },
      {
        title: 'Chrome Web Store 심사',
        description: 'Chrome Web Store 심사를 통과하기 위한 준비가 필요합니다.',
        impact: '중간',
        considerations: [
          '권한 최소화 (필요한 권한만 요청)',
          '개인정보처리방침 준비',
          '심사 가이드 사전 확인 및 준수',
        ],
      },
      {
        title: '확장성 고려사항',
        description: '대규모 사용자 확보 시 인프라 및 비용 관리',
        impact: '중간',
        considerations: [
          'Supabase 무료 티어로 시작, 유료 전환 시점 계획',
          'Stripe 결제 시스템 연동 준비',
          'Mixpanel 무료 티어로 분석 시작',
        ],
      },
    ] as ProductionConsiderationItem[],
  },
]

// 하위 호환성을 위한 기본 export (첫 번째 프로젝트)
export const personalProject = personalProjects[0]
