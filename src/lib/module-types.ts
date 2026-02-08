/**
 * 모듈 타입 정의
 */

export type ModuleId = 
  | 'hero'
  | 'executive-summary'
  | 'differentiators'
  | 'growth-metrics'
  | 'project-cards'
  | 'data-analysis'
  | 'global-experience'
  | 'timeline'

export interface ModuleConfig {
  id: ModuleId
  visible: boolean
  order: number
  position?: 'top' | 'middle' | 'bottom'
  conditional?: {
    key: string
    value: any
  }
}

export interface LayoutConfig {
  modules: ModuleConfig[]
  version?: string
}
