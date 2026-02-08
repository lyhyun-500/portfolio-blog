'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LayoutConfig, ModuleId } from '@/lib/module-types'
import { defaultLayoutConfig } from '@/lib/module-config'
import { LayoutEngine } from '@/components/layout/LayoutEngine'

const moduleNames: Record<ModuleId, string> = {
  'hero': 'Hero 섹션',
  'executive-summary': 'Executive Summary',
  'differentiators': '핵심 포지셔닝',
  'growth-metrics': '플랫폼 성장 지표',
  'project-cards': '핵심 프로젝트',
  'data-analysis': '데이터 분석 역량',
  'global-experience': '글로벌 시장 경험',
  'timeline': '경력 및 성장',
}

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [config, setConfig] = useState<LayoutConfig>(defaultLayoutConfig)
  const [isPreview, setIsPreview] = useState(false)

  // 인증 확인
  useEffect(() => {
    const authToken = sessionStorage.getItem('admin_token')
    const authenticated = sessionStorage.getItem('admin_authenticated')
    
    if (!authToken || authenticated !== 'true') {
      router.push('/admin/auth')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  // 로그아웃
  const handleLogout = () => {
    sessionStorage.removeItem('admin_token')
    sessionStorage.removeItem('admin_authenticated')
    router.push('/admin/auth')
  }

  // 로컬스토리지에서 설정 불러오기
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-layout-config')
    if (saved) {
      try {
        setConfig(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load config:', e)
      }
    }
  }, [])

  // 설정 저장
  const saveConfig = () => {
    localStorage.setItem('portfolio-layout-config', JSON.stringify(config))
    alert('설정이 저장되었습니다! 메인 페이지를 새로고침하면 변경사항이 적용됩니다.')
  }

  // 설정 초기화
  const resetConfig = () => {
    if (confirm('기본 설정으로 초기화하시겠습니까?')) {
      setConfig(defaultLayoutConfig)
      localStorage.removeItem('portfolio-layout-config')
    }
  }

  // 모듈 표시/숨김 토글
  const toggleModule = (id: ModuleId) => {
    setConfig({
      ...config,
      modules: config.modules.map(m =>
        m.id === id ? { ...m, visible: !m.visible } : m
      ),
    })
  }

  // 모듈 순서 변경
  const moveModule = (id: ModuleId, direction: 'up' | 'down') => {
    const modules = [...config.modules]
    const index = modules.findIndex(m => m.id === id)
    if (index === -1) return

    const newIndex = direction === 'up' ? index - 1 : index + 1
    if (newIndex < 0 || newIndex >= modules.length) return

    // 순서 교환
    const temp = modules[index].order
    modules[index].order = modules[newIndex].order
    modules[newIndex].order = temp

    // 배열 재정렬
    const swapped = modules[index]
    modules[index] = modules[newIndex]
    modules[newIndex] = swapped

    setConfig({ ...config, modules })
  }

  const sortedModules = [...config.modules].sort((a, b) => a.order - b.order)

  // 인증 대기 중
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#0f0f11] flex items-center justify-center">
        <p className="text-stone-400">인증 확인 중...</p>
      </div>
    )
  }

  // 인증되지 않음
  if (!isAuthenticated) {
    return null // useEffect에서 리다이렉트 처리됨
  }

  if (isPreview) {
    return (
      <div>
        <div className="sticky top-0 z-50 border-b border-stone-800 bg-stone-900/95 backdrop-blur-md p-4">
          <div className="mx-auto max-w-6xl flex items-center justify-between">
            <h1 className="text-lg font-semibold text-stone-100">미리보기 모드</h1>
            <button
              onClick={() => setIsPreview(false)}
              className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
            >
              편집 모드로 돌아가기
            </button>
          </div>
        </div>
        <LayoutEngine config={config} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <div className="border-b border-stone-800 bg-stone-900/50 p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-stone-100">모듈 레이아웃 관리</h1>
              <p className="text-sm text-stone-400 mt-1">
                모듈의 표시 여부와 순서를 관리할 수 있습니다
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsPreview(true)}
                className="px-4 py-2 border border-stone-700 text-stone-300 rounded-lg hover:bg-stone-800 transition-colors"
              >
                미리보기
              </button>
              <button
                onClick={saveConfig}
                className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
              >
                저장
              </button>
              <button
                onClick={resetConfig}
                className="px-4 py-2 border border-stone-700 text-stone-400 rounded-lg hover:bg-stone-800 transition-colors"
              >
                초기화
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-red-800 text-red-400 rounded-lg hover:bg-red-900/20 transition-colors"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl p-6">
        <div className="space-y-3">
          {sortedModules.map((module, index) => (
            <div
              key={module.id}
              className={`flex items-center gap-4 p-4 rounded-lg border ${
                module.visible
                  ? 'border-stone-700 bg-stone-900/50'
                  : 'border-stone-800 bg-stone-950 opacity-60'
              }`}
            >
              {/* 순서 표시 */}
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => moveModule(module.id, 'up')}
                  disabled={index === 0}
                  className="p-1 text-stone-500 hover:text-stone-300 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="위로 이동"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <span className="text-xs font-medium text-stone-500 text-center min-w-[2rem]">
                  {module.order}
                </span>
                <button
                  onClick={() => moveModule(module.id, 'down')}
                  disabled={index === sortedModules.length - 1}
                  className="p-1 text-stone-500 hover:text-stone-300 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="아래로 이동"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* 모듈 정보 */}
              <div className="flex-1">
                <h3 className="font-semibold text-stone-100">{moduleNames[module.id]}</h3>
                <p className="text-xs text-stone-500 mt-0.5">ID: {module.id}</p>
              </div>

              {/* 표시/숨김 토글 */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={module.visible}
                  onChange={() => toggleModule(module.id)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                <span className="ml-3 text-sm text-stone-400">
                  {module.visible ? '표시' : '숨김'}
                </span>
              </label>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-stone-900/50 rounded-lg border border-stone-800">
          <h2 className="text-lg font-semibold text-stone-100 mb-2">사용 방법</h2>
          <ul className="space-y-1 text-sm text-stone-400">
            <li>• 위/아래 화살표 버튼으로 모듈 순서를 변경할 수 있습니다</li>
            <li>• 토글 스위치로 모듈의 표시/숨김을 제어할 수 있습니다</li>
            <li>• &quot;미리보기&quot; 버튼으로 변경사항을 확인할 수 있습니다</li>
            <li>• &quot;저장&quot; 버튼을 눌러야 변경사항이 메인 페이지에 적용됩니다</li>
            <li>• 설정은 브라우저 로컬스토리지에 저장됩니다</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
