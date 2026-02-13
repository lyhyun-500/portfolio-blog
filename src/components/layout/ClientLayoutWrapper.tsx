'use client'

import { LayoutConfig } from '@/lib/module-types'
import { defaultLayoutConfig } from '@/lib/module-config'
import { useEffect } from 'react'

/**
 * 클라이언트 사이드 레이아웃 래퍼
 * 관리자 설정이 있으면 DOM을 업데이트하여 모듈 표시/숨김 처리
 * 서버에서 렌더링된 기본 콘텐츠를 유지하면서 클라이언트에서만 업데이트
 */
export function ClientLayoutWrapper() {
  useEffect(() => {
    // 클라이언트에서만 실행
    // 관리자 설정 확인
    const saved = localStorage.getItem('portfolio-layout-config')
    if (!saved) {
      return // 기본 설정 사용
    }

    try {
      const customConfig: LayoutConfig = JSON.parse(saved)
      
      // 기본 설정과 동일하면 아무것도 하지 않음
      if (JSON.stringify(customConfig) === JSON.stringify(defaultLayoutConfig)) {
        return
      }

      // 각 모듈의 표시/숨김 상태 업데이트
      customConfig.modules.forEach((module) => {
        const element = document.querySelector(`[data-module-id="${module.id}"]`)
        if (element) {
          if (module.visible) {
            ;(element as HTMLElement).style.display = ''
          } else {
            ;(element as HTMLElement).style.display = 'none'
          }
        }
      })

      // 모듈 순서 재정렬 (필요시)
      const container = document.querySelector('[data-layout-container]')
      if (container) {
        const sortedModules = customConfig.modules
          .filter(m => m.visible)
          .sort((a, b) => a.order - b.order)
        
        sortedModules.forEach((module) => {
          const element = document.querySelector(`[data-module-id="${module.id}"]`)
          if (element && container.contains(element)) {
            container.appendChild(element)
          }
        })
      }
    } catch (e) {
      console.error('Failed to apply custom config:', e)
    }
  }, [])

  // 아무것도 렌더링하지 않음 (서버에서 이미 기본 콘텐츠 렌더링됨)
  return null
}
