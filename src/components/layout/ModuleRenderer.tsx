import { ModuleId, ModuleConfig } from '@/lib/module-types'
import { Hero } from '@/components/portfolio/Hero'
import { ExecutiveSummary } from '@/components/portfolio/ExecutiveSummary'
import { Differentiators } from '@/components/portfolio/Differentiators'
import { GrowthMetrics } from '@/components/portfolio/GrowthMetrics'
import { ProjectCards } from '@/components/portfolio/ProjectCards'
import { DataAnalysis } from '@/components/portfolio/DataAnalysis'
import { GlobalExperience } from '@/components/portfolio/GlobalExperience'
import { Timeline } from '@/components/portfolio/Timeline'

const moduleComponents: Record<ModuleId, React.ComponentType> = {
  'hero': Hero,
  'executive-summary': ExecutiveSummary,
  'differentiators': Differentiators,
  'growth-metrics': GrowthMetrics,
  'project-cards': ProjectCards,
  'data-analysis': DataAnalysis,
  'global-experience': GlobalExperience,
  'timeline': Timeline,
}

interface ModuleRendererProps {
  config: ModuleConfig
}

export function ModuleRenderer({ config }: ModuleRendererProps) {
  if (!config.visible) {
    return null
  }

  const Component = moduleComponents[config.id]
  if (!Component) {
    console.warn(`Module component not found for id: ${config.id}`)
    return null
  }

  return <Component />
}
