'use client'

import { LayoutEngine } from '@/components/layout/LayoutEngine'
import { defaultLayoutConfig } from '@/lib/module-config'
import { LayoutConfig } from '@/lib/module-types'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [config, setConfig] = useState<LayoutConfig | undefined>(undefined)

  // 로컬스토리지에서 저장된 설정 불러오기
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-layout-config')
    if (saved) {
      try {
        setConfig(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load config:', e)
        setConfig(defaultLayoutConfig)
      }
    } else {
      setConfig(defaultLayoutConfig)
    }
  }, [])

  // 설정이 로드될 때까지 로딩 표시
  if (!config) {
    return (
      <div className="min-h-screen bg-[#0f0f11] flex items-center justify-center">
        <p className="text-stone-400">로딩 중...</p>
      </div>
    )
  }

  return <LayoutEngine config={config} />
}
