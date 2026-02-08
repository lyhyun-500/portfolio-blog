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

export const personalProject = {
  status: '준비 중',
  intro: '개인으로 기획·설계 중인 프로젝트입니다. 설계 단계의 고민과 선택지를 여기에 정리해 둡니다.',

  design: [
    {
      title: 'Modular Page Layout System',
      content: `페이지를 섹션 단위로 모듈(Part)로 나누고, 설정에 따라 각 섹션의 위치, 순서, 노출을 제어할 수 있는 시스템. 개발자 개입 없이 레이아웃 변경이 가능하도록 하여 운영 및 실험 속도를 개선하는 것이 목표.`,
    },
  ] as DesignItem[],

  considerations: [
    {
      question: '문제점: 페이지 레이아웃이 코드에 고정되어 있음',
      options: [
        '콘텐츠 위치 변경 시마다 개발 리소스 필요',
        '레이아웃 변경 비용이 높음',
        'A/B 테스트나 개인화 실험을 빠르게 반복하기 어려움',
      ],
    },
    {
      question: '목표: 모듈화된 페이지 레이아웃 시스템',
      options: [
        '페이지를 섹션 단위로 모듈(Part)로 분리',
        '설정에 따라 각 섹션의 위치, 순서, 노출 제어',
        '개발자 개입 없이 레이아웃 변경 가능',
        '운영 및 실험 속도 개선',
      ],
    },
    {
      question: '왜 중요한가?',
      options: [
        '콘텐츠 운영의 병목 제거',
        '실험 사이클 단축으로 데이터 기반 의사결정 가능',
        '페이지를 "화면"에서 운영 가능한 자산으로 전환',
      ],
    },
  ] as ConsiderationItem[],
}
