import { LayoutConfig, ModuleId } from './module-types'

/**
 * 기본 레이아웃 설정
 * 포트폴리오 블로그의 각 섹션을 모듈로 정의
 */
export const defaultLayoutConfig: LayoutConfig = {
  modules: [
    {
      id: 'hero',
      visible: true,
      order: 1,
      position: 'top',
    },
    {
      id: 'executive-summary',
      visible: true,
      order: 2,
      position: 'middle',
    },
    {
      id: 'differentiators',
      visible: true,
      order: 3,
      position: 'middle',
    },
    {
      id: 'growth-metrics',
      visible: true,
      order: 4,
      position: 'middle',
    },
    {
      id: 'project-cards',
      visible: true,
      order: 5,
      position: 'middle',
    },
    {
      id: 'data-analysis',
      visible: true,
      order: 6,
      position: 'middle',
    },
    {
      id: 'global-experience',
      visible: true,
      order: 7,
      position: 'middle',
    },
    {
      id: 'timeline',
      visible: true,
      order: 8,
      position: 'bottom',
    },
  ],
  version: '1.0.0',
}

/**
 * 모듈 설정 가져오기
 */
export function getModuleConfig(id: ModuleId, config: LayoutConfig = defaultLayoutConfig) {
  return config.modules.find(m => m.id === id)
}

/**
 * 정렬된 모듈 목록 가져오기
 */
export function getSortedModules(config: LayoutConfig = defaultLayoutConfig) {
  return config.modules
    .filter(m => m.visible)
    .sort((a, b) => a.order - b.order)
}
