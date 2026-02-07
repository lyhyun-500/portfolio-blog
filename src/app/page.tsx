import { Hero } from '@/components/portfolio/Hero'
import { ExecutiveSummary } from '@/components/portfolio/ExecutiveSummary'
import { Differentiators } from '@/components/portfolio/Differentiators'
import { GrowthMetrics } from '@/components/portfolio/GrowthMetrics'
import { ProjectCards } from '@/components/portfolio/ProjectCards'
import { DataAnalysis } from '@/components/portfolio/DataAnalysis'
import { GlobalExperience } from '@/components/portfolio/GlobalExperience'
import { Timeline } from '@/components/portfolio/Timeline'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-12 lg:px-8">
      <Hero />

      <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 lg:grid-cols-2">
        <ExecutiveSummary />
        <Differentiators />
      </div>

      <div className="mt-6 sm:mt-8">
        <GrowthMetrics />
      </div>

      <div className="mt-6 sm:mt-8">
        <ProjectCards />
      </div>

      <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 lg:grid-cols-2">
        <DataAnalysis />
        <GlobalExperience />
      </div>

      <div className="mt-6 sm:mt-8">
        <Timeline />
      </div>
    </div>
  )
}
