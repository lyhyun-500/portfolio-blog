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

  design: [] as DesignItem[],

  considerations: [] as ConsiderationItem[],
}
