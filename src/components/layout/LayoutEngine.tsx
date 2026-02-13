import { LayoutConfig } from '@/lib/module-types'
import { getSortedModules } from '@/lib/module-config'
import { ModuleRenderer } from './ModuleRenderer'

interface LayoutEngineProps {
  config?: LayoutConfig
}

export function LayoutEngine({ config }: LayoutEngineProps) {
  const modules = getSortedModules(config)

  return (
    <div 
      className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 space-y-6 sm:space-y-8 md:space-y-10"
      data-layout-container
    >
      {modules.map((module) => (
        <div key={module.id} data-module-id={module.id}>
          <ModuleRenderer config={module} />
        </div>
      ))}
    </div>
  )
}
