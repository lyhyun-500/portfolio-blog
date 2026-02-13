'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { personalProjects } from '@/lib/personal-project-data'

function ImageModal({ imagePath, label, description, isOpen, onClose }: { imagePath: string; label: string; description?: string; isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-stone-900/80 hover:bg-stone-800 p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="닫기"
        >
          <svg
            className="w-6 h-6 text-stone-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* 이미지 */}
        <div className="relative flex-1 flex items-center justify-center min-h-0">
          <Image
            src={imagePath}
            alt={label}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
            loading="eager"
            quality={90}
          />
        </div>

        {/* 이미지 정보 */}
        <div className="mt-4 text-center shrink-0">
          <h3 className="text-lg font-semibold text-stone-100 mb-1">{label}</h3>
          {description && (
            <p className="text-sm text-stone-400">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectSection({ project }: { project: typeof personalProjects[0] }) {
  const { title, status, intro, design, implementations, considerations, postManagement, productionConsiderations, adminLink, screenshots } = project
  const [selectedImage, setSelectedImage] = useState<{ imagePath: string; label: string; description?: string } | null>(null)

  return (
    <div>
      {/* 프로젝트 헤더 */}
      <div className="mb-8 sm:mb-10 pb-6 border-b border-stone-700">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-100">
            {title}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-3">
          {intro}
        </p>
        {adminLink && (
          <div className="mt-4 p-3 bg-accent/10 border border-accent/20 rounded-lg">
            <p className="text-xs sm:text-sm text-stone-300">
              💡 <strong>체험하기:</strong> <Link href={adminLink} className="text-accent hover:underline">{adminLink}</Link> 페이지에서 직접 관리해보세요!
            </p>
          </div>
        )}
      </div>

      {/* 스크린샷 */}
      {screenshots && screenshots.length > 0 && (
        <section className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-4 sm:mb-6">
            화면 구성
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {screenshots.map((screenshot, i) => (
              <div
                key={i}
                className="rounded-xl border border-stone-800 bg-stone-900/30 overflow-hidden cursor-pointer hover:border-accent/50 transition-colors group"
                onClick={() => setSelectedImage(screenshot)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedImage(screenshot)
                  }
                }}
                aria-label={`${screenshot.label} 확대 보기`}
              >
                <div className="relative aspect-video bg-stone-950 overflow-hidden">
                  <Image
                    src={screenshot.imagePath}
                    alt={screenshot.label}
                    fill
                    className="object-contain transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h4 className="text-sm sm:text-base font-medium text-accent mb-1">
                    {screenshot.label}
                  </h4>
                  {screenshot.description && (
                    <p className="text-xs sm:text-sm text-stone-400">
                      {screenshot.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {selectedImage && (
            <ImageModal
              imagePath={selectedImage.imagePath}
              label={selectedImage.label}
              description={selectedImage.description}
              isOpen={!!selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </section>
      )}

      {/* 설계 */}
      {design && design.length > 0 && (
        <section className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-4 sm:mb-6">
            설계
          </h3>
          <ul className="space-y-4 sm:space-y-6">
            {design.map((d, i) => (
              <li key={i} className="rounded-xl border border-stone-700 bg-stone-800/30 p-4 sm:p-5">
                <h4 className="text-sm sm:text-base font-medium text-accent">{d.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed whitespace-pre-line">{d.content}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 구현 내용 */}
      {implementations && implementations.length > 0 && (
        <section className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-4 sm:mb-6">
            구현 내용
          </h3>
          <ul className="space-y-3 sm:space-y-4">
            {implementations.map((impl, i) => (
              <li key={i} className="rounded-xl border border-stone-700 bg-stone-800/30 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h4 className="text-sm sm:text-base font-medium text-stone-200">{impl.feature}</h4>
                    <p className="mt-1 text-xs sm:text-sm text-stone-300 leading-relaxed whitespace-pre-line">{impl.description}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    impl.status === '완료'
                      ? 'bg-green-900/30 text-green-400 border border-green-800'
                      : impl.status === '진행 중'
                        ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                        : 'bg-stone-700 text-stone-400'
                  }`}>
                    {impl.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 고민·선택지 */}
      {considerations && considerations.length > 0 && (
        <section className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-4 sm:mb-6">
            고민 · 선택지
          </h3>
          <ul className="space-y-4 sm:space-y-6">
            {considerations.map((c, i) => (
              <li key={i} className="rounded-xl border border-stone-700 bg-stone-800/30 p-4 sm:p-5">
                <p className="text-sm sm:text-base font-medium text-stone-200">{c.question}</p>
                {c.options && c.options.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 text-stone-300 text-xs sm:text-sm space-y-1">
                    {c.options.map((o, j) => (
                      <li key={j}>{o}</li>
                    ))}
                  </ul>
                )}
                {c.note && <p className="mt-2 text-xs sm:text-sm text-stone-400 whitespace-pre-line">{c.note}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 사후 관리 */}
      {postManagement && postManagement.length > 0 && (
        <section className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-4 sm:mb-6">
            사후 관리 계획
          </h3>
          <ul className="space-y-4 sm:space-y-6">
            {[...postManagement].sort((a, b) => {
              const priorityOrder: Record<string, number> = { '높음': 0, '중간': 1, '낮음': 2 }
              const aPriority = a.priority || '낮음'
              const bPriority = b.priority || '낮음'
              const aVal = priorityOrder[aPriority] ?? 2
              const bVal = priorityOrder[bPriority] ?? 2
              return aVal - bVal
            }).map((pm, i) => (
              <li key={i} className="rounded-xl border border-stone-700 bg-stone-800/30 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-sm sm:text-base font-medium text-accent">{pm.category}</h3>
                  {pm.priority && (
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      pm.priority === '높음'
                        ? 'bg-red-900/30 text-red-400 border border-red-800'
                        : pm.priority === '중간'
                          ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                          : 'bg-stone-700 text-stone-400'
                    }`}>
                      우선순위: {pm.priority}
                    </span>
                  )}
                </div>
                {pm.items && pm.items.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 text-stone-300 text-xs sm:text-sm space-y-1.5">
                    {pm.items.map((item, j) => (
                      <li key={j} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 실서비스 적용 시 고려사항 */}
      {productionConsiderations && productionConsiderations.length > 0 && (
        <section>
          <h3 className="text-lg sm:text-xl font-semibold text-stone-100 border-b border-stone-700 pb-2 mb-4 sm:mb-6">
            실서비스 적용 시 고려사항
          </h3>
          <ul className="space-y-4 sm:space-y-6">
            {[...productionConsiderations].sort((a, b) => {
              const impactOrder: Record<string, number> = { '높음': 0, '중간': 1, '낮음': 2 }
              const aVal = impactOrder[a.impact] ?? 2
              const bVal = impactOrder[b.impact] ?? 2
              return aVal - bVal
            }).map((pc, i) => (
              <li key={i} className="rounded-xl border border-stone-700 bg-stone-800/30 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-sm sm:text-base font-semibold text-stone-200">{pc.title}</h3>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    pc.impact === '높음'
                      ? 'bg-red-900/30 text-red-400 border border-red-800'
                      : pc.impact === '중간'
                        ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                        : 'bg-stone-700 text-stone-400'
                  }`}>
                    영향도: {pc.impact}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 mb-3 leading-relaxed whitespace-pre-line">{pc.description}</p>
                {pc.considerations && pc.considerations.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 text-stone-300 text-xs sm:text-sm space-y-1.5">
                    {pc.considerations.map((consideration, j) => (
                      <li key={j} className="leading-relaxed">{consideration}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

export default function PersonalPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(personalProjects[0]?.id || '')
  const selectedProject = personalProjects.find(p => p.id === selectedProjectId) || personalProjects[0]

  return (
    <div className="mx-auto max-w-5xl px-3 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16" data-personal-project>
      <Link href="/" className="mb-6 sm:mb-8 inline-block text-xs sm:text-sm text-stone-500 hover:text-accent">
        ← 홈
      </Link>

      <header className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-100">
          개인 프로젝트
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-400 leading-relaxed">
          개인으로 기획·설계 중인 프로젝트입니다. 설계 단계의 고민과 선택지를 여기에 정리해 둡니다.
        </p>
      </header>

      {/* 프로젝트 선택 탭 */}
      <div className="mb-8 sm:mb-10 overflow-x-auto">
        <div className="flex gap-2 sm:gap-3 border-b border-stone-800 min-w-max">
          {personalProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className={`px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors whitespace-nowrap border-b-2 ${
                selectedProjectId === project.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-stone-400 hover:text-stone-300 hover:border-stone-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{project.title}</span>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                  project.status === '구현 완료' 
                    ? 'bg-accent/20 text-accent' 
                    : project.status === '진행 중'
                      ? 'bg-yellow-900/30 text-yellow-400'
                      : 'bg-stone-700 text-stone-400'
                }`}>
                  {project.status}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 선택된 프로젝트 상세 */}
      <div className="rounded-2xl sm:rounded-3xl border border-stone-800 bg-stone-900/50 p-6 sm:p-8 md:p-10">
        <ProjectSection project={selectedProject} />
      </div>
    </div>
  )
}
