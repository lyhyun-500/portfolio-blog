'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('포트폴리오 에러:', error)
  }, [error])

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-8 text-center">
      <h2 className="mb-4 text-xl font-bold text-stone-100">오류가 발생했습니다</h2>
      <p className="mb-6 max-w-md text-sm text-stone-400">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-dark"
      >
        다시 시도
      </button>
      <p className="mt-6 text-xs text-stone-500">
        브라우저 콘솔(F12)에서 상세 에러 확인 가능
      </p>
    </div>
  )
}
